DineroCofla = prompt("Cuanto dinero tiene Cofla?");
DineroCofla = parseInt(DineroCofla);
// DineroPedro = prompt("Cuanto dinero tiene Pedro?");
// DineroRoberto = prompt("Cuanto dinero tiene Roberto?");


if (DineroCofla >= 0.6 && DineroCofla < 1) {
    alert("Te podes comprar un helado de agua");
    alert ("y te sobran" + ( DineroCofla -0.6));

}

else if (DineroCofla >= 1 && DineroCofla < 1.6) {
    alert("Te podes comprar un helado de crema");
    alert ("y te sobran" +  ( DineroCofla -1));
}

else if (DineroCofla >= 1.6 && DineroCofla < 1.7) {
    alert("Te podes comprar un helado marca heladix");
    alert ("y te sobran" + (DineroCofla -1.6));
}

else if (DineroCofla >= 1.7 && DineroCofla < 1.8) {
    alert("Te podes comprar un helado marca heladovbich");
    alert ("y te sobran" + (DineroCofla -1.7));
}

else if (DineroCofla >= 1.8 && DineroCofla < 2.9) {
    alert("Te podes comprar un helado marca helardo")
    alert ("y te sobran" + (DineroCofla -1.8));
}

else if (DineroCofla >= 2.9 ) {
    alert(" Te podes comprar un helado con confites o un pote de 1/4");
    alert ("y te sobran" + (DineroCofla -2.9));
}
    else {
        alert ("no te alcanza para nada");
    }



