/*Importante!
    Fake Code to fill Js data
*/

/*Enunciado
    Realizá un programa que permita al usuario ingresar un número entero entre 1 y 7. 
    Debe mostrarse por pantalla el nombre del día de la semana que representa tal número 
    tomando como el primer día de la semana el Domingo.
    De ingresar un número fuera de rango debe mostrar error.
*/



const readline = require('readline');

const miTeclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let diaSemana;
let nombreDia;

// Solicitar al usuario un número entre 1 y 7
miTeclado.question("Ingrese un número entre 1 y 7: ", (inputDia) => {
    diaSemana = parseInt(inputDia);

    switch (diaSemana) {
        case 1:
            nombreDia = "Domingo";
            break;
        case 2:
            nombreDia = "Lunes";
            break;
        case 3:
            nombreDia = "Martes";
            break;
        case 4:
            nombreDia = "Miércoles";
            break;
        case 5:
            nombreDia = "Jueves";
            break;
        case 6:
            nombreDia = "Viernes";
            break;
        case 7:
            nombreDia = "Sábado";
            break;
        default:
            nombreDia = "Error";
            break;
    }

    if (nombreDia === "Error") {
        console.log("\n" + "El número ingresado está fuera de rango.");
    } else {
        console.log("\n" + "El número " + diaSemana + " corresponde al día " + nombreDia + ".");
    }

    miTeclado.close();
});