const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Admin extends Model {}

Admin.init({
  admin_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  admin_firstname: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: '',
  },
  admin_lastname: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: "",
  },
  admin_email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "",
  },
  admin_password: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "",
}},
   {
  sequelize,
  createdAt: 'admin_created_at',
  updatedAt: 'admin_updated_at',
  tableName: 'admin',
});

module.exports = Admin;