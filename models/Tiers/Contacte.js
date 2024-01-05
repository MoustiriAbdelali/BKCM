const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Conctact = sequelize.define("Conctact", {

    NomPrenom:    { type: datatype.STRING(50),    allowNull: false, },
    Tel :         { type: datatype.STRING(15),    },
    Email :       { type: datatype.STRING(50),    },
    Fax :         { type: datatype.STRING(15),    },
    Fonction:     { type: datatype.INTEGER(8),    },

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'Conctact',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Conctact
};
