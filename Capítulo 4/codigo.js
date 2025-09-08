const materias = {
        fisica:["Perez","Pedro", "Pepito", "Cofla", "María"],
        programación:["Rodriguez", "Pedro", "Juan", "Pepito"],
        lógica:["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "María"],
        química:["Dalto", "Pedro","Juan", "Pepito", "Cofla", "María"],
    }

const inscribir = (alumno, materia) => {
    personas= materias[materia]
    personas.shift();
    alumno = personas;
    if (alumno.length >= 2) {
        document.write (`Lo siento <b> ${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas`)
    }
}

inscribir ("Pedrito", "fisica")