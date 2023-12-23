const express =require('express')
const router =express.Router()
const model =require('../../models')
const  Variable = model.Variable
const sequelize =require("sequelize")


router.post  ('/IVariable', async (req, res) => {
    const newData = {
      SocieteID:    req.body.SocieteID   ,
      NomVariable:  req.body.NomVariable ,
      valeur:       req.body.valeur,   
  
      };
      Variable.create(newData)
      .then((Variable) => {
        console.log('Data inserted successfully:', Variable);
        res.status(200).json({ message: 'Avec succès' });
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
        res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
      });
  
  })
router.put   ('/UVariable', async (req, res) => { 
  const updatedData = {
    valeur:     req.body.valeur,   
    };
    Variable.update(updatedData, {
      where: { 
        NomVariable:  req.body.NomVariable ,
        SocieteID:    req.body.SocieteID   ,},
      
    })
    .then((Variable) => {
      console.log('Data updated successfully:', Variable);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})
  

router.get   ('/RVariable', async (req, res) => {
  try {
    const rowCount = await Variable.count({ where: { 
      NomVariable:  req.body.NomVariable ,
      SocieteID:    req.body.SocieteID   ,} });
    res.json({ rowCount });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
  module.exports=router
