//Funcion para mostrar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola mundo :)");
}

//Variables
function imprimirVariables(){
    let nombre= "Rodnny";
    let edad= "20"
//Forma tradicional de conectar cadenas
    console.log("nombre:", nombre)
    console.log("edad:", edad)
//Forma moderna de conectar cadenas
    console.log(`nombre: ${nombre},edad: ${edad}`);
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x");

}

