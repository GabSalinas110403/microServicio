var ruta=require("express").Router();
var {mostrarProductos}=require("../bd/productosBD");

ruta.get("/", async(req, res)=>{
    var productos = await mostrarProductos();
    console.log(productos);
    res.render("usuarios/mostrarproducto",{productos});
});

module.exports=ruta;