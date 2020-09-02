require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express"),
    massive = require("massive"),
    { CONNECTION_STRING, SERVER_PORT } = process.env;

    // controllers
    const ctrl = require("./controller");
    const midCtrl = require("./middlewareController");
    const app = express();
    
app.use(express.json());
app.use(express.static('public'))

massive({
   connectionString: CONNECTION_STRING,
   ssl: { rejectUnauthorized: false },
 }).then(db => {
   app.set("db", db)
   console.log("DB connected")
   app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
 });

// Endpoint
app.put("/api/users/:userId/", midCtrl.verifyQuery, ctrl.updateDB);


