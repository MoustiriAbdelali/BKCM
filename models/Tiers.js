const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const cuve_ = sequelize.define("Tiers", {

    Societe: {
      type: datatype.STRING(50),
    },
    Solde : {
        type: datatype.DECIMAL(4, 2),
    },
    Adresse: {
        type: datatype.STRING(100),
      },
    RC: {
        type: datatype.STRING(25),
    },
   
    Statut: {
      type: datatype.INTEGER(1),
    },
    IDStation: {
      type: datatype.INTEGER(11),
    },
  },
  {
    tableName: 'Tiers'
  }
  )
  return Tiers
};
