import bcrypt from 'bcrypt';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

const SALT_ROUNDS = 10;

export interface UserAttributes {
  id: string;
  username: string;
  password: string;
  balance: number;
}

type UserCreationAttributes = Optional<UserAttributes, 'id' | 'balance'>;
type SafeUser = Pick<UserAttributes, 'id' | 'username' | 'balance'>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  declare id: string;
  declare username: string;
  declare password: string;
  declare balance: number;

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  toSafeObject(): SafeUser {
    return {
      id: this.id,
      username: this.username,
      balance: this.balance,
    };
  }

  static initModel(sequelize: Sequelize): typeof User {
    User.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            notEmpty: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        balance: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10000,
        },
      },
      {
        sequelize,
        modelName: 'User',
        hooks: {
          beforeSave: async (user) => {
            if (user.changed('password')) {
              user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
            }
          },
        },
      }
    );

    return User;
  }
}
