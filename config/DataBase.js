const sequelize =require("sequelize")
 const env = process.env.NODE_ENV || 'Developement'
 const config=require('./config')[env]

 console.log(config.database);
 module.exports =new  sequelize(
    config.database,
    config.username,
    config.password,
    {
  host:config.host,
  dialect: 'mysql'
    }
 ) 