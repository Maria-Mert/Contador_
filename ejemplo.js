let contador = 0;

let resultadofinal= document.getElementById('resultado');
let restarButton = document.getElementById('restar');
let agregaButton = document.getElementById('agrega');
let eliminarButton = document.getElementById('eliminar');

function actualizarContador() {
    resultadofinal.textContent = contador;
}

restar.addEventListener('click', function() {
    contador --;
    actualizarContador();
});

agrega.addEventListener('click', function() {
    contador++;
    actualizarContador();
});

eliminar.addEventListener('click', function() {
    contador = 0;
    actualizarContador();
});