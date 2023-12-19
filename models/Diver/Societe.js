const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Societe = sequelize.define("SocieteDB", {

    Libelle :     { type: datatype.STRING(50), allowNull: false, },
    Abrev:        { type: datatype.INTEGER(2),    },
    Couleur:      { type: datatype.INTEGER(4),    },
    Adresse:      { type: datatype.STRING(100),   },
    Logo:         { type: datatype.STRING(150),   },
    RC:           { type: datatype.STRING(25),    },
    NIF:          { type: datatype.STRING(25),    },
    NIC:          { type: datatype.STRING(25)     },
    AI:           { type: datatype.STRING(25),    },
    Statut:       { type: datatype.INTEGER(1),  defaultValue:0   },

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'Societe',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Societe
};