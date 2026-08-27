import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const customOptions = {
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  define: {
    underscored: false,
    timestamps: true,
  },
};

function databaseUrlUsesSsl(databaseUrl: string): boolean {
  return process.env.DB_SSL === 'true' || databaseUrl.includes('sslmode=require');
}

export const sequelize =
  process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
        ...customOptions,
        dialect: 'postgres',
        dialectOptions: databaseUrlUsesSsl(process.env.DATABASE_URL)
          ? {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            }
          : {},
      })
    : new Sequelize(
        process.env.DB_NAME || 't1_back_2026_2',
        process.env.DB_USER || 'postgres',
        process.env.DB_PASSWORD || 'postgres',
        {
          ...customOptions,
          host: process.env.DB_HOST || 'localhost',
          port: Number(process.env.DB_PORT || 5432),
          dialect: 'postgres',
          dialectOptions: {
            ssl:
              process.env.DB_SSL === 'true'
                ? {
                    require: true,
                    rejectUnauthorized: false,
                  }
                : false,
          },
        }
      );
