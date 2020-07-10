const env = require('dotenv').config()
console.log(process.env.DB_HOST);

var knex = require('knex')({
    client: "mysql",
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
})

// Create candidate table
    knex.schema.createTable('candidate', function(table){
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.string('vote');
     }).then(() => {
        console.log("candidate table created successfully....")
     }).catch(() => {
        console.log("candidate table is already exists!");
    })

module.exports = knex;