class Dispositivo {

    #encendido = false;

    constructor(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    encender() {
        this.#encendido = true;
        console.log(` ${this.nombre} encendido `);
    }

    apagar() {
        this.#encendido = false;
        console.log(` ${this.nombre} apagado `);
    }

    get estado() {
        return this.#encendido ? "Encendido" : "Apagado";
    }
}

class IluminacionInteligente extends Dispositivo {

    constructor(nombre, ubicacion, color = "Blanco") {
        super(nombre, ubicacion);
        this.color = color;
    }

    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        console.log(` ${this.nombre} cambio a ${nuevoColor} `);
    }

    encender() {
        super.encender();
        console.log(` ${this.color} `);
    }

}

class AsistenteDeVoz extends Dispositivo {

    constructor(nombre, ubicacion, volumen) {
        super(nombre, ubicacion);
        this.volumen = 10;
    }

    ajustarVolumen(nivel) {
        if (nivel > 100) nivel = 100;
        if (nivel < 0) nivel = 0;

        this.volumen = nivel;
        console.log(` ${this.nombre} volumen ajustado a ${this.volumen} `);
    }

}

class Casa {
    
    constructor() {
        this.dispositivos = [];
    }

    conectarDispositivo(dispositivo) {
        this.dispositivos.push(dispositivo);
        console.log(` ${dispositivo.nombre} conectado a la casa`)
    }

    listarDipositivos() {
        console.log("DISPOSITIVOS CONECTADOS EN LA CASA");
        for (const d of this.dispositivos) {
            console.log(` ${d.nombre} ${d.ubicacion} ${d.estado} `);
        }
    }

    activarModoFiesta() {
        console.log("MODO FIESTA ACTIVADO");

        for (const d of this.dispositivos) {
            d.encender();

            if (d instanceof IluminacionInteligente) {
                d.cambiarColor("Disco RGB");
            }

            if (d instanceof AsistenteDeVoz) {
                d.ajustarVolumen(80);
                console.log("Reproduciendo playlist")
            }
        }
    }
}

class Red {
    
    static verificarConexion() {
        const ping = Math.floor(Math.random() * 100); //Math.floor redondea hacia abajo y Math.random genera un numero del 0 (incluido) al 1 (no incluido) decimal
        return ping < 60
            ? "Conexión Estable"
            : "Conexión Inestable;"
    }

}

const casa = new Casa();

const luzLiving = new IluminacionInteligente("Luz Living", "Living", "Calido");
const luzCocina = new IluminacionInteligente("Luz Cocina", "Cocina");
const altavoz = new AsistenteDeVoz("Altavoz Central", "Living");

casa.conectarDispositivo(luzLiving);
casa.conectarDispositivo(luzCocina);
casa.conectarDispositivo(altavoz);

casa.listarDipositivos();
casa.activarModoFiesta();
casa.listarDipositivos();


