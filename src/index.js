const express= require("express"); 
const mongoose= require("mongoose");
require("dotenv").config(); 
const rutas= require("./routes/rutas");

const app= express(); 
const port = process.env.PORT || 4200; 


app.use(express.json()); 


app.use("/api-tacos", rutas); 

// PARA SERVIR LOS ARCHIVOS ESTATICOS EN ESTA DIRECCION 
app.use("/public", express.static(`${__dirname}/src/imgs`))

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("Conexion a base de datos exitosa!"))
    .catch((err) => console.log(err)); 

app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto: " ,port);
})

