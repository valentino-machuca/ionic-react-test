import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import MovementModel from './models/Movement.js';
import UserModel from './models/User.js'

dotenv.config();

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize = new Sequelize (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging: false, native: false}) // Conexión
const models = [MovementModel, UserModel];

models.forEach(model => model(sequelize));

const { Movement, User } = sequelize.models;

// Relaciones
User.hasMany(Movement, { as: 'SentMovements', foreignKey: 'senderId' });
User.hasMany(Movement, { as: 'ReceivedMovements', foreignKey: 'receiverId' });

Movement.belongsTo(User, { as: 'Sender', foreignKey: 'senderId' });
Movement.belongsTo(User, { as: 'Receiver', foreignKey: 'receiverId' });

export { Movement, User, sequelize as conn}