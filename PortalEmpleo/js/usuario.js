var butns = document.getElementById('UserAccount'),
    bxu = document.getElementById('usrAcc'),
    contador = 0;

function cambio() {
    if (contador == 0) {
        bxu.classList.add('yellow');
        contador = 1;
    } else {
        bxu.classList.remove('yellow');
        contador = 0;
    }
}

butns.addEventListener('click', cambio, true)