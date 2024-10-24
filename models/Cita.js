class Cita{
    constructor(id, data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;
        this.motivo=data.motivo;
        this.fecha=data.fecha;
    }
    set id(id){
        if(id!=null){
            id.length>0?(this._id=id) : (this.bandera=1);
        }
    }
    set nombre(nombre){
        nombre.length>0? (this._nombre=nombre) : (this.bandera=1);
    }
    set motivo(motivo){
        motivo.length>0? (this._motivo=motivo) : (this.bandera=1);
    }
    set fecha(fecha){
        fecha.length>0? (this._fecha=fecha) : (this.bandera=1);
    }
    get id(){
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
    get motivo(){
        return this._motivo;
    }
    get fecha(){
        return this._fecha;
    }
    get obtenerDatos(){
        if(this._id != null)
            return {
                id:this.id,
                nombre:this.nombre,
                motivo:this.motivo,
                fecha:this.fecha
            }
        else{
            return {
                nombre:this.nombre,
                motivo:this.motivo,
                fecha:this.fecha
            }
        }
    }
}

module.exports=Cita;