const numeroSecreto = Math.floor(Math.random() * 10 + 1)

const numeroJugador = parseInt(prompt("Adivina el número secreto del 1 al 10"))

console.log(`Este es el número con el que juegas = ${numeroJugador}`)

if(numeroJugador === numeroSecreto) {
    console.log("Adivinaste en número secreto") 
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo. Intenta de nuevo.")
} 