const express = require("express");
const Parser = require("body-parser");
const bodyParser = require("body-parser");
const app =express()
const port =process.env.PORT || 5000
const cors=require('cors')
app.use(cors())
app.use( bodyParser.urlencoded({extended:true}))
app.use( bodyParser.json())


//////////////////Routes////////////////////////
const RTiers       =require('./routes/Tiers/Tiers')
const RContacte    =require('./routes/Tiers/Contacte')
const RCompte      =require('./routes/Tresorerie/Compte')
const RProduit     =require('./routes/Produit/Produit')
const RCodeBarre   =require('./routes/Produit/CodeBarre')
const RCategorie   =require('./routes/Produit/CategorieProduit')
const RDiverDB    =require('./routes/Diver/DiverDB')
const RSociete    =require('./routes/Diver/Societe')
//////////////////API//////////////////////
app.use('/api',RTiers)
app.use('/api',RContacte)
app.use('/api',RCompte)
app.use('/api',RProduit)
app.use('/api',RCodeBarre)
app.use('/api',RCategorie)
app.use('/api',RDiverDB)
app.use('/api',RSociete)




app.listen(port, () => { 
  console.log(`Server is running on portyesy`);
});

