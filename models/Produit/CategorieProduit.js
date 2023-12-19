const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Categorie = sequelize.define("Categorie", {

    Libelle :     { type: datatype.STRING(50), allowNull: false, },
    Couleur:      { type: datatype.INTEGER(8),    },

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'Categorie',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Categorie
};