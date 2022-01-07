var knex = require('knex')({
    client:"mysql",
    connection:{
        user:"root",
        host:"localhost",
        password:"Muskan@123",
        database:"login"
    }
  })

// create a table in users  
knex.schema.createTable('users',(Table)=>{
    Table.increments('id').primary();
    Table.string('Username')
    Table.string('password')
}).then((data)=>{
    console.log("users Table create succesfully")
}).catch((err)=>{
console.log('users Table already exit in Databases');
})

knex.schema.createTable('state',(Table)=>{
    Table.string('state')
}).then((data)=>{
    console.log("state succesfully")
}).catch((err)=>{
    console.log("state already exists")
})
knex.schema.createTable('district',(Table)=>{
    Table.string('district')
}).then((data)=>{
    console.log("district succesfully")
}).catch((err)=>{
    console.log("district already exists")
})

knex.schema.createTable('childData',(Table)=>{
    Table.string('childName')
    Table.string('FatherName')
    Table.string('dateOfBirth')
    Table.string('motherName')
    Table.string('sex')
    Table.string('state')
    Table.string('district')

}).then((data)=>{
    console.log("child information is succesfully")
}).catch((err)=>{
    // console.log(err.message)
    console.log("already exists.")
})


module.exports=knex;