const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Training extends Model {}

Training.init({
 training_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  training_img: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  training_repetition: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: false,
    defaultValue: 0,
  },
  training_serie: {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: false,
    defaultValue: 0,
  },
  training_user_id: DataTypes.INTEGER,
},
   {
  sequelize,
  createdAt: 'training_created_at',
  updatedAt: 'training_updated_at',
  tableName: 'training',
});

module.exports = Training;