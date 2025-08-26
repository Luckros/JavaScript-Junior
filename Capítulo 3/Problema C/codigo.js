class App {
    constructor (descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar (){
        if (this.instalada == false)
            this.instalada = true;
        alert ("instalando app")
    }
    desinstalar (){
        if (this.instalada == true)
            this.instalada = false;
        alert ("desinstalando app")
    }
    abrir (){
        if (this.iniciada == false && this.instalda == true)
            this.iniciada = true;
        alert ("app encendida")
    }
    cerrar (){
        if (this.iniciada == true && this.instalada == true)
            this.iniciada = false;
        alert ("app apagada")
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>`
    }
}



app = new App ("16.000", "5 estrellas", "32gb" )

document.write(
    `${app.appInfo()}`
)