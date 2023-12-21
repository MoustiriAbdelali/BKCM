const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const TypePiece = sequelize.define("TypePiece", {
    Type_        : { type: datatype.INTEGER(2)}, 
    Definition   : { type: datatype.STRING(50)},
    Titre        : { type: datatype.STRING(50)},
    prefixe      : { type: datatype.STRING(5) },
    Mode_Calcul  : { type: datatype.INTEGER(1) ,defaultValue:0},
    Mode_Paiement: { type: datatype.INTEGER(1) ,defaultValue:0},
    Ordre        : { type: datatype.INTEGER(2)},
    parametre_01 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_02 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_03 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_04 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_05 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_06 : { type: datatype.INTEGER(1) ,defaultValue:0},
    parametre_07 : { type: datatype.INTEGER(1) ,defaultValue:0},
    paramétre_08 : { type: datatype.INTEGER(1) ,defaultValue:0},
    paramétre_09 : { type: datatype.INTEGER(1)},
    Couleur      : { type: datatype.STRING(7)  ,defaultValue:"#1A73E8"},
    AjouterPar   : { type: datatype.STRING(50)},
    AjouterLe    : { type: datatype.DATE      },
    ModifiePar   : { type: datatype.STRING(50)},
    ModifieLe    : { type: datatype.DATE      },
  },
  {
    tableName: 'TypePiece',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return TypePiece
};

