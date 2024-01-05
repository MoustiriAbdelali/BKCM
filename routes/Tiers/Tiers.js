const express =require('express')
const router =express.Router()
const model =require('../../models')
const  Tiers = model.Tiers
const sequelize =require("sequelize")

router.post  ('/TTires',     async (req, res) => {
  try {
    const results = await Tiers.findAll({   
     where: {
      SocieteID  : req.body.SocieteID,
    },
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.get   ('/GTires',     async (req, res) => {
  try {
    const results = await Tiers.findAll({   
  
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post  ('/ITires',     async (req, res) => {

  try{
  const newData = {
    SocieteID:  req.body.SocieteID, 
    Societe:    req.body.Societe,       
    Adresse:    req.body.Adresse,    
    RC:         req.body.RC,         
    NIF:        req.body.NIF,       
    NIC:        req.body.NIC,        
    AI:         req.body.AI,         
    Type_  :     req.body.Type_  ,  
    AjouterPar: req.body.AjouterPar,
    AjouterLe:  req.body.AjouterLe,  
    };

   await Tiers.create(newData);
    const maxId = await Tiers.max('id');
    res.status(200).json({ message: 'Avec succès',"id": maxId});
  }catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
  }

})
router.put   ('/UTires',     async (req, res) => { 
  const updatedData = {
    Societe:    req.body.Societe,       
    Adresse:    req.body.Adresse,    
    RC:         req.body.RC,         
    NIF:        req.body.NIF,       
    NIC:        req.body.NIC,        
    AI:         req.body.AI,
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

router.delete('/DTires',     async (req, res) => {
  try {
    // Find the record by ID
    const recordToDelete = await Tiers.findByPk(req.body.ID);

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
router.get   ('/CountTires', async (req, res) => {
  try {
    const rowCount = await Tiers.count();
    res.json({ rowCount });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

  module.exports=router