export class Usuario{
    constructor(nombre, email){
    this.nombre = nombre;
    this.email = email;
    this.rol = "Cliente";
    this.activo = true;
    }
    saludo(){
        return {
        nombre: this.nombre,
        rol: this.rol
        };
    }
    desactivar() {
        this.activo = false;
        console.log("Se ha desactivado");
    }
    resumen(){
        return {
        nombre: this.nombre,
        email: this.email,
        rol: this.rol,
        activo: this.activo
        };
    }
}

// Le decimos a Lider que herede de Empleado usando la palabra 'extends'
export class UsuarioVip extends Usuario {
    constructor(nombre, email,membresia){
    super(nombre , email)
    this.rol = "Cliente Vip";
    this.membresia = membresia;
    }
    saludo(){
    let saludoPadre = super.saludo();

    saludoPadre.membresia = this.membresia;
    return saludoPadre;
    }
    beneficios(){
        return `Como miembro ${this.membresia}, tienes acceso a soporte 24/7 y descuentos exclusivos.`;
    }
}
