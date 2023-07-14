const express= require("express"); 
const esquemaTacos= require("../model/EsquemaTacos")
const ruta= express.Router(); 
const upload= require("../libs/storage")

ruta.get("/tacos", (req, res)=>{
    esquemaTacos 
        .find()
        .then((data)=>{ res.json(data)})
        .catch((err)=>{ res.json({message: err})})
}); 


ruta.post("/taco", upload.single('imagen'), (req,res)=>{
    const taco = esquemaTacos(req.body)
    if(req.file){
        const {filename} = req.file; 
        taco.setUrlImg(filename)
    }
        taco.save()
        .then((data)=>{ res.json(data)})
        .catch((err)=>{ res.json({message: err})})
})

ruta.get("/tacos:id", (req, res)=>{ 
    const {id} = req.params; 
    esquemaTacos
        .findById(id)
        .then((data)=>{ res.json(data)})
        .catch((err)=>{ res.json({message: err})})
})

// actualizar 
ruta.put("/tacos/:id", (req, res)=>{
    const {nombre, ingredientes, precio}= req.body; 
    const {id}= req.params; 
    esquemaTacos
        .updateOne({_id: id}, {$set: {nombre, ingredientes ,precio}})
        .then((data)=>{ res.json(data)})
        .catch((err)=>{ res.json(err)})
})


// eliminar


ruta.delete("/tacos/:id", (req,res)=>{
    const {id}= req.params; 
    esquemaTacos
        .deleteOne({_id: id})
        .then((data)=>{ res.json(data)})
        .catch((err)=>{ res.json(err)})
})


module.exports= ruta;