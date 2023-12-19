
const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const CodeBarre = sequelize.define("CodeBarre", {

    Libelle :     { type: datatype.STRING(25),    },
    CodeBarre:    { type: datatype.STRING(25),  allowNull: false,  },

    AjouterPar:   { type: datatype.STRING(50),    },
    AjouterLe:    { type: datatype.DATE           },
    ModifiePar:   { type: datatype.STRING(50),    },
    ModifieLe:    { type: datatype.DATE           },
  },
  {
    tableName: 'CodeBarre',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return CodeBarre
};