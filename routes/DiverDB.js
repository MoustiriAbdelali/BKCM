const express =require('express')
const router =express.Router()
const model =require('../models')
const  DiverDB = model.DiverDB
const sequelize =require("sequelize")

router.post  ('/TDiverDB', async (req, res) => {
  try {
    const results = await DiverDB.findAll({
   
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
router.post  ('/IDiverDB', async (req, res) => {
  const newData = {
    Libelle:    req.body.Libelle,       
    Couleur:    req.body.Couleur,       
    Type:       req.body.Type,
    AjouterPar: req.body.AjouterPar,
    AjouterLe:  req.body.AjouterLe,  
    };
    DiverDB.create(newData)
    .then((DiverDB) => {
      console.log('Data inserted successfully:', DiverDB);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/UDiverDB', async (req, res) => { 
  const updatedData = {
    Libelle:    req.body.Libelle,   
    Couleur:    req.body.Couleur,      
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    DiverDB.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((DiverDB) => {
      console.log('Data updated successfully:', DiverDB);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
router.delete('/DDiverDB', async (req, res) => {
    try {
      // Find the record by ID
      const recordToDelete = await DiverDB.findByPk(req.body.ID);
  
      if (!recordToDelete) {
        return res.status(404).json({ error: 'Enregistrement non trouvé' });
      }
  
      // Delete the record
      await recordToDelete.destroy();
  
      return res.json({ message: 'Enregistrement supprimé avec succès' });
    } catch (error) {
      console.error('Error deleting record:', error);
      return res.status(500).json({ error: 'Erreur interne du serveur' });
    }
  })
  module.exports=router
