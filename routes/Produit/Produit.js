const express =require('express')
const router =express.Router()
const model =require('../../models')
const Produit = model.Produit
const CatProduit = model.Categorie
const sequelize =require("sequelize")

router.post  ('/TProduit', async (req, res) => {
  try {
    const results = await CatProduit.findAll({
      attributes: ['Libelle', 'Couleur'],
      
    include: [
        {
          model: Produit,
         // attributes: ['Libelle', 'Ref'], //'Qte','AlarmeBattery','Volt','Rsrp',
        }
        ],
     // raw: true,
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
router.post  ('/IProduit', async (req, res) => {
  const newData = {
    SocieteID:   req.body.SocieteID, 
    CategorieID: req.body.CategorieID, 
    Libelle:     req.body.Libelle,
    Ref:         req.body.Ref,
    QteM :       req.body.QteM,
    Colisage:    req.body.Colisage,
    PAchat:      req.body.PAchat,
    PHT:         req.body.PHT,
    TVA:         req.body.TVA,
    PTTC:        req.body.PTTC,
    Type_  :     req.body.Type_,
    AjouterPar:  req.body.AjouterPar,
    AjouterLe:   req.body.AjouterLe,
    };
    Produit.create(newData)
    .then((Produit) => {
      console.log('Data inserted successfully:', Produit);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/UProduit', async (req, res) => { 
  const updatedData = {
    CategorieID: req.body.CategorieID, 
    Libelle:   req.body.Libelle,
    Ref:       req.body.Ref,
    QteM :     req.body.QteM,
    Colisage:  req.body.Colisage,
    PAchat:    req.body.PAchat,
    PHT:       req.body.PHT,
    TVA:       req.body.TVA,
    PTTC:      req.body.PTTC,
    Type_  :    req.body.Type_, 
    Statut :    req.body.Statut,       
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    Produit.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((Produit) => {
      console.log('Data updated successfully:', Produit);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})

router.delete('/DProduit', async (req, res) => {
  try {
    // Find the record by ID
    const recordToDelete = await Produit.findByPk(req.body.ID);

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