const sequelize = require('../db/conexion');
const { DataTypes } = require('sequelize');

const Producto = sequelize.define('product', {
     
    partNumber: {
        type: DataTypes.STRING,
    },
    productType: {
        type: DataTypes.STRING,
    },
    categoryCode: {
        type: DataTypes.STRING,
    },
    brandCode: {
        type: DataTypes.STRING,
    },
    familyCode: {
        type: DataTypes.STRING,
    },
    lineCode: {
        type: DataTypes.STRING,
    },
    productSegmentCode: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
    },
    valueCurrency: {
        type: DataTypes.STRING,
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    plannerCode: {
        type: DataTypes.STRING,
    },
    sourceLink: {
        type: DataTypes.STRING,
    },

}, {
    tableName: 'product',
    timestamps: false,
});

module.exports = Producto;