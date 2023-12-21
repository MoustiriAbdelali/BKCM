

    const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const LigneMt = sequelize.define("LigneMt", {
    Ordre        :{ type: datatype.INTEGER(2)                    },  
    TP_Ligne     :{ type: datatype.INTEGER(1)     ,defaultValue:0},  
    IDLotProduit :{ type: datatype.INTEGER(11)    ,defaultValue:0},  
    Libellé      :{ type: datatype.STRING(25)                    }, 
    Colisage     :{ type: datatype.INTEGER(4)     ,defaultValue:0},
    Nbr_Colis    :{ type: datatype.DECIMAL(10,2)  ,defaultValue:0},
    Qte_VRAC     :{ type: datatype.DECIMAL(10,2)  ,defaultValue:0}, 
    Qte          :{ type: datatype.DECIMAL(10,2)  ,defaultValue:0},

    PMP          :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    PrixHT       :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    PrixTTC      :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    PrixRevient  :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},

    TypeRemise   :{ type: datatype.INTEGER(1)     ,defaultValue:0},
    TauxRemisE   :{ type: datatype.DECIMAL(3,6)   ,defaultValue:0},
    RemiseHT     :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    RemiseTTC    :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    
    MntHT_B      :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},  
    MntHT        :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    HTNet        :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    TauxTVA      :{ type: datatype.DECIMAL(3,6)   ,defaultValue:0},
    MntTVA       :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    ResultatTTC  :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    TTCNet       :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    VRevient     :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},

    Qte_E        :{ type: datatype.DECIMAL(10,2)  ,defaultValue:0},
    Qte_S        :{ type: datatype.DECIMAL(10,2)  ,defaultValue:0}, 

    Date_PMP     :{ type: datatype.DATE                          }, 
    PMPnew       :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Benifice     :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},

    AjouterPar     :{ type: datatype.STRING(50)    },
    AjouterLe      :{ type: datatype.DATE          },
    ModifiePar     :{ type: datatype.STRING(50)    },
    ModifieLe      :{ type: datatype.DATE          },
  },
  {
    tableName: 'LigneMt',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return LigneMt
};

