const readLine = require('readline-sync');
const { generarNumero, compararNumeros } = require('./adivinanzas');

const numeroSecreto = generarNumero();

const juegoAdivinanza = () => {
    let numeroUsuario = 0;

    console.log("JUEGO DE ADIVINANZAS: adivina el numero secreto \n");

    while(numeroSecreto != numeroUsuario){
        numeroUsuario = readLine.question("Ingrese un numero: ");
        compararNumeros(numeroSecreto, numeroUsuario);
    }

}

juegoAdivinanza();

