const express =require('express')
const router =express.Router()
const model =require('../../models')
const  CodeBarre = model.CodeBarre
const sequelize =require("sequelize")

router.post  ('/TCodeBarre', async (req, res) => {
  try {
    const results = await CodeBarre.findAll({
   
     // raw: true,
     where: {
        ProduitID: req.body.ProduitID,
    },
    });

    res.json(results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})
router.post  ('/ICodeBarre', async (req, res) => {
  const newData = {
    Libelle:    req.body.Libelle,       
    ProduitID: req.body.ProduitID,Type:       req.body.Type,
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
router.put   ('/UCodeBarre', async (req, res) => { 
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
router.delete('/DCodeBarre', async (req, res) => {
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
