const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const Tiers = sequelize.define("Tiers", {

    Societe:    { type: datatype.STRING(50),   allowNull: false, },
    Solde :     { type: datatype.DECIMAL(4, 2), },
    Adresse:    { type: datatype.STRING(100),   },
    RC:         { type: datatype.STRING(25),    },
    NIF:        { type: datatype.STRING(25),    },
    NIC:        { type: datatype.STRING(25)     },
    AI:         { type: datatype.STRING(25),    },
    Statut:     { type: datatype.INTEGER(1),    },// 0Actif 1Bloquer
    Type  :     { type: datatype.INTEGER(1),    },//1fournisseur 2Clien
    AjouterPar: { type: datatype.STRING(50),    },
    AjouterLe:  { type: datatype.DATE           },
    ModifiePar: { type: datatype.STRING(50),    },
    ModifieLe:  { type: datatype.DATE           },
  },
  {
    tableName: 'Tiers',
    timestamps: false, // Disable createdAt and updatedAt columns
  }
  )
  return Tiers
};
