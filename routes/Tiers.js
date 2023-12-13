const express =require('express')
const router =express.Router()
const model =require('../models')
const  Tiers = model.Tiers
const sequelize =require("sequelize")

router.post('/Tires', async (req, res) => {
  try {
    const results = await Tiers.findAll({
   
     // raw: true,
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});





  module.exports=router