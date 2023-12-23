const express =require('express')
const router =express.Router()
const model =require('../../models')
const LigneMt = model.LigneMt
const sequelize =require("sequelize")

router.post  ('/TLigneMt',     async (req, res) => {
  try {
    const results = await LigneMt.findAll({   
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

router.post  ('/ILigneMt',     async (req, res) => {
  const newData = {
    SocieteID    :req.body.SocieteID    ,
    ProduitID    :req.body.ProduitID    ,
    MtID         :req.body.MtID         ,
    Ordre        :req.body.Ordre        ,
    TP_Ligne     :req.body.TP_Ligne     ,
    IDLotProduit :req.body.IDLotProduit ,
    Libellé      :req.body.Libellé      ,
    Colisage     :req.body.Colisage     ,
    Nbr_Colis    :req.body.Nbr_Colis    ,
    Qte_VRAC     :req.body.Qte_VRAC     ,
    Qte          :req.body.Qte          ,
    PMP          :req.body.PMP          ,
    PrixHT       :req.body.PrixHT       ,
    PrixTTC      :req.body.PrixTTC      ,
    PrixRevient  :req.body.PrixRevient  ,
    TypeRemise   :req.body.TypeRemise   ,
    TauxRemisE   :req.body.TauxRemisE   ,
    RemiseHT     :req.body.RemiseHT     ,
    RemiseTTC    :req.body.RemiseTTC    ,  
    MntHT_B      :req.body.MntHT_B      ,
    MntHT        :req.body.MntHT        ,
    HTNet        :req.body.HTNet        ,
    TauxTVA      :req.body.TauxTVA      ,
    MntTVA       :req.body.MntTVA       ,
    ResultatTTC  :req.body.ResultatTTC  ,
    TTCNet       :req.body.TTCNet       ,
    VRevient     :req.body.VRevient     ,
    Qte_E        :req.body.Qte_E        ,
    Qte_S        :req.body.Qte_S        ,
    Date_PMP     :req.body.Date_PMP     ,
    PMPnew       :req.body.PMPnew       ,
    Benifice     :req.body.Benifice     , 

    AjouterPar   :req.body.AjouterPar   ,
    AjouterLe    :req.body.AjouterLe    ,  
    };
    LigneMt.create(newData)
    .then((LigneMt) => {
      console.log('Data inserted successfully:', LigneMt);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ Erreur: "Erreur lors de l'insertion des données" });
    });

})
router.put   ('/ULigneMt',     async (req, res) => { 
  const updatedData = {
    TiersID        :req.body.TiersID        ,
    IDLienMT       :req.body.IDLienMT       , 
    Date           :req.body.Date           ,
    Reference      :req.body.Reference      ,
    Num            :req.body.Num            ,
    Mois           :req.body.Mois           ,
    Annee          :req.body.Annee          ,
    Type_          :req.body.Type_          ,
    Statut         :req.body.Statut         ,
    SansTVA        :req.body.SansTVA        ,
    Mnt_HT_B       :req.body.Mnt_HT_B       ,
    Mnt_HT         :req.body.Mnt_HT         ,
    TypeRemise     :req.body.TypeRemise     ,
    TxRemise       :req.body.TxRemise       ,
    MntRemiseHT    :req.body.MntRemiseHT    ,
    MntRemiseTTC   :req.body.MntRemiseTTC   ,
    MNT_HT_NET     :req.body.MNT_HT_NET     ,
    Mnt_TVA        :req.body.Mnt_TVA        ,
    Droit_Timbre   :req.body.Droit_Timbre   ,
    Mnt_TTC_B      :req.body.Mnt_TTC_B      ,
    Mnt_TTC        :req.body.Mnt_TTC        ,
    Mnt_TTC_Final  :req.body.Mnt_TTC_Final  ,
    ModeRegelment  :req.body.ModeRegelment  ,
    Date_paiement  :req.body.Date_paiement  ,
    Refchaque      :req.body.Refchaque      ,
    EMP_Source     :req.body.EMP_Source     ,
    EMP_destination:req.body.EMP_destination,
    Observation    :req.body.Observation    ,
    Verou          :req.body.Verou          ,

    ModifiePar     :req.body.ModifiePar     ,
    ModifieLe      :req.body.ModifieLe      ,  
    };
    //const id_ = req.query.ID;
    LigneMt.update(updatedData, {
      where: { id:  req.body.ID },
    })
    .then((LigneMt) => {
      console.log('Data updated successfully:', LigneMt);
      res.status(200).json({ message: 'Avec succès' });
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Erreur lors de la modification des données' });
    });

})

router.delete('/DLigneMt',     async (req, res) => {
  try {
    // Find the record by ID
    const recordToDelete = await LigneMt.findByPk(req.body.ID);

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