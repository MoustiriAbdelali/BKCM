const sequelize = require("sequelize");

module.exports = (sequelize, datatype) => {
  const Variable = sequelize.define("Variable", {

    NomVariable : { type: datatype.STRING(50), primaryKey: true, },
    valeur:       { type: datatype.INTEGER(50)},
  },
  {
    tableName: 'Variable',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Variable
};