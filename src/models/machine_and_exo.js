const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Machine_and_exo extends Model {}

Machine_and_exo.init({
  machine_and_exo_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  machine_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  exo_img: {
    type: DataTypes.STRING(15),
    allowNull: false,
    defaultValue: "",
  }},
   {
  sequelize,
  createdAt: 'machine_created_at',
  updatedAt: 'machine_updated_at',
  tableName: 'machine_and_exo',
});

module.exports = Machine_and_exo;