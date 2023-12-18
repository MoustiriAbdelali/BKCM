const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const DiverDB = sequelize.define("DiverDB", {

    Libelle :     { type: datatype.STRING(50),     allowNull: false, },
    Couleur:      { type: datatype.INTEGER(8),    },
    Type  :       { type: datatype.INTEGER(1),     allowNull: false, },//1 FONCTION

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'DiverDB',
    timestamps: false, // Disable createdAt and updatedAt columns
  }
  )
  return DiverDB
};