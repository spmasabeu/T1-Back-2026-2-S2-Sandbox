import { RequestHandler } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../models';

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
