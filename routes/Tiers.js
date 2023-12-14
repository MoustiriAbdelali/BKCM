const express =require('express')
const router =express.Router()
const model =require('../models')
const  Tiers = model.Tiers
const sequelize =require("sequelize")

router.post('/TTires', async (req, res) => {
  try {
    const results = await Tiers.findAll({
   
     // raw: true,
     where: {
      Type: req.body.Type,
    },
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post('/ITires', async (req, res) => {
  const newData = {
    Societe:    req.body.Societe,       
    Adresse:    req.body.Adresse,    
    RC:         req.body.RC,         
    NIF:        req.body.NIF,       
    NIC:        req.body.NIC,        
    AI:         req.body.AI,         
    Type  :     req.body.Type  ,     
    AjouterPar: req.body.AjouterPar,
    AjouterLe:  req.body.AjouterLe,  
    };
    Tiers.create(newData)
    .then((Tiers) => {
      console.log('Data inserted successfully:', Tiers);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put ('/UTires', async (req, res) => { 
  const updatedData = {
    Societe:    req.body.Societe,       
    Adresse:    req.body.Adresse,    
    RC:         req.body.RC,         
    NIF:        req.body.NIF,       
    NIC:        req.body.NIC,        
    AI:         req.body.AI,         
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Tiers.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Tiers) => {
      console.log('Data updated successfully:', Tiers);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
router.put ('/BTires', async (req, res) => { 
  const updatedData = {
    Societe:    req.body.Societe,       
    Statut :    req.body.Statut, 
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Tiers.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Tiers) => {
      console.log('Data updated successfully:', Tiers);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})


  module.exports=router