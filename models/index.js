
const sequelize = require("sequelize");
const db =require('../config/DataBase')
    


    ////////////////////model////////////////
    const  MTiers        =require('./Tiers/Tiers')
    const  MConctct      =require('./Tiers/Contacte')
    const  MCompte       =require('./Tresorerie/Compte')
    const  MCategorie    =require('./Articles/CategorieProduit')
    const  MDiverDB      =require('./DiverDB')
    const  MCodeBarre    =require('./Articles/CodeBarre')
    const  MProduit      =require('./Articles/Produit')
    /////////////squilz model//////////////////////
    
    const  Tiers      =MTiers      (db,sequelize)
    const  Contact    =MConctct    (db,sequelize)
    const  Compte     =MCompte     (db,sequelize)
    const  Categorie  =MCategorie  (db,sequelize)
    const  DiverDB    =MDiverDB    (db,sequelize)
    const  CodeBarre  =MCodeBarre  (db,sequelize)
    const  Produit    =MProduit    (db,sequelize)



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
   