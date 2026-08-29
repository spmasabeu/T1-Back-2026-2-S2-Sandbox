import { RequestHandler } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { Company, Holding, sequelize, User } from '../models';

function jwtSecret(): string {
  if (!process.env.JWT_SECRET) {
    throw Object.assign(new Error('JWT_SECRET no configurado.'), { status: 500 });
  }
  return process.env.JWT_SECRET;
}

function generateToken(user: User, secret = jwtSecret()): string {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || '24h') as SignOptions['expiresIn'],
  };

  return jwt.sign({ id: user.id, username: user.username }, secret, options);
}

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { username, password } = req.body as {
      username?: unknown;
      password?: unknown;
    };

    if (typeof username !== 'string' || typeof password !== 'string' || !username.trim() || !password) {
      return res.status(400).json({ error: 'Username y password son requeridos.' });
    }

    const secret = jwtSecret();
    const cleanUsername = username.trim();
    let user = await User.findOne({ where: { username: cleanUsername } });

    if (user) {
      const validPassword = await user.validatePassword(password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Contraseña incorrecta.' });
      }
    } else {
      user = await User.create({ username: cleanUsername, password });
    }

    return res.json({ user: user.toSafeObject(), token: generateToken(user, secret) });
  } catch (error) {
    next(error);
  }
};

export const getMe: RequestHandler = (_req, res) => {
  const user = res.locals.user as User | undefined;

  if (!user) {
    return res.status(401).json({ error: 'Token inválido.' });
  }

  return res.json(user.toSafeObject());
};

export const updateMe: RequestHandler = async (req, res, next) => {
  try {
    const currentUser = res.locals.user as User | undefined;
    if (!currentUser) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    const username = typeof req.body.username === 'string' && req.body.username.trim() ? req.body.username.trim() : undefined;
    const password = typeof req.body.password === 'string' && req.body.password ? req.body.password : undefined;
    if (!username && !password) {
      return res.status(422).json({ error: 'Datos inválidos.' });
    }

    const user = await User.findByPk(currentUser.id);
    if (!user) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    if (username) user.username = username;
    if (password) user.password = password;
    await user.save();

    return res.json(user.toSafeObject());
  } catch (error) {
    next(error);
  }
};

export const deleteMe: RequestHandler = async (_req, res, next) => {
  try {
    const currentUser = res.locals.user as User | undefined;
    if (!currentUser) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    await sequelize.transaction(async (transaction) => {
      const user = await User.findByPk(currentUser.id, { transaction, lock: transaction.LOCK.UPDATE });
      if (!user) {
        throw Object.assign(new Error('Token inválido.'), { status: 401 });
      }

      await Holding.destroy({ where: { userId: user.id }, transaction });
      await Company.update({ creatorId: null }, { where: { creatorId: user.id }, transaction });
      await user.destroy({ transaction });
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
