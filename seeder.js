const model =require('./models')
const TypePiece = model.TypePiece 
//const db =require('./config/DataBase')
const host =process.env.HostComplie 
require('dotenv').config();
const data =require("./Data")
const DTypePiece=data.TypePiece






console.log(DTypePiece);
  async function seedDatabase() {
    try {
    
  
      // Insert initial data into the database
      await TypePiece.bulkCreate(CMF);
  
      console.log('Database seeded successfully.');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  }
 

  const cont_ = host+"/api/CountTypePiece"

const countypepeiece = async ()  => {
  const res = await fetch ( cont_);
  const data = await res.json();
  console.log(cont_);
  if (data.rowCount==0  ) {
    seedDatabase()
console.log("Ajoute data");
  }
}
countypepeiece()