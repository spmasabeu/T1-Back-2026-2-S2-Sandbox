import { sequelize } from '../config/database';
import { Company } from './Company';
import { Holding } from './Holding';
import { User } from './User';

User.initModel(sequelize);
Company.initModel(sequelize);
Holding.initModel(sequelize);

User.hasMany(Holding, { foreignKey: 'userId', as: 'holdings' });
Holding.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Company.hasMany(Holding, { foreignKey: 'companyId', as: 'holdings' });
Holding.belongsTo(Company, { foreignKey: 'companyId', as: 'company' });

export { sequelize, Company, Holding, User };
