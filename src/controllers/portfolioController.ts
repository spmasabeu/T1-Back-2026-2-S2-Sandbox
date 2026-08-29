import { RequestHandler } from 'express';
import { Company, Holding, User } from '../models';

export const getPortfolio: RequestHandler = async (_req, res, next) => {
  try {
    const user = res.locals.user as User | undefined;
    if (!user) {
      return res.status(401).json({ error: 'Token inválido.' });
    }

    const holdings = await Holding.findAll({
      where: { userId: user.id },
      include: [{ model: Company, as: 'company', required: true }],
    });

    const items = holdings.map((holding) => {
      const company = holding.company as Company;

      return {
        company: {
          id: company.id,
          name: company.name,
          symbol: company.symbol,
          marketCap: company.marketCap,
        },
        value: company.marketCap,
      };
    });
    const portfolioValue = items.reduce((total, item) => total + item.value, 0);

    return res.json({
      balance: user.balance,
      companies: items,
      portfolioValue,
      netWorth: user.balance + portfolioValue,
    });
  } catch (error) {
    next(error);
  }
};
