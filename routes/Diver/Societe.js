const express =require('express')
const router =express.Router()
const model =require('../../models')
const Societe = model.Societe
const sequelize =require("sequelize")

router.post  ('/TSociete', async (req, res) => {
  try {
    const results = await Societe.findAll({
   
     // raw: true,
    //  where: {
    //     Type: req.body.Type,
    // },
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post  ('/ISociete', async (req, res) => {
  const newData = {
    Libelle:   req.body.Libelle, 
    Abrev:     req.body.Abrev  ,    
    Couleur:   req.body.Couleur,       
    Abrev:     req.body.Abrev,
    Adresse:   req.body.Adresse,
    Logo:      req.body.logo,
    RC:        req.body.RC,
    NIF:       req.body.NIF,
    NIC:       req.body.NIC,
    AI:        req.body.AI,
    AjouterPar:req.body.AjouterPar,
    AjouterLe: req.body.AjouterLe,  

    };
    Societe.create(newData)
    .then((Societe) => {
      console.log('Data inserted successfully:', Societe);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/USociete', async (req, res) => { 
  const updatedData = {
    Libelle:   req.body.Libelle, 
    Abrev:     req.body.Abrev  ,    
    Couleur:   req.body.Couleur,       
    Abrev:     req.body.Abrev,
    Adresse:   req.body.Adresse,
    Logo:      req.body.logo,
    RC:        req.body.RC,
    NIF:       req.body.NIF,
    NIC:       req.body.NIC,
    AI:        req.body.AI,      
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Societe.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Societe) => {
      console.log('Data updated successfully:', Societe);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
router.put   ('/SSociete', async (req, res) => { 
  const updatedData = {
    Statut:     req.body.Statut,   
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    Societe.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Societe) => {
      console.log('Data updated successfully:', Societe);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})

  module.exports=router
