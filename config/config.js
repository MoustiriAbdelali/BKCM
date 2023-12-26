require('dotenv').config();

module.exports={
    development :{
        host:     process.env.DB_HOST ,
        database: process.env.DB_DATABASE ,
        username: process.env.DB_USERNAME ,
        password: process.env.DB_PASSWORD ,
        dialect:  process.env.DIALECT,    
        api:  process.env.DB_HostComplie    
    },
    production :{
        host:     process.env.DG_HOST  ,
        database: process.env.DG_DATABASE ,
        username: process.env.DG_USERNAME ,
        password: process.env.DG_PASSWORD ,
        dialect:  process.env.DIALECT ,
        logging:  false,
        api:  process.env.DG_HostComplie   
    }
}


