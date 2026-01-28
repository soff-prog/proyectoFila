import '../css/style.css';
import 'flowbite';
 
 
//SELECCIONAR LAS ETIQUETAS CON ID BTN-GUARDAR E IMPRIMIR-DATOS
const botonGuardar = document.getElementById("btn-guardar");
const divDatos = document.getElementById("imprimir-datos");
 
//FUNCIÓN FLECHA PARA CALCULAR EL PROMEDIO
const calcularPromedio = () => {
    let nombre = document.getElementById("nombre").value;
    let taller = parseFloat(document.getElementById("taller").value);
    let evaluacion = parseFloat(document.getElementById("evaluacion").value);
    let proyecto = parseFloat(document.getElementById("proyecto").value);
 
    let promedio = (taller+evaluacion+proyecto)/3;
 
    divDatos.textContent = `El alumno ${nombre} tiene un promedio de ${promedio.toFixed(2)}`;
}
 
 
//botonGuardar.click=calcularPromedio;
 
botonGuardar.addEventListener('click', calcularPromedio);