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
const RTiers       =require('./routes/Tiers')
const RContacte    =require('./routes/Contacte')
//////////////////API//////////////////////
app.use('/api',RTiers)
app.use('/api',RContacte)




app.listen(port, () => { 
  console.log(`Server is running on portyesy`);
});

