// 1. Tipo entero y decimal

const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica

const cientifico = 5e3 //5000
console.log(cientifico)

// 3. Infinitos y NaN

const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones aritméticas

// 1. Suma, resta, multiplicación y división
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 4 * 7
const division = 16 / 2

// 2. Módulo y exponenciación (potencia)
const modulo = 15 % 8
const exponenciación = 2 ** 3 // 2 al cubo

console.log(modulo)
console.log(exponenciación)

// Precisión
const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(2))
// Igual a nivel de dato y de tipo -> Falso
console.log(resultado === 0.3)

// Operaciones avanzadas

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)