
const sequelize = require("sequelize");
const db =require('../config/DataBase')
    


    ////////////////////model////////////////
    const  MTiers        =require('./Tiers')
    const  MConctct      =require('./Contacte')
    const  MCompte       =require('./Compte')
    const  MCategorie    =require('./CategorieProduit')
    const  MDiverDB      =require('./DiverDB')
    const  MCodeBarre    =require('./CodeBarre')
    const  MProduit      =require('./Produit')
    /////////////squilz model//////////////////////
    
    const  Tiers      =MTiers      (db,sequelize)
    const  Contact    =MConctct    (db,sequelize)
    const  Compte     =MCompte     (db,sequelize)
    const  Categorie  =MCategorie  (db,sequelize)
    const  DiverDB    =MDiverDB    (db,sequelize)
    const  CodeBarre  =MCodeBarre  (db,sequelize)
    const  Produit    =MProduit  (db,sequelize)



        db.sync({force : false}).then(()=>{
        console.log()
    })

    Tiers.hasMany     (Contact,     { foreignKey: 'TiersID'     });
    Categorie.hasMany (Categorie,   { foreignKey: 'CategorieID' });
    Produit.hasMany   (CodeBarre,   { foreignKey: 'ProduitID'   });
    
    module.exports={
        Tiers,
        Contact,
        Compte,
        Categorie,
        DiverDB,
        CodeBarre,
        Produit,
    }
   