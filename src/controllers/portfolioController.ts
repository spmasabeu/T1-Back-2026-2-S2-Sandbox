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
      const sharePrice = Math.floor(company.marketCap / company.totalShares);
      const value = holding.shares * sharePrice;

      return {
        company: {
          id: company.id,
          name: company.name,
          symbol: company.symbol,
          sharePrice,
        },
        shares: holding.shares,
        value,
      };
    });
    const portfolioValue = items.reduce((total, holding) => total + holding.value, 0);

    return res.json({
      balance: user.balance,
      holdings: items,
      portfolioValue,
      netWorth: user.balance + portfolioValue,
    });
  } catch (error) {
    next(error);
  }
};
