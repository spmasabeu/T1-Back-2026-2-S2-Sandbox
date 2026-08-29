import { RequestHandler, Response } from 'express';
import { Op, Transaction, WhereOptions } from 'sequelize';
import { Company, CompanyAttributes, randomCompanyValue } from '../models/Company';
import { Holding, sequelize, User } from '../models';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function positiveInt(value: unknown): number | null {
  const number = typeof value === 'number' || typeof value === 'string' ? Number(value) : NaN;
  return Number.isInteger(number) && number > 0 ? number : null;
}

function cleanText(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function optionalText(value: unknown): string | null | undefined {
  return value === undefined ? undefined : typeof value === 'string' && value.trim() ? value.trim() : null;
}

function booleanInput(value: unknown): boolean | null {
  return typeof value === 'boolean' ? value : null;
}

function httpError(status: number, message: string): Error & { status: number } {
  return Object.assign(new Error(message), { status });
}

function authUser(res: Response): User {
  const user = res.locals.user as User | undefined;
  if (!user) {
    throw httpError(401, 'Token inválido.');
  }
  return user;
}

async function findCompany(id: string, transaction: Transaction): Promise<Company> {
  if (!UUID_RE.test(id)) {
    throw httpError(404, 'Empresa no encontrada.');
  }

  const company = await Company.findByPk(id, { transaction, lock: transaction.LOCK.UPDATE });
  if (!company) {
    throw httpError(404, 'Empresa no encontrada.');
  }
  return company;
}

export const getCompanies: RequestHandler = async (req, res, next) => {
  try {
    const page = Math.max(1, Number.parseInt(String(req.query.page || '1'), 10) || 1);
    const limit = Math.min(100, Math.max(1, Number.parseInt(String(req.query.limit || '10'), 10) || 10));
    const where: WhereOptions<CompanyAttributes> = {};

    if (typeof req.query.search === 'string' && req.query.search.trim()) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${req.query.search.trim()}%` } },
        { symbol: { [Op.iLike]: `%${req.query.search.trim()}%` } },
      ];
    }
    if (typeof req.query.sector === 'string' && req.query.sector.trim()) {
      where.sector = req.query.sector.trim();
    }
    if (req.query.isPublic === 'true' || req.query.isPublic === 'false') {
      where.isPublic = req.query.isPublic === 'true';
    }

    const { count, rows } = await Company.findAndCountAll({
      where,
      limit,
      offset: (page - 1) * limit,
      order: [['symbol', 'ASC']],
    });

    return res.json({
      data: rows,
      meta: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCompanyById: RequestHandler = async (req, res, next) => {
  try {
    const id = String(req.params.id);
    if (!UUID_RE.test(id)) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }

    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Empresa no encontrada.' });
    }
    return res.json(company);
  } catch (error) {
    next(error);
  }
};

export const createCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);
    const name = cleanText(req.body.name);
    const symbol = cleanText(req.body.symbol);
    const description = cleanText(req.body.description);
    const sector = cleanText(req.body.sector);
    const logoUrl = typeof req.body.logoUrl === 'string' && req.body.logoUrl.trim() ? req.body.logoUrl.trim() : null;
    const isPublic = req.body.isPublic === undefined ? false : booleanInput(req.body.isPublic);

    if (!name || !symbol || !description || !sector || isPublic === null) {
      return res.status(422).json({ error: 'Datos inválidos.' });
    }

    const result = await sequelize.transaction(async (transaction) => {
      const user = await User.findByPk(requester.id, { transaction, lock: transaction.LOCK.UPDATE });
      if (!user) {
        throw httpError(401, 'Token inválido.');
      }

      const company = await Company.create(
        {
          name,
          symbol,
          description,
          sector,
          logoUrl,
          marketCap: randomCompanyValue(),
          isPublic,
          creatorId: user.id,
        },
        { transaction }
      );

      return { company, balance: user.balance };
    });

    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const publishCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);

    const result = await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      if (company.creatorId !== requester.id) {
        throw httpError(403, 'Usuario no autorizado.');
      }
      if (company.isPublic) {
        throw httpError(422, 'La empresa ya es pública.');
      }

      company.isPublic = true;
      await company.save({ transaction });

      return { company };
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);
    const name = optionalText(req.body.name);
    const symbol = optionalText(req.body.symbol);
    const description = optionalText(req.body.description);
    const sector = optionalText(req.body.sector);
    const logoUrl = req.body.logoUrl === null ? null : optionalText(req.body.logoUrl);
    const isPublic = req.body.isPublic === undefined ? undefined : booleanInput(req.body.isPublic);

    if ([name, symbol, description, sector, logoUrl].some((value) => value === null) || isPublic === null) {
      return res.status(422).json({ error: 'Datos inválidos.' });
    }

    const result = await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      if (company.creatorId !== requester.id) {
        throw httpError(403, 'Usuario no autorizado.');
      }

      if (name !== undefined) company.name = name;
      if (symbol !== undefined) company.symbol = symbol;
      if (description !== undefined) company.description = description;
      if (sector !== undefined) company.sector = sector;
      if (logoUrl !== undefined) company.logoUrl = logoUrl;
      if (isPublic !== undefined) company.isPublic = isPublic;

      await company.save({ transaction });
      return { company };
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

export const deleteCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);

    await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      if (company.creatorId !== requester.id) {
        throw httpError(403, 'Usuario no autorizado.');
      }

      await Holding.destroy({ where: { companyId: company.id }, transaction });
      await company.destroy({ transaction });
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const buyCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);

    const result = await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      if (!company.isPublic) {
        throw httpError(403, 'Empresa no pública.');
      }
      const user = await User.findByPk(requester.id, { transaction, lock: transaction.LOCK.UPDATE });
      if (!user) {
        throw httpError(401, 'Token inválido.');
      }

      const holding = await Holding.findOne({
        where: { userId: user.id, companyId: company.id },
        transaction,
        lock: transaction.LOCK.UPDATE,
      });
      if (holding) {
        throw httpError(400, 'Empresa ya comprada.');
      }
      if (user.balance < company.marketCap) {
        throw httpError(400, 'Saldo insuficiente.');
      }

      user.balance -= company.marketCap;
      await user.save({ transaction });
      await Holding.create({ userId: user.id, companyId: company.id }, { transaction });

      return { company, totalPrice: company.marketCap, balance: user.balance };
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

export const sellCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);

    const result = await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      const user = await User.findByPk(requester.id, { transaction, lock: transaction.LOCK.UPDATE });
      if (!user) {
        throw httpError(401, 'Token inválido.');
      }

      const holding = await Holding.findOne({
        where: { userId: user.id, companyId: company.id },
        transaction,
        lock: transaction.LOCK.UPDATE,
      });
      if (!holding) {
        throw httpError(400, 'Empresa no comprada.');
      }

      user.balance += company.marketCap;
      await user.save({ transaction });
      await holding.destroy({ transaction });

      return { company, totalPrice: company.marketCap, balance: user.balance };
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};

export const donateToCompany: RequestHandler = async (req, res, next) => {
  try {
    const requester = authUser(res);
    const amount = positiveInt(req.body.amount);
    if (!amount) {
      return res.status(422).json({ error: 'Datos inválidos.' });
    }

    const result = await sequelize.transaction(async (transaction) => {
      const company = await findCompany(String(req.params.id), transaction);
      if (!company.isPublic) {
        throw httpError(403, 'Empresa no pública.');
      }

      const user = await User.findByPk(requester.id, { transaction, lock: transaction.LOCK.UPDATE });
      if (!user) {
        throw httpError(401, 'Token inválido.');
      }
      if (user.balance < amount) {
        throw httpError(400, 'Saldo insuficiente.');
      }

      user.balance -= amount;
      company.marketCap += amount;
      await user.save({ transaction });
      await company.save({ transaction });

      return { company, amount, balance: user.balance };
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
};
