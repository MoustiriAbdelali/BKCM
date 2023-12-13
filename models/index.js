
const sequelize = require("sequelize");
const db =require('../config/DataBase')
    


console.log(db.host);
    ////////////////////model////////////////
    const  MTiers    =require('./Tiers')
    const  MConctct  =require('./Contacte')
    const  MCompte   =require('./Compte')
    /////////////squilz model//////////////////////
    
    const  Tiers   =MTiers   (db,sequelize)
    const  Contact =MConctct (db,sequelize)
    const  Compte  =MCompte  (db,sequelize)



        db.sync({force : false}).then(()=>{
        console.log()
    })

    Tiers.hasMany(Contact, { foreignKey: 'TiersID' });
    
    module.exports={
        Tiers,
        Contact,
        Compte,

    }
   