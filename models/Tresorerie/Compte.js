const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Compte = sequelize.define("Compte", {
    
    Libelle :     { type: datatype.STRING(50),    allowNull: false, },
    Solde:        { type: datatype.DECIMAL(4, 2), defaultValue:0    },
    Statut  :     { type: datatype.INTEGER(1),    defaultValue:0    },// 0 actif 1 bloquer 

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'Compte',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Compte
};