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

let StudentTable =sequelize.define('Student', {
    Student_ID :
    {
    primaryKey : true, //Since the primary key is defined, it will not create a new id with pk as defulat
    type: Sequelize. INTEGER
    },
    Name : Sequelize. STRING,
    Stream : Sequelize. STRING,
    marks : Sequelize. INTEGER
    }, {
    timestamps: false, //to avoid creating createdAt and updatedAt fields while creating the table.
    freezeTableName: true //Avoid adding 's' at the end of table name.
    });

    StudentTable.sync({force:false})
   .then( () => {
    console.log ("New Table Student Table is created...");
    })
    .finally ( () => {
    sequelize.close();
    });
    

    const Op=Sequelize.Op;
    StudentTable.findAll({
            where:{
                marks:{
                    [Op.gt]: 75
                }
            },
            raw:true
        })
        .then((result)=>{
            console.log(result);
        })