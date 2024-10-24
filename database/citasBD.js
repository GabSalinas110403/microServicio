var conexion=require("./conexion");
var Cita=require("../models/Cita");
async function mostrarCitas(){
    var users=[];
    try{
        var citas=await conexion.get(); 
        //console.log(usuarios);
        citas.forEach((cita) =>{
            var user=new Cita(cita.id, cita.data());
            if (user.bandera==0){
                users.push(user.obtenerDatos);
            }
        });
    }
    catch(err){
        console.log("Error al recuperar citas de la BD "+err);
    }
    return users;
}

async function buscarPorID(id){
    var user;
    //console.log(id);
    try{
        var cita=await conexion.doc(id).get();
        var citaObjeto=new Cita(cita.id, cita.data());
        if (citaObjeto.bandera==0){
            user=citaObjeto.obtenerDatos;
        }
    }
    catch(err){
        console.log("Error al recuperar la cita "+ err);
    }
    return user;
}

async function nuevaCita(datos){
    var user=new Cita(null,datos);
    var error=1;
    if (user.bandera==0){
        try{
            await conexion.doc().set(user.obtenerDatos);
            console.log("Cita agendada en la BD ");   
            error=0;
        }
        catch(err){
            console.log("Error al capturar la nueva cita " +err);
        }
    }
    return error;
}

async function modificarCita(datos){
    var user=new Cita(datos.id, datos);
    var error=1;
    if (user.bandera==0){
        try{
            await conexion.doc(user.id).set(user.obtenerDatos);
            console.log("Registro actualizado ");
            error=0;
        }
        catch(err){
            console.log("Error al modificar la cita programada "+err);
        }
    }
    return error;
}

async function borrarCita(id){
    try{
        await conexion.doc(id).delete();
        console.log("Registro borrado ");
    }
    catch{
        console.log("Error al borrar la cita "+err);
    }
}

module.exports={
    mostrarCitas,
    buscarPorID,
    nuevaCita,
    modificarCita,
    borrarCita
}