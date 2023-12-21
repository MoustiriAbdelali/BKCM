const TypePiece = [
    {
    SocieteID    :1,
    Type_        :1000,
    Definition   :"Bon de Commande Fournisseur" ,
    Titre        :"Bon de Commande",
    prefixe      :"CMF",
    Ordre        :1,
    parametre_01 :0,
    parametre_02 :0,
  },
  {
    SocieteID    :1,
    Type_        :1101,
    Definition   :"Bon de Réception",
    Titre        :"Bon de Réception",
    prefixe      :"BR",
    Ordre        :2,
    parametre_01 :1,
    parametre_02 :1,
  }
  {
    SocieteID    :1,
    Type_        :1202,
    Definition   :"Bon de retour Fournisseur",
    Titre        :"Bon de retour",
    prefixe      :"BRF",
    Ordre        :3,
    parametre_01 :1,
    parametre_02 :1,
  }
  {
    SocieteID    :1,
    Type_        :1301,
    Definition   :"Facture d'achat",
    Titre        :"Facture",
    prefixe      :"FA",
    Ordre        :4,
    parametre_01 :0,
    parametre_02 :0,
  }
  {
    SocieteID    :1,
    Type_        :1402,
    Definition   :"Avoir sur achat",
    Titre        :"Facture d'Avoir",
    prefixe      :"AA",
    Ordre        :5,
    parametre_01 :0,
    parametre_02 :0,
  }
  /////////////////////////////////////////////vente////////////////////////////////////////////////
  {
    SocieteID    :1,
    Type_        :2000,
    Definition   :"Devis",
    Titre        :"Devis",
    prefixe      :"DV",
    Ordre        :6,
    parametre_01 :0,
    parametre_02 :0,
  }
  {
    SocieteID    :1,
    Type_        :2100,
    Definition   :"Bon de commande Client",
    Titre        :"Bon de commande",
    prefixe      :"CM",
    Ordre        :7,
    parametre_01 :0,
    parametre_02 :0,
  }
  {
    SocieteID    :1,
    Type_        :2202,
    Definition   :"Bon de livraison",
    Titre        :"Bon de livraison",
    prefixe      :"BL",
    Ordre        :8,
    parametre_01 :1,
    parametre_02 :1,
  }
  {
    SocieteID    :1,
    Type_        :2301,
    Definition   :"Bon de retour client",
    Titre        :"Bon de retour",
    prefixe      :"BRC",
    Ordre        :9,
    parametre_01 :1,
    parametre_02 :1,
  }
  {
    SocieteID    :1,
    Type_        :2402,
    Definition   :"Facture de Vente",
    Titre        :"Facture",
    prefixe      :"FA",
    Ordre        :10,
    parametre_01 :0,
    parametre_02 :0,
  }
  {
    SocieteID    :1,
    Type_        :2501,
    Definition   :"Avoir sur Vente",
    Titre        :"Avoir sur Vente",
    prefixe      :"FA",
    Ordre        :10,
    parametre_01 :0,
    parametre_02 :0,
  }

   /////////////////////////////////////////////STOCK////////////////////////////////////////////////
   {
    SocieteID    :1,
    Type_        :3202,
    Definition   :"Bon d'inventaire",
    Titre        :"Bon d'inventaire",
    prefixe      :"BI",
    Ordre        :12,
    parametre_01 :1,
    parametre_02 :0,
  }
   {
    SocieteID    :1,
    Type_        :3101,
    Definition   :"Bon d'avarie",
    Titre        :"Bon d'avarie",
    prefixe      :"BA",
    Ordre        :11,
    parametre_01 :1,
    parametre_02 :0,
  }

]













module.exports={
  TypePiece
}