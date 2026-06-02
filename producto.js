export class Producto {
    constructor(nombre, precio, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;

    }
    calcularTotal(){
        return this.precio * 1.19;
    }
    aplicarDescuento(porcentaje){
        let descuento = this.precio *(porcentaje/100);
        return this.precio - descuento;
    }
    resumen(){
        return{
            nombre : this.nombre,
            precio : this.precio,
            categoria : this.categoria
        }
    }
    tarjeta(){
        let precioIva = this.precio * 0.19;
        return{
            nombre: this.nombre,       
            categoria: this.categoria, 
            precioIva: this.calcularTotal() 
        }
    }   
}

export class ProductoDigital extends Producto{
    constructor(nombre, precio, licencia){
        super(nombre, precio)
        this.licencia = licencia;
    }
    calcularTotal(){
        return this.precio * 1;
    }
    resumen(){
        return{
            nombre : this.nombre,
            precio : this.precio,
            licencia : this.licencia
        }
    }
    tarjeta(){
        let precioIva = this.precio * 0.19;
        return{
            nombre: this.nombre,       
            licencia : this.licencia,
            precioIva: this.calcularTotal() 
        }
    }
}
