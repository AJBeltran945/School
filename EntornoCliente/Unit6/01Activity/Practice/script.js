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
    const allDivs = document.querySelectorAll('div')

// itera de todo los elementos pillados
    for (const allDiv of allDivs){
        //pilla el atributo que necesitas
        const atr = allDiv.getAttribute('hero')

        //si el atributo no esta lo crea y ponga un valor nuevo
        if (atr === null){
            allDiv.setAttribute('hero', 'wonderwoman')
        }
    }
})





