const express = require('express');
const app = express();



// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
    res.send("Hello world");
});



//Port app 
let port = process.env.PORT || 8011;
app.listen(port, ()=>  {
    console.log("Server in http://localhost:" + port);
});