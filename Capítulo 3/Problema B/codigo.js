class telefonos {
    constructor (color, peso, pantalla, camara, memoria){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.memoria = memoria;
        this.info = `<b> Las caracteristicas del celular son:</b> <br> color: ${this.color} <br>
        peso: ${this.peso} <br> pantalla: ${this.pantalla} <br> camara: ${this.camara} <br> memoria: ${this.memoria}`
        this.encendido= false
    }
    botonEncendido () {
        if (this.encendido == false){
            alert ("celular prendido");
            this.encendido = true;
        } else {
            alert ("El celular ya esta prendido")
        }
    }
    reiniciar (){
        if (this.encendido == true){
            alert ("Reiniciando")
        } else {
            alert ("El celular esta apagado")
        }
    }
    tomarFoto (){
        alert (`Foto tomada en una resolución de: ${this.camara}`)
    }
    grabarVideo() {
        alert (`Grabando video en resolución de: ${this.camara} `)
    }
    mostrarInfo (){
        return`
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.pantalla}</b></br>
        Camara: <b${this.camara}></b></br>
        Memoria: <b>${this.memoria}</b></br>
        `;
    }
}

class CelularAltaGama extends telefonos {
    constructor (color, peso, pantalla, camara, memoria,rdce){
        super (color, peso, pantalla,camara,memoria);
        this.camaraExtra = rdce
    }
    grabarVideo() {
        alert ("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert ("Vamos a hacer un reconocimiento facial")
    }
    mobileInfo() {
        return this.mostrarInfo() + `Resolucion de camara trasera: ${this.camaraExtra}`
    }
}





// const celular1 = new telefonos ("rojo","2kg","Oled","2mpx","3gb <br> <br>")
// const celular2 = new telefonos ("verde","1kg","Oled","5mpx","6gb <br> <br>")
// const celular3 = new telefonos ("azul","3kg","Oled","8mpx","10gb")

const celular1 = new CelularAltaGama("rojo", "130g", "Oled", "2mpx", "3gb")

document.write(celular1.info)

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
    `);