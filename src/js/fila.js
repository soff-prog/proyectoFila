//Declarando variables
let nombre;
nombre="Sofia";

let edad=20;

const carrera = "Desarrollo de Software";

//Template o interpolacion de cadenas
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);
//ingresa al DOM
document.writeln(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);
alert(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);

///calcular el promedio de un alumno y mostrar en pantalla el nombre, el promedio y sua aprobo o no
let alumno = prompt("Ingresa tu nombre: ");
let taller = parseFloat(prompt("Ingrese la calificacion del taller: "));
let evaluacion = parseFloat(prompt("Ingrese la calificacion del evaluacion: "));
let proyecto = parseFloat(prompt("Ingrese la calificacion del proyecto: "));

let promedio = (taller+evaluacion+proyecto)/3;

if(promedio >=7){
    alert(`El alumno ${alumno} tiene un promedio de ${promedio.toFixed(2)} por lo tanto aprobo`);
}else{
    alert(`El alumno ${alumno} tiene un promedio de ${promedio.toFixed(2)} por lo tanto reprobo`);
}
