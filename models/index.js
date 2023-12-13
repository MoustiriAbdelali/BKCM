

    const sequelize=require('sequelize')
    const db =require('../config/DataBase')
    
    ////////////////////model////////////////
    const MTiers =require('./Tiers')
    
    /////////////squilz model//////////////////////
    
    const  Tiers =MTiers(db,sequelize)
        db.sync({force : false}).then(()=>{
        console.log()
    })
    
    module.exports={
        Tiers,
    }
   