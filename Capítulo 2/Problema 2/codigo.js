let cantidad = prompt("¿cuantos alumnos son: ");
let totalAlumnos= [];


for (i = 0; i < cantidad; i++) {
    totalAlumnos[i] = [prompt("Nombre del alumno " + (i+1)),0];


}

const tomarAsistencia = (nombre,p)=> {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        totalAlumnos[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in totalAlumnos) {
        tomarAsistencia(totalAlumnos[alumno][0], alumno);
    }
}

for (alumno in totalAlumnos) {
    let resultado = `${totalAlumnos[alumno][0]}:<br> 
    ______Asistencias: ${totalAlumnos[alumno][1]} <br>
    ______Ausencias ${30 - parseInt(totalAlumnos[alumno][1])}`;
    if ( 30 - totalAlumnos[alumno][1] > 18 ) {
    resultado +="Reprobado por inasistencia"
    } else {
    resultado+= "<br><br>"
    } 
    document.write(resultado)
}