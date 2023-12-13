const sequelize =require("sequelize")
 const env = process.env.NODE_ENV || 'developement'
 const config_=require('./config')[env]
 module.exports =new  sequelize(
    config_.database,
    config_.username,
    config_.password,
    {
  host:config_.host,
  dialect: 'mysql'
    }
 ) 