const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const Produit = sequelize.define("Produit", {

    Libelle:    { type: datatype.STRING(50),   allowNull: false, },
    Ref:        { type: datatype.STRING(50),    },
    Qte :       { type: datatype.DECIMAL(4, 2), },
    QteM :      { type: datatype.DECIMAL(4, 2), },
    Colisage:   { type: datatype.INTEGER(4),    },

    PAchat:     { type: datatype.DECIMAL(4, 2), defaultValue:0  },
    PHT:        { type: datatype.DECIMAL(4, 2), defaultValue:0  },
    TVA:        { type: datatype.INTEGER(1),    defaultValue:0  },
    PTTC:       { type: datatype.DECIMAL(4, 2), defaultValue:0  },
 
    
    Type  :     { type: datatype.INTEGER(1),    defaultValue:0  },//0 Marchendise 1 Service 3 N°serie
    Statut:     { type: datatype.INTEGER(1),    defaultValue:0  },// 0Actif 1Bloquer

    AjouterPar: { type: datatype.STRING(50),    },
    AjouterLe:  { type: datatype.DATE           },
    ModifiePar: { type: datatype.STRING(50),    },
    ModifieLe:  { type: datatype.DATE           },
  },
  {
    tableName: 'Produit',
    timestamps: false, // Disable createdAt and updatedAt columns
  }
  )
  return Produit
};
