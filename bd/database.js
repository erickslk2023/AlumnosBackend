const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('universidad','root','Admin',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;