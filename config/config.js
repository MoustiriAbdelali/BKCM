require('dotenv').config();
module.exports={
    Developement :{
        host:     process.env.DB_HOST ,
        database: process.env.DB_DATABASE ,
        username: process.env.DB_USERNAME ,
        password: process.env.DB_PASSWORD ,
        dialect:  process.env.DIALECT    
    },
    Production :{
        host:     'localhost' ,
        database: "xtfwmbpy_comCloud" ,
        username: "xtfwmbpy_comCloud",
        password:"wE1~QW4C^l9d" ,
        dialect:  process.env.DIALECT ,
        logging:  false
    }
}