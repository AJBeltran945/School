document.getElementById('startFor').addEventListener('click', () =>{
    for (let i = 0; i < 10; i++) {
        let color = i % 2 === 0 ? 'blue' : 'red';

        setTimeout(() => {
            document.body.style.background = color;
            console.log(`Color cambiado a ${color}`);
        }, i * 1000);
    }
})

document.getElementById('atributos').addEventListener('click', () =>{
    // const allDivs = document.getElementsByTagName('div')

    // pilla todo los divs
    const allDivs = document.querySelectorAll('ul')

    // itera de todo los elementos pillados
    for (const allDiv of allDivs){
        //pilla el atributo que necesitas
        const atr = allDiv.getAttribute('hero')

        //si el atributo no esta lo crea y ponga un valor nuevo
        if (atr === null){
            allDiv.setAttribute('hero', 'wonderwoman')
            allDiv.innerHTML = 'wonderwoman'
        }
    }
})

document.getElementById('numeroNodes').addEventListener('click', () =>{
    let num = 0
    
    for (const elem of document.body.childNodes){
        console.log(elem)
        num++
    }

    console.log(num)
})



document.getElementById('irPadre').addEventListener('click', irPadre);
document.getElementById('irHijos').addEventListener('click', irHijos);
document.getElementById('prevHijo').addEventListener('click', prevHijo);
document.getElementById('nextHijo').addEventListener('click', nextHijo);
document.getElementById('lastHijo').addEventListener('click', lastHijo);
document.getElementById('firstHijo').addEventListener('click', firstHijo);

function irPadre() {
    const padre = document.querySelector('.padre');
    const hijos = document.querySelectorAll('.hijos');

    padre.style.background = 'blue';
    padre.style.color = 'white';

    hijos.forEach(hijo => {
        hijo.style.background = 'white';
        hijo.style.color = 'black';
    });
}

function irHijos() {
    const padre = document.querySelector('.padre');
    const hijos = document.querySelectorAll('.hijos');

    padre.style.background = 'white';
    padre.style.color = 'black';

    const hijoActivo = Array.from(hijos).find(hijo => hijo.style.background === 'blue');

    if (hijoActivo) {
        alert('Ya estás dentro de los hijos');
    } else {
        hijos[0].style.background = 'blue';
        hijos[0].style.color = 'white';
    }
}

function nextHijo() {
    const padre = document.querySelector('.padre');
    console.log(padre.style.background)
    if (padre.style.background === 'blue') {
        alert('No puedes avanzar, el padre está seleccionado.');
        return;
    }

    const hijos = document.querySelectorAll('.hijos');
    let index = Array.from(hijos).findIndex(hijo => hijo.style.background === 'blue');

    if (index === -1) {
        hijos[0].style.background = 'blue';
        hijos[0].style.color = 'white';
    } else if (index < hijos.length - 1) {
        hijos[index].style.background = 'white';
        hijos[index].style.color = 'black';

        hijos[index + 1].style.background = 'blue';
        hijos[index + 1].style.color = 'white';
    }
}

function prevHijo() {
    const padre = document.querySelector('.padre');
    if (padre.style.background === 'blue') {
        alert('No puedes retroceder, el padre está seleccionado.');
        return;
    }

    const hijos = document.querySelectorAll('.hijos');
    let index = Array.from(hijos).findIndex(hijo => hijo.style.background === 'blue');

    if (index > 0) {
        hijos[index].style.background = 'white';
        hijos[index].style.color = 'black';

        hijos[index - 1].style.background = 'blue';
        hijos[index - 1].style.color = 'white';
    }
}

function lastHijo() {
    const padre = document.querySelector('.padre');
    if (padre.style.background === 'blue') {
        alert('No puedes ir al último hijo, el padre está seleccionado.');
        return;
    }

    const hijos = document.querySelectorAll('.hijos');

    hijos.forEach(hijo => {
        hijo.style.background = 'white';
        hijo.style.color = 'black';
    });

    console.log(padre.lastChild)

    hijos[hijos.length - 1].style.background = 'blue';
    hijos[hijos.length - 1].style.color = 'white';
}

function firstHijo() {
    const padre = document.querySelector('.padre');
    if (padre.style.background === 'blue') {
        alert('No puedes ir al primer hijo, el padre está seleccionado.');
        return;
    }

    const hijos = document.querySelectorAll('.hijos');

    hijos.forEach(hijo => {
        hijo.style.background = 'white';
        hijo.style.color = 'black';
    });

    hijos[0].style.background = 'blue';
    hijos[0].style.color = 'white';
}
