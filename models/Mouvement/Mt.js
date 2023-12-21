    


    const sequelize = require("sequelize");
module.exports = (sequelize, datatype) => {
  const Mouvement = sequelize.define("Mouvement", {
    IDLienMT       :{ type: datatype.INTEGER(11)   }, 
    Date           :{ type: datatype.DATE          }, 
    Reference      :{ type: datatype.STRING(25)    }, 
    Num            :{ type: datatype.INTEGER(4)    },   
    Mois           :{ type: datatype.INTEGER(1)    }, 
    Annee          :{ type: datatype.INTEGER(2)    }, 
    Type_          :{ type: datatype.INTEGER(2)    }, 
    Statut         :{ type: datatype.INTEGER(1)    }, 
      
    SansTVA        :{ type: datatype.BOOLEAN(1)     ,defaultValue:false}, 
    flagCalcule    :{ type: datatype.BOOLEAN(1)     ,defaultValue:false}, 

    Mnt_HT_B       :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Mnt_HT         :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    TypeRemise     :{ type: datatype.INTEGER(1)     ,defaultValue:false},
    TxRemise       :{ type: datatype.FLOAT          ,defaultValue:0},
    MntRemiseHT    :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    MntRemiseTTC   :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    MNT_HT_NET     :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Mnt_TVA        :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Droit_Timbre   :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Mnt_TTC_B      :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Mnt_TTC        :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},
    Mnt_TTC_Final  :{ type: datatype.DECIMAL(24,6)  ,defaultValue:0},

    ModeRegelment  :{ type: datatype.INTEGER(1)    },
    Date_paiement  :{ type: datatype.DATE          },
    Refchaque      :{ type: datatype.STRING(25)    },
    mReglement     :{ type: datatype.DECIMAL(24,6) ,defaultValue:0},
    mReste         :{ type: datatype.DECIMAL(24,6) ,defaultValue:0},
    
    EMP_Source     :{ type: datatype.INTEGER(11)   ,defaultValue:0},
    EMP_destination:{ type: datatype.INTEGER(11)   ,defaultValue:0},

    Observation    :{ type: datatype.STRING(100)   },
    Verou          :{ type: datatype.BOOLEAN(1)     ,defaultValue:false}, 

    AjouterPar     :{ type: datatype.STRING(50)    },
    AjouterLe      :{ type: datatype.DATE          },
    ModifiePar     :{ type: datatype.STRING(50)    },
    ModifieLe      :{ type: datatype.DATE          },
  },
  {
    tableName: 'Mouvement',
    timestamps: false, // Disable createdAt and updatedAt columns
    logging: false
  }
  )
  return Mouvement
};

