const express = require('express');
const app = express();



// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));
// Middleware pour parser les JSON
app.use(express.json());
// Middleware pour Cors
const cors = require("cors");
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    Credential: true
}));




//DATABASE
const {initDataBase} = require("./database/databaseConnector");
initDataBase();


//Route
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
    res.send("Hello world");
});



//Port app 
let port = process.env.PORT || 8011;
app.listen(port, ()=>  {
    console.log("Server in http://localhost:" + port);
});