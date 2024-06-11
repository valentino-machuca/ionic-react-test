require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize = new Sequelize (`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging: false, native: false}) // Conexión

const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  }); // Leo los modelos

modelDefiners.forEach(model => model(sequelize)); // Inyecto la conexión a los modelos.

// movement => Movement
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Movement, User } = sequelize.models;

// Relaciones
User.hasMany(Movement, { as: 'SentMovements', foreignKey: 'senderId' });
User.hasMany(Movement, { as: 'ReceivedMovements', foreignKey: 'receiverId' });

Movement.belongsTo(User, { as: 'Sender', foreignKey: 'senderId' });
Movement.belongsTo(User, { as: 'Receiver', foreignKey: 'receiverId' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};