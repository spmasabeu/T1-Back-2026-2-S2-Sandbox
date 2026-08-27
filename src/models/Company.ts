import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export interface CompanyAttributes {
  id: string;
  name: string;
  symbol: string;
  description: string;
  sector: string;
  logoUrl?: string | null;
  marketCap: number;
  totalShares: number;
  availableShares: number;
  isPublic: boolean;
  creatorId?: string | null;
}

type CompanyCreationAttributes = Optional<CompanyAttributes, 'id' | 'logoUrl' | 'creatorId'>;

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  declare id: string;
  declare name: string;
  declare symbol: string;
  declare description: string;
  declare sector: string;
  declare logoUrl: string | null;
  declare marketCap: number;
  declare totalShares: number;
  declare availableShares: number;
  declare isPublic: boolean;
  declare creatorId: string | null;

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      symbol: this.symbol,
      description: this.description,
      sector: this.sector,
      logoUrl: this.logoUrl,
      marketCap: this.marketCap,
      totalShares: this.totalShares,
      availableShares: this.availableShares,
      isPublic: this.isPublic,
      creatorId: this.creatorId,
      sharePrice: Math.floor(this.marketCap / this.totalShares),
    };
  }

  static initModel(sequelize: Sequelize): typeof Company {
    Company.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { notEmpty: true },
        },
        symbol: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          set(value: string) {
            this.setDataValue('symbol', value.trim().toUpperCase());
          },
          validate: { notEmpty: true },
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { notEmpty: true },
        },
        sector: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: { notEmpty: true },
        },
        logoUrl: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        marketCap: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: { min: 1 },
        },
        totalShares: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: { min: 1 },
        },
        availableShares: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0,
            maxTotalShares(value: number) {
              if (value > this.totalShares) {
                throw new Error('availableShares no puede superar totalShares.');
              }
            },
          },
        },
        isPublic: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        creatorId: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
      },
      { sequelize, modelName: 'Company' }
    );

    return Company;
  }
}
