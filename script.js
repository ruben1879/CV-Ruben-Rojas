document.getElementById('mostrar-imagen').addEventListener('click', function () {
  document.getElementById('imagen').style.visibility = 'visible';
});
document.getElementById('ocultar-imagen').addEventListener('click', function () {
  document.getElementById('imagen').style.visibility = 'hidden';

});

document.getElementById('calcular-edad').addEventListener('click', function (){
const fecha= new Date();
let fechaActual= 0;
let fechaNacimiento= 0;

fechaActual= fecha.getFullYear();
fechaNacimiento= 1979;

let resultado= fechaActual - fechaNacimiento;

console.log(resultado)
document.getElementById('resultado').innerHTML = resultado + " Años";
});