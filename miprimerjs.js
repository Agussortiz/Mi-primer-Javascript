// Primer parte del trabajo Variables

var uno = 12

var dos = uno

uno = 32

console.log("Hola, " + uno)


// Segunda parte Mi Primera Página Con JavaScript

alert("Bienvenidos a mi primer pagina de Javascript")

var nombre_user = prompt("¿Cual es tu nombre?")

alert('Hola ' + nombre_user)

var edad = prompt("¿Cual es tu edad?")

var mensaje = '¡Genial, fuiste registrado en la consola como ' + nombre_user + ' y se registró tu edad de ' + edad + ' años!'

alert(mensaje)

// Tercer Parte Mensaje Con Variables

var nombre = "Pedro", edad = 20, cumpleaños = "30/07", ciudad = "La Plata", ocupacion = "Ingeniero", pasatiempos = "Programar";

console.log('El es ' + nombre + ', tiene '+edad + ' años, cumple el '+ cumpleaños+', vive en '+ciudad+', es '+ocupacion+' y le gusta '+pasatiempos);

// Cuarta parte con Cantidad De Caracteres

var texto = prompt("Crea una historia")

var numeroCaracteres = texto.length;

alert(numeroCaracteres)

// Quinta parte Calculadora De Edad

edadej2 = prompt('¿Cuantos años tenes?')

diasdeedad = edadej2 * 365

alert('Tenes '+ diasdeedad + ' días de vida.')

// Sexta parte Suma De Valores

var num1 = prompt('elegí un numero')
num1 = parseInt(num1)
var num2 = prompt('elegí otro numero')
num2 = parseInt(num2)
var resultado = num1 + num2
alert(resultado)

// Ultimo ejercicio Calculador De Abastecimiento De Por Vida

var edadejer1 = prompt("¿Cual es tu edad actual?");
var edadejer1_max = prompt("¿Cuantos años estimas que viviras?");
var snackxdia = prompt("¿Cuantos snacks comes por día?");

var cuantosquedan = (edadejer1_max *365 - edadejer1 *365) * snackxdia


alert('Necesitarás '+ cuantosquedan + ' snacks para que te alcancen hasta los ' + edadejer1_max + ' años')

var precio = 150;

alert('Vas a gastar $' + cuantosquedan*precio)

// Ejercicio 2

// Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida.

var díass = prompt("Cantidad de días que vas a estar de viaje")
var presupuesto = prompt("Presupuesto maximo")
var comida = 18

// calculé 18 comidas (7 dias) almuerzo , cena y alguna merienda o algo
// Calculando que del presupuesto maximo 2/3 irían para comidas

var comidaplata = ((presupuesto /3 ) * 2 ) / díass

alert("Podés gastar " +comidaplata+ " en cada comida para que te alcance la plata durante los "+díass+ "días de viaje")