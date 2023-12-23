const model =require('./models')

//const db =require('./config/DataBase')
const host =process.env.HostComplie 
require('dotenv').config();
const data_ =require("./Data")

const TypePiece = model.TypePiece 
const Tiers     = model.Tiers 
const Compte    = model.Compte 
const Variable    = model.Variable 


const DTypePiece=data_.TypePiece
const DTiers=data_.Tiers
const DCompte=data_.Compte
const DVariable=data_.Variable


// console.log(DTypePiece);
// console.log(DTiers);
// console.log(DCompte);




  async function seedtypepeiece() {
    try {
      // Insert initial data into the database
      await TypePiece.bulkCreate(DTypePiece);
  // 
      console.log('TypePiece: Database seeded successfully.');
    } catch (error) {
      console.error('TypePiece: Error seeding database:', error);
    }
  }
  async function seedTiers() {
    try {
      // Insert initial data into the database
      await Tiers.bulkCreate(DTiers);
  
      console.log('Tiers : Database seeded successfully.');
    } catch (error) {
      console.error('Tiers: Error seeding database:', error);
    }
  }
  async function seedCompte() {
    try {
      // Insert initial data into the database
      await Compte.bulkCreate(DCompte);
  
      console.log('Compte: Database seeded successfully.');
    } catch (error) {
      console.error('Compte: Error seeding database:', error);
    }
  }
  async function seedVariable() {
    try {
      // Insert initial data into the database
      await Variable.bulkCreate(DVariable);
  
      console.log('Compte: Database seeded successfully.');
    } catch (error) {
      console.error('Compte: Error seeding database:', error);
    }
  }
//  
// 
  const CntTypePiec = host+"/api/CountTypePiece"
  const CntTiers    = host+"/api/CountTires"
  const CntCompte   = host+"/api/CountCompte"
// 
const coundata = async (api,num)  => {
  const res = await fetch (api);
  const data = await res.json();
  console.log(data);
  if (data.rowCount==0  ) {
    switch (num) {
      case 1:     seedtypepeiece() ;  break; 
      case 2:     seedTiers()      ;  break; 
      case 3:     seedCompte()     ;  break; 
    }
  }
}
// 
coundata(CntTypePiec,1)
coundata(CntCompte,3)
coundata(CntTiers,2)


let keys = Object.keys(DVariable);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ': ' + DVariable[key].NomVariable);
}