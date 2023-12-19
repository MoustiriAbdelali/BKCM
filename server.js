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



/*
function  tirs(){
// Specify the URL you want to make a request to
const apiUrl = 'http://127.0.0.1:5000/api/TTires';

// Sample data to be sent in the POST request
const postData = {
  SocieteID: '1',
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // You may need to include additional headers as required by the API
  },
  body: JSON.stringify(postData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the response data
    console.log(data);
    return data
  })
  .catch(error => {
    // Handle errors that occurred during the fetch
    console.error('Fetch error:', error);
  });

  }
  const tires = tirs()
  console.log(tires.id[0]);

*/



app.listen(port, () => { 
  console.log(`Server is running on portyesy`);
});


