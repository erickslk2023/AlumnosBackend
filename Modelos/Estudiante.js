const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Estudiantes = sequelize.define('Estudiantes', {
    idestudiante: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false

    },
    correo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull: false   
    }
},
    {
        tableName: 'estudiantes',
        timestamps: false
    }
)

module.exports= Estudiantes;