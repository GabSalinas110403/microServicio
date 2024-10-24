var ruta=require("express").Router();
var {mostrarCitas, nuevaCita, modificarCita, buscarPorID, borrarCita}=require("../database/citasBD");

ruta.get("/", async(req, res)=>{
    var citas = await mostrarCitas();
    console.log(citas);
    res.render("citas/mostrar",{citas});
});

ruta.get("/nuevacita", async (req, res)=>{
    res.render("citas/nuevo");
});

ruta.post("/nuevacita", async(req, res)=>{
    var error = await nuevaCita(req.body);
    res.redirect("/");
});

ruta.get("/editar/:id",async(req, res)=>{
    var user=await buscarPorID(req.params.id);
    console.log(user);
    res.render("citas/modificar",{user});
});

ruta.post("/editar", async(req, res)=>{
    var error=await modificarCita(req.body);
    res.redirect("/");      
});

ruta.get("/borrar/:id", async(req, res)=>{
    await borrarCita(req.params.id);
    res.redirect("/");
});

module.exports=ruta;