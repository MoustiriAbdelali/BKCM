
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
    const  MSociete      =require('./Diver/Societe')
    /////////////squilz model//////////////////////
    
    const  Tiers      =MTiers      (db,sequelize)//
    const  Contact    =MConctct    (db,sequelize)//
    const  Compte     =MCompte     (db,sequelize)//
    const  Categorie  =MCategorie  (db,sequelize)//
    const  DiverDB    =MDiverDB    (db,sequelize)//
    const  CodeBarre  =MCodeBarre  (db,sequelize)//
    const  Produit    =MProduit    (db,sequelize)//
    const  Societe    =MSociete    (db,sequelize)//



    const synchronizeModels = async () => {
        try {
          await db.sync({ force: false, alter: true });
          console.log('All models synchronized successfully.');
        } catch (error) {
          console.error('Error synchronizing models:', error);
        }
      };
      synchronizeModels()

    Tiers.hasMany     (Contact,     { foreignKey: 'TiersID'    });
    Categorie.hasMany (Categorie,   { foreignKey: 'CategorieID_'});
    Produit.hasMany   (CodeBarre,   { foreignKey: 'ProduitID'  });
    Categorie.hasMany (Produit,     { foreignKey: 'CategorieID' ,onDelete: 'RESTRICT'  , onUpdate : 'CASCADE' });//Produit.belongsTo(Categorie);
    
    
    Societe.hasMany(Tiers     ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'}); 
    Societe.hasMany(Contact   ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany(Compte    ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany(Categorie ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany(DiverDB   ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany(CodeBarre ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany(Produit   ,{ foreignKey: 'SocieteID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});



   

    module.exports={
        Tiers,
        Contact,
        Compte,
        Categorie,
        DiverDB,
        CodeBarre,
        Produit,
        Societe,
    }
   