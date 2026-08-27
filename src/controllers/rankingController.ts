import { RequestHandler } from 'express';
import { Company, Holding, User } from '../models';

interface RankingHoldingInput {
  shares: number;
  company: { marketCap: number; totalShares: number };
}

interface RankingUserInput {
  id: string;
  username: string;
  balance: number;
  holdings?: RankingHoldingInput[];
}

export function sharePrice(company: { marketCap: number; totalShares: number }): number {
  return Math.floor(company.marketCap / company.totalShares);
}

export function rankUsersByNetWorth(users: RankingUserInput[]) {
  return users
    .map((user) => {
      const portfolioValue = (user.holdings || []).reduce(
        (total, holding) => total + holding.shares * sharePrice(holding.company),
        0
      );

      return {
        id: user.id,
        username: user.username,
        balance: user.balance,
        portfolioValue,
        netWorth: user.balance + portfolioValue,
      };
    })
    .sort((a, b) => b.netWorth - a.netWorth);
}

export const getUserRankings: RequestHandler = async (_req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'balance'],
      include: [
        {
          model: Holding,
          as: 'holdings',
          required: false,
          include: [{ model: Company, as: 'company', required: true }],
        },
      ],
    });

    const data = rankUsersByNetWorth(
      users.map((user) => ({
        id: user.id,
        username: user.username,
        balance: user.balance,
        holdings: ((user.get('holdings') || []) as Holding[]).map((holding) => ({
          shares: holding.shares,
          company: holding.company as Company,
        })),
      }))
    );

    return res.json({ data });
  } catch (error) {
    next(error);
  }
};

export const getCompanyRankings: RequestHandler = async (_req, res, next) => {
  try {
    const companies = await Company.findAll({
      where: { isPublic: true },
      order: [['marketCap', 'DESC']],
    });

    return res.json({
      data: companies.map((company) => ({
        id: company.id,
        name: company.name,
        symbol: company.symbol,
        marketCap: company.marketCap,
        sharePrice: sharePrice(company),
      })),
    });
  } catch (error) {
    next(error);
  }
};
