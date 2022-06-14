var btns = document.getElementById('menu'),
    cajas = document.getElementById('todo-menu'),
    contador = 0;

function cambiar() {
    if (contador == 0) {
        cajas.classList.add('blue');
        contador = 1;
    } else {
        cajas.classList.remove('blue');
        contador = 0;
    }
}

btns.addEventListener('click', cambiar, true)