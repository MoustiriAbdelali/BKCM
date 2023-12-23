const express = require("express");
const Parser = require("body-parser");
const bodyParser = require("body-parser");
const app =express()
const port =process.env.PORT || 5000
const cors=require('cors')
app.use(cors())
app.use( bodyParser.urlencoded({extended:true}))
app.use( bodyParser.json())
const sequelize = require("sequelize");

//////////////////Routes////////////////////////
const RDiverDB     =require('./routes/Diver/DiverDB')
const RSociete     =require('./routes/Diver/Societe')
const RVariable     =require('./routes/Diver/Variable')

const RTiers       =require('./routes/Tiers/Tiers')
const RContacte    =require('./routes/Tiers/Contacte')

const RProduit     =require('./routes/Produit/Produit')
const RCodeBarre   =require('./routes/Produit/CodeBarre')
const RCategorie   =require('./routes/Produit/CategorieProduit')

const RTypePiece   =require('./routes/Mouvement/TypePiece')
const Rmt          =require('./routes/Mouvement/Mt')
const RLIgneMt     =require('./routes/Mouvement/LigneMt')

const RCompte      =require('./routes/Tresorerie/Compte')
//////////////////API//////////////////////
app.use('/api',RTiers)
app.use('/api',RContacte)
app.use('/api',RCompte)
app.use('/api',RProduit)
app.use('/api',RCodeBarre)
app.use('/api',RCategorie)
app.use('/api',RDiverDB)
app.use('/api',RSociete)
app.use('/api',RTypePiece)
app.use('/api',Rmt)
app.use('/api',RLIgneMt)
app.use('/api',RVariable)









app.listen(port, () => { 
  console.log(`Server is running on portyesy`);
  
});



