
const sequelize = require("sequelize");
const db =require('../config/DataBase')
    


    ////////////////////model////////////////
    const  MTiers        =require('./Tiers/Tiers')
    const  MConctct      =require('./Tiers/Contacte')
    const  MCompte       =require('./Tresorerie/Compte')
    const  MCategorie    =require('./Produit/CategorieProduit')
    const  MDiverDB      =require('./Diver/DiverDB')
    const  MCodeBarre    =require('./Produit/CodeBarre')
    const  MProduit      =require('./Produit/Produit')
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
    Categorie.hasMany (Produit,     { foreignKey: 'CategorieID'   });
    
    module.exports={
        Tiers,
        Contact,
        Compte,
        Categorie,
        DiverDB,
        CodeBarre,
        Produit,
    }
   