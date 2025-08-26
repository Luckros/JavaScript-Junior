let free = false;

const ValidarCliente = (time) => {
    let edad = prompt ("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && !free) {
            alert ("Pasa gratis por ser el primero");
            free = true;
        } else {
            alert ("Tenés que abonar la entrada");
        }
    } else {
        alert ("Sos menor de edad, no podes pasaar ");
    }
    
}

ValidarCliente(23);
ValidarCliente(24);
ValidarCliente(0.2);
ValidarCliente(0.6);
ValidarCliente(1);
ValidarCliente(2);
ValidarCliente(2.4);
ValidarCliente(3);