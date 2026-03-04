const materias = {
    fisica: [90,6,4,"fisica"],
    matematica: [84,8,8,"matematica"],
    logica: [92,8,4,"lógica"],
    quimica: [96,8,4,"química"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programación"],
    biologia: [75,9,2,"biología"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"],   
} 


const aprobo = ()=> {
    for (materia in materias) {
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90 ) {
        console.log("c%   Asistencias en orden","color:green");
        } else {
        console.log("c%   Falta de asistencias","color:red");
        }

        if (promedio >=7 ) {
            console.log("c%   Promedio en orden","color:green")
            } else {
            console.log("c%   Promedio desaprobado","color:red");
        }

        if (trabajos >=3 ) {
            console.log("c%   Trabajos en orden","color:green")
            } else {
            console.log("c%   Falta de trabajos","color:red");
        }
        }
    }



aprobo()