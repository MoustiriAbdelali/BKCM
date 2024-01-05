//const fetch = require('node-fetch');
const { TypePiece, Tiers, Compte, Variable } = require('./models');
const data_ = require('./Data');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
api_=config.api

console.log(config.api);
console.log(config.host);
console.log(config.database);
console.log(config.username);
console.log(config.password);
console.log(config.dialect);

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
  // async function seedVariable() {
  //   try {
  //     // Insert initial data into the database
  //     await Variable.bulkCreate(DVariable);
  
  //     console.log('Compte: Database seeded successfully.');
  //   } catch (error) {
  //     console.error('Compte: Error seeding database:', error);
  //   }
  // }
//  
// 
  const CntTypePiec = api_+"/api/CountTypePiece"
  const CntTiers    = api_+"/api/CountTires"
  const CntCompte   = api_+"/api/CountCompte"
// 
const coundata = async (api, num) => {
  try {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);
    if (data.rowCount == 0) {
      switch (num) {
        case 1: seedtypepeiece(); break;
        case 2: seedTiers(); break;
        case 3: seedCompte(); break;
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
// 
coundata(CntTypePiec,1)
coundata(CntCompte,3)
coundata(CntTiers,2)


let keys = Object.keys(DVariable);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key + ': ' + DVariable[key].NomVariable);
}