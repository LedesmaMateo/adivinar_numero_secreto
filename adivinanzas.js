const generarNumero = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const compararNumeros = (numeroSecreto, numeroUsuario) => {
    if (numeroSecreto == numeroUsuario) {
        console.log(`ADIVINASTE!! el numero: ${numeroSecreto} es correcto! \n`);
    } else if (numeroSecreto > numeroUsuario) {
        console.log(`INCORRECTO, el numero: ${numeroUsuario} es MENOR que el numero secreto \n`);
    } else if (numeroSecreto < numeroUsuario){
        console.log(`INCORRECTO, el numero: ${numeroUsuario} es MAYOR que el numero secreto \n`);
    }
}


module.exports = { generarNumero, compararNumeros }