var btn = document.getElementById('close-Qr'),
    caja = document.getElementById('Qr'),
    contador = 0;

function cambio() {
    if (contador == 0) {
        caja.classList.add('red');
        contador = 1;
    } else {
        caja.classList.remove('red');
        contador = 0;
    }
}

btn.addEventListener('click', cambio, true)