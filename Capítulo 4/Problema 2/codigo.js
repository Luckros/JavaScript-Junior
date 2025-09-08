const obtenerInformacion = (materia) =>{
    materias = {
        fisica:["Perez","Pedro", "Pepito", "Cofla", "María"],
        programación:["Rodriguez", "Pedro", "Juan", "Pepito"],
        lógica:["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "María"],
        química:["Dalto", "Pedro","Juan", "Pepito", "Cofla", "María"],
    }

    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=> {
    let informacion = obtenerInformacion(materia);

if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b> ${informacion[1]}</b> es: <b>${profesor}<b/><br>
        Los alumnos: <b> ${alumnos}<b/> <br><br>`)
}
}


const cantidadDeClases = (alumno)=> {
    let informacion= obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        } 
    }
    return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases</b><br> Esta cursando las clases:<b>${clasesPresentes}</b> <br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programación");
mostrarInformacion("química");
mostrarInformacion("lógica");

document.write(cantidadDeClases("Juan"))
document.write(cantidadDeClases("Pedro"))

