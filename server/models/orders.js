const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize-config');

// Define the Order model
const Order = sequelize.define('Order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Allow null for unauthenticated users
    references: {
      model: 'users',
      key: 'user_id'
    }
  },
  destination_address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  goods_description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  receiver_phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  receiver_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sender_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sender_email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  sender_phone: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  package_category: {
    type: DataTypes.ENUM('electronics', 'luggage'),
    allowNull: false,
    defaultValue: 'electronics'
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  dimensions: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  timestamps: true, // Enable createdAt and updatedAt
  tableName: 'orders' // Explicit table name
});

module.exports = Order;