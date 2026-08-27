import { ErrorRequestHandler } from 'express';
import { DatabaseError, ValidationError } from 'sequelize';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Error capturado:', err);

  if (err instanceof ValidationError) {
    const messages = err.errors.map((e) => e.message);
    return res.status(422).json({
      error: 'Error de validación.',
      details: messages,
    });
  }

  if (err instanceof DatabaseError) {
    return res.status(500).json({
      error: 'Error interno de base de datos.',
    });
  }

  const status = (err as { status?: number }).status || 500;
  const message = err.message || 'Error interno del servidor.';
  return res.status(status).json({ error: message });
};

export default errorHandler;
