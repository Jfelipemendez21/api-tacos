const express= require("express"); 
const mongoose= require("mongoose");
require("dotenv").config(); 
const rutas= require("./routes/rutas");

const app= express(); 
const port = process.env.PORT || 4200; 


app.use(express.json()); 


app.use("/api-tacos", rutas); 

// PARA SERVIR LOS ARCHIVOS ESTATICOS EN ESTA DIRECCION 
app.use("/public", express.static(`${__dirname}/imgs`))

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conexion a la base de datos exitosa!!"))
    .catch((err)=> console.log("Error al intentar conectar con la base de datos" ,err));

app.listen(port, ()=>{
    console.log("Servidor corriendo en el puerto " ,port);
})

