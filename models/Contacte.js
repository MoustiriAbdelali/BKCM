const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Conctact = sequelize.define("Conctact", {

    NomPrenom:    { type: datatype.STRING(50),    allowNull: false, },
    Libelle :     { type: datatype.STRING(50), allowNull: false, },
    Fonction:     { type: datatype.INTEGER(8),    },
    Type  :       { type: datatype.INTEGER(1),    },//1 tel 2 email 3 fax 

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'Conctact',
    timestamps: false, // Disable createdAt and updatedAt columns
  }
  )
  return Conctact
};
