const express =require('express')
const router =express.Router()
const model =require('../../models')
const Contacte = model.Contact
const sequelize =require("sequelize")

router.post('/TContacte', async (req, res) => {
    try {
      const results = await Contacte.findAll({
     
       // raw: true,
       where: {
        TiersID: req.body.TiersID,
      },
      });
  
      res.json(results);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  })

  router.post('/IContacte', async (req, res) => {
    const newData = {
      TiersID   : req.body.TiersID ,
      NomPrenom : req.body.NomPrenom ,     
      Libelle   : req.body.Libelle ,   
      Fonction  : req.body.Fonction,   
      Type      : req.body.Type  ,       
      AjouterPar: req.body.AjouterPar,
      AjouterLe : req.body.AjouterLe,  
      };
      Contacte.create(newData)
      .then((Contacte) => {
        console.log('Data inserted successfully:', Contacte);
        res.status(200).json({ message: 'Avec succès' });
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
      });
  
  })
  router.post('/UContacte', async (req, res) => {
    const updatedData = {
      NomPrenom : req.body.NomPrenom ,     
      Libelle   : req.body.Libelle ,   
      Fonction  : req.body.Fonction,   
      ModifiePar: req.body.ModifiePar,
      ModifieLe : req.body.ModifieLe,  
      };
      Contacte.update(updatedData, {
        where: { id:  req.body.ID },
      })
      .then((Contacte) => {
        console.log('Data updated successfully:', Contacte);
        res.status(200).json({ message: 'Avec succès' });
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Erreur lors de la modification des données' });
      });
  
  })

  router.delete('/DContacte', async (req, res) => {
    try {
      // Find the record by ID
      const recordToDelete = await Contacte.findByPk(req.body.ID);
  
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