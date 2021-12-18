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

let empTable =sequelize.define('Employee', {
    Emp_Id :
    {
    primaryKey : true, //Since the primary key is defined, it will not create a new id with pk as defulat
    type: Sequelize.INTEGER
    },
    Name : Sequelize.STRING,
    dept : Sequelize. STRING,
    designation : Sequelize.STRING
    }, {
    timestamps: false, //to avoid creating createdAt and updatedAt fields while creating the table.
    freezeTableName: true //Avoid adding 's' at the end of table name.
    });

  /*  empTable.sync({force:false})
   .then( () => {
    console.log ("New Table Employee Table is created...");
    })
    .finally ( () => {
    sequelize.close();
    });
    */



/* empTable.findAll({raw:true})
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.error(err);
        })
        
*/
/*
empTable.findByPk(101)
        .then ((data) => {
            console.log(data.dataValues);
        })
        .catch ( (err) => {
            console.error(err);
        })  
*/
/*
        empTable.findAll({where:{Name:'Sachin'},raw:true})
        .then((result)=>{
            console.log(result);
        })
*/

/*
        empTable.findAll({attributes:['Name','Dept'],where :{Dept:'IT'},raw:true})
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.error(err);
        })
*/


/*
        empTable.findAndCountAll()
        .then((result)=>{
            console.log("Count of record :"+result.count);
        })
*/


/*
      empTable.findAll({order:['Name'],raw:true})
      .then((result)=>{
            console.log(result);
        })
*/
/*  
    const Op=Sequelize.Op;
    empTable.findAll({
            where:{
                Name:{[Op.like]:'%n'}
            },
            raw:true
        })
        .then((result)=>{
            console.log(result);
        })
*/
/*
sequelize.query("select  * from employee ",
        {type:sequelize.QueryTypes.SELECT})
        .then((users)=>{
            console.log(users);
    })
*/

/*
const Op = Sequelize.Op;
empTable.findAll({ where: {
[Op.or]: [{Name:'Nalin'}, {Emp_Id:101}]
},raw:true}).then ((data) => {
console.log(data);
}).catch ( (err) => {
console.error(err);
})

*/
/*
empTable.create({
    Emp_Id:106,
    Name:'Gajju',
    dept:'IT',
    designation:'Developer'
})
.then((data)=>{
    console.log("data inserted ")
})
*/


/*
    var empObj=empTable.build({
        Emp_Id:107,
        Name:'Mohit',
        dept:'Govt',
        designation:'Associate'
    });

    empObj.save();
*/

/*

var bulkObject=empTable.bulkCreate(
    [
        {
            Emp_Id:108,
            Name:'Swati',
            dept:'Electrical',
            designation:'Junior Engineer'
        },
        {
            Emp_Id:109,
            Name:'Ankita',
            dept:'IT',
            designation:'Associate'
        },

]).
then((data)=>{
    console.log("Data inserted ")
})


*/
/*
empTable.update(
    {Name:'Sachin Bamotriya'},
    {where:{Name:'Sachin'}}
)
.then((data)=>[
    console.log("updated")
])
*/

empTable.destroy(
    {where:{Name:'Shubham'}}
)
.then((data)=>console.log("Deleted"))