
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id : { type : DataTypes.INTEGER, autoIncrement : true, primaryKey : true },
  name: { type: DataTypes.STRING, },
  price: { type: DataTypes.FLOAT, },
  quantity: { type: DataTypes.INTEGER, },
  description: { type: DataTypes.TEXT, }
});

module.exports = Product;
