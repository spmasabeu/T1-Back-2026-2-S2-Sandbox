import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../models';

interface AuthTokenPayload extends JwtPayload {
  id: string;
  username: string;
}

function isAuthPayload(payload: string | JwtPayload): payload is AuthTokenPayload {
  return typeof payload !== 'string' && typeof payload.id === 'string' && typeof payload.username === 'string';
}

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticación requerido.' });
  }

  if (!process.env.JWT_SECRET) {
    return next(Object.assign(new Error('JWT_SECRET no configurado.'), { status: 500 }));
  }

  try {
    const payload = jwt.verify(authHeader.slice('Bearer '.length), process.env.JWT_SECRET);

    if (!isAuthPayload(payload)) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    const user = await User.findByPk(payload.id);
    if (!user) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    res.locals.user = user;
    return next();
  } catch (error) {
    const message = error instanceof jwt.TokenExpiredError ? 'Token expirado.' : 'Token inválido.';
    return res.status(401).json({ error: message });
  }
}
