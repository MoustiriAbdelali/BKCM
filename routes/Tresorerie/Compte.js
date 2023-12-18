const express =require('express')
const router =express.Router()
const model =require('../../models')
const  Compte = model.Compte
const sequelize =require("sequelize")

router.post('/TCompte', async (req, res) => {
  try {
    const results = await Compte.findAll({
   
     // raw: true,
     where: {
      Statut: req.body.Statut,
    },
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post('/ICompte', async (req, res) => {
  const newData = {
    SocieteID:  req.body.SocieteID, 
    Libelle:    req.body.Libelle,       
       
    AjouterPar: req.body.AjouterPar,
    AjouterLe:  req.body.AjouterLe,  
    };
    Compte.create(newData)
    .then((Compte) => {
      console.log('Data inserted successfully:', Compte);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put ('/UCompte', async (req, res) => { 
  const updatedData = {
    Libelle:    req.body.Libelle,       
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Compte.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Compte) => {
      console.log('Data updated successfully:', Compte);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
router.put ('/SCompte', async (req, res) => { 
  const updatedData = {
    Statut :    req.body.Statut, 
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Compte.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Compte) => {
      console.log('Data updated successfully:', Compte);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})


  module.exports=router