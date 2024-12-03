const { DataTypes } = require('sequelize')
const sequelize = require('../bd/database')

const Asignatura = sequelize.define('Asignatura', {
    idasignatura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false

    }
},
{
    tableName: 'asignaturas',
    timestamps: false, // Desactiva las columnas createdAt y updatedAt
  }

)

module.exports=Asignatura;
