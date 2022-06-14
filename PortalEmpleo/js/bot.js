var btns = document.getElementById('btn-IcoBot'),
    box = document.getElementById('Bot'),
    contador = 0;

function cambio() {
    if (contador == 0) {
        box.classList.add('green');
        contador = 1;
    } else {
        box.classList.remove('green');
        contador = 0;
    }
}

btns.addEventListener('click', cambio, true)