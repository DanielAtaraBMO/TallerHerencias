
class Empleado {
    constructor(nombre, cargo, salario) {
        this.activo = true;
        this.cargo = cargo;
        this.salario = salario;
        this.nombre = nombre;

    }
    presentarse() {
        return {
            nombre: this.nombre,
            cargo: this.cargo
        };
    }
    calcularSalarioAnual() {
        let salarioAnual = 0;
        return this.salario * 12;
    }
    desactivar() {
        this.activo = false;
        console.log("Se ha desactivado");
    }
    info() {
        console.log(`
        Empleado: ${this.nombre},
        Cargo: ${this.cargo}, 
        Salario Mensual: ${this.salario}    
        Activo: ${this.activo}
        `);

    }
}


// Le decimos a Lider que herede de Empleado usando la palabra 'extends'
class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, "Lider de equipo", salario);
        this.equipo = equipo;
    }
    presentarEquipo() {    
        let listaequipo = this.equipo.join(", ");
        return `El equipo esta conformado por ${listaequipo}`;
    }
    
    agregarMiembro(nuevoMiembro){
        this.equipo.push(nuevoMiembro);
        return `Miembro ${nuevoMiembro} agregado con éxito`;
    }

}

let Grupo1 = ["Carlos", "Fabian"];
const miLider1 = new Lider("Daniel", 5200000, Grupo1);
let Empleado1 = new Empleado("Carlos", "Desarrollador", 2700000);
let Empleado2 = new Empleado("Fabian","Desarrollador", 2500000);

let Grupo2 = ["Ana","Fernando"];
const miLider2 = new Lider("Erick", 4800000, Grupo2);
let Empleado3 = new Empleado("Ana", "Desarrollador", 2600000);
let Empleado4 = new Empleado("Fernando","Desarrollador", 2500000)

console.log(
    "El costo mensual de la nomina de todos los trabajadores es: " + 
    (miLider1.salario + miLider2.salario + Empleado1.salario + Empleado2.salario + Empleado3.salario + Empleado4.salario)
);

console.log(
    "El costo anual de la nomina de todos los trabajadores es: " + 
    (miLider1.calcularSalarioAnual() + miLider2.calcularSalarioAnual() + Empleado1.calcularSalarioAnual() + Empleado2.calcularSalarioAnual() + Empleado3.calcularSalarioAnual() + Empleado4.calcularSalarioAnual()
));

Empleado2.info();
Empleado2.desactivar();
Empleado2.info();


miLider1.info();
console.log(miLider1.presentarEquipo());


miLider1.agregarMiembro("Pedro");
console.log(miLider1.presentarEquipo());

