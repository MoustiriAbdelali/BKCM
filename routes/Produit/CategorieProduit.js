const express =require('express')
const router =express.Router()
const model =require('../../models')
const  CatProd = model.Categorie
const sequelize =require("sequelize")

router.post  ('/TCatProd', async (req, res) => {
  try {
    const results = await CatProd.findAll({
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
router.post  ('/ICatProd', async (req, res) => {
  const newData = {

    SocieteID:     req.body.SocieteID, 
    CategorieID_:  req.body.CategorieID_,
    Libelle:       req.body.Libelle,       
    Couleur:       req.body.Couleur,       
          
    AjouterPar:    req.body.AjouterPar,
    AjouterLe:     req.body.AjouterLe,  
    };
    CatProd.create(newData)
    .then((CatProd) => {
      console.log('Data inserted successfully:', CatProd);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/UCatProd', async (req, res) => { 
  const updatedData = {
    Libelle:    req.body.Libelle,   
    Couleur:    req.body.Couleur,      
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    CatProd.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((CatProd) => {
      console.log('Data updated successfully:', CatProd);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
router.delete('/DCatProd', async (req, res) => {
    try {
      // Find the record by ID
      const recordToDelete = await CatProd.findByPk(req.body.ID);
  
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
