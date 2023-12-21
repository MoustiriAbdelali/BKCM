
require('dotenv').config();
const port =process.env.PORT || 5000
const host =process.env.HostComplie 




const axios = require('axios');
//const model =require('./models')
//const sequelize = require("sequelize");

// const db =require('../config/DataBase')
// const  MTypePiece    =require('./Mouvement/TypePiece')
// const  TypePiece      =MTypePiece      (db,sequelize)//

//const { sequelize, TypePiece } = require('./models'); // Adjust the path accordingly





const AjaouteTypePiece = async (data)  => {
  axios.post(host+"/api/ITypePiece", data)
.then(response => {
  console.log('Réponse du serveur:', response.data);
})
.catch(error => {
  console.error('Erreur:', error);
});
}




const cont_ = host+"/api/CountTypePiece"

const countypepeiece = async ()  => {
  const res = await fetch ( cont_);
  const data = await res.json();
  console.log(cont_);
  if (data.rowCount==0  ) {
    AjaouteTypePiece(CMF)
console.log("Ajoute data");
  }
}






// Function to seed the database
async function seedDatabase() {
  try {
    await sequelize.sync({ force: true }); // This drops existing tables and recreates them

    // Insert initial data into the database
    await TypePiece.bulkCreate(CMF);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close(); // Close the database connection
  }
}

// Run the seeder function
seedDatabase();

