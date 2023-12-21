const express =require('express')
const router =express.Router()
const model =require('../../models')
const TypePiece = model.TypePiece 
const sequelize =require("sequelize")


router.post  ('/TTypePiece', async (req, res) => {
  try {
    const results = await TypePiece.findAll({   
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

router.post  ('/ITypePiece', async (req, res) => {
  const newData = {
    SocieteID    :req.body.SocieteID    ,
    Type_        :req.body.Type_        ,
    Definition   :req.body.Definition   ,
    Titre        :req.body.Titre        ,
    prefixe      :req.body.prefixe      ,
    Mode_Calcul  :req.body.Mode_Calcul  ,
    Mode_Paiement:req.body.Mode_Paiement,
    Ordre        :req.body.Ordre        ,
    parametre_01 :req.body.parametre_01 ,
    parametre_02 :req.body.parametre_02 ,
    parametre_03 :req.body.parametre_03 ,
    parametre_04 :req.body.parametre_04 ,
    parametre_05 :req.body.parametre_05 ,
    parametre_06 :req.body.parametre_06 ,
    parametre_07 :req.body.parametre_07 ,
    paramétre_08 :req.body.paramétre_08 ,
    paramétre_09 :req.body.paramétre_09 ,
    Couleur      :req.body.Couleur ,
    AjouterPar   :req.body.AjouterPar   ,
    AjouterLe    :req.body.AjouterLe    ,
    };
    TypePiece.create(newData)
    .then((TypePiece) => {
      console.log('Data inserted successfully:', TypePiece);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/UTypePiece', async (req, res) => { 
  const updatedData = {
    Titre        :req.body.Titre        ,
    prefixe      :req.body.prefixe      ,
    Mode_Calcul  :req.body.Mode_Calcul  ,
    Mode_Paiement:req.body.Mode_Paiement,
    Ordre        :req.body.Ordre        ,
    parametre_01 :req.body.parametre_01 ,
    parametre_02 :req.body.parametre_02 ,
    parametre_03 :req.body.parametre_03 ,
    parametre_04 :req.body.parametre_04 ,
    parametre_05 :req.body.parametre_05 ,
    parametre_06 :req.body.parametre_06 ,
    parametre_07 :req.body.parametre_07 ,
    paramétre_08 :req.body.paramétre_08 ,
    paramétre_09 :req.body.paramétre_09 ,
    Couleur      :req.body.Couleur ,  
    ModifiePar: req.body.ModifiePar,
    ModifieLe:  req.body.ModifieLe,  
    };
    //const id_ = req.query.ID;
    TypePiece.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((TypePiece) => {
      console.log('Data updated successfully:', TypePiece);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})

router.get   ('/CountTypePiece', async (req, res) => {
    try {
      const rowCount = await TypePiece.count();
      res.json({ rowCount });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  




  module.exports=router