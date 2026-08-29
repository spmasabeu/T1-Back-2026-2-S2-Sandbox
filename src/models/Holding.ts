import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Company } from './Company';

export interface HoldingAttributes {
  id: string;
  userId: string;
  companyId: string;
}

type HoldingCreationAttributes = Optional<HoldingAttributes, 'id'>;

export class Holding extends Model<HoldingAttributes, HoldingCreationAttributes> implements HoldingAttributes {
  declare id: string;
  declare userId: string;
  declare companyId: string;
  declare company?: Company;

  static initModel(sequelize: Sequelize): typeof Holding {
    Holding.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        companyId: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'Companies',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Holding',
        indexes: [{ unique: true, fields: ['userId', 'companyId'] }],
      }
    );

    return Holding;
  }
}
