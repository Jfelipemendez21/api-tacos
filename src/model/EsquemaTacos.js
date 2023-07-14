const mongoose= require("mongoose");

const tacosEsquema= new mongoose.Schema({
          nombre: String, 
          ingredientes: [String],
          precio: Number,
          imagen: String
})

tacosEsquema.methods.setUrlImg= function setUrlImg (filename){
    this.imagen= `${process.env.HOST}:${process.env.PORT}/public/${filename}`
}

module.exports= mongoose.model("Tacos", tacosEsquema) 