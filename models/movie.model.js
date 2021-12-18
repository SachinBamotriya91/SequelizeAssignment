const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging:false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


let MovieTable =sequelize.define('Movie', {
    MovieId:
    {
    primaryKey : true, //Since the primary key is defined, it will not create a new id with pk as defulat
    type: Sequelize.INTEGER
    },
    MovieName : Sequelize.STRING,
    Type_Of_Movie : Sequelize.STRING,
    Language:Sequelize.STRING
    }, {
    timestamps: false, //to avoid creating createdAt and updatedAt fields while creating the table.
    freezeTableName: true //Avoid adding 's' at the end of table name.
    });

   /* MovieTable.sync({force:true})
   .then( () => {
    console.log ("New Table Movie Table is created...");
    })
    .finally ( () => {
    sequelize.close();
    });

    */
    MovieTable.findAll({raw:true})
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.error(err);
        })


    