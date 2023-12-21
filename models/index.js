
const sequelize = require("sequelize");
const db =require('../config/DataBase')
    


    ////////////////////model////////////////
    const  MSociete      =require('./Diver/Societe')
    const  MDiverDB      =require('./Diver/DiverDB')

    const  MTypePiece    =require('./Mouvement/TypePiece')
    const  Mmt           =require('./Mouvement/Mt')
    const  MLigneMt      =require('./Mouvement/LigneMt')


    const  MTiers        =require('./Tiers/Tiers')
    const  MConctct      =require('./Tiers/Contacte')

    const  MCompte       =require('./Tresorerie/Compte')

    const  MCategorie    =require('./Produit/CategorieProduit')
    const  MCodeBarre    =require('./Produit/CodeBarre')
    const  MProduit      =require('./Produit/Produit')
   
    /////////////squilz model//////////////////////
    
    const  Tiers      =MTiers      (db,sequelize)//
    const  Contact    =MConctct    (db,sequelize)//
    const  Compte     =MCompte     (db,sequelize)//
    const  Categorie  =MCategorie  (db,sequelize)//
    const  DiverDB    =MDiverDB    (db,sequelize)//
    const  CodeBarre  =MCodeBarre  (db,sequelize)//
    const  Produit    =MProduit    (db,sequelize)//
    const  Societe    =MSociete    (db,sequelize)//

    const  TypePiece =MTypePiece   (db,sequelize)//
    const  mt        =Mmt          (db,sequelize)//
    const  LigneMt   =MLigneMt   (db,sequelize)//



    const synchronizeModels = async () => {
        try {
          await db.sync({ force: false, alter: true ,logging: false});
          
          console.log('All models synchronized successfully.');
        } catch (error) {
          console.error('Error synchronizing models:', error);
        }
      };
      synchronizeModels()

    Tiers.hasMany     (Contact     ,{ foreignKey: 'TiersID'     ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Tiers.hasMany     (mt          ,{ foreignKey: 'TiersID'     ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Categorie.hasMany (Categorie   ,{ foreignKey: 'CategorieID_',onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Produit.hasMany   (CodeBarre   ,{ foreignKey: 'ProduitID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Produit.hasMany   (LigneMt     ,{ foreignKey: 'ProduitID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    mt.hasMany        (LigneMt     ,{ foreignKey: 'ProduitID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Categorie.hasMany (Produit     ,{ foreignKey: 'CategorieID' ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});//Produit.belongsTo(Categorie);
    
    
    Societe.hasMany   (Tiers       ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'}); 
    Societe.hasMany   (Contact     ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (Compte      ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (Categorie   ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (DiverDB     ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (CodeBarre   ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (Produit     ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (TypePiece   ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (mt          ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});
    Societe.hasMany   (LigneMt     ,{ foreignKey: 'SocieteID'   ,onDelete: 'RESTRICT', onUpdate : 'CASCADE'});




   
    module.exports={
        Tiers,
        Contact,
        Compte,
        Categorie,
        DiverDB,
        CodeBarre,
        Produit,
        Societe,
        TypePiece,
        mt,
        LigneMt,
    }
   