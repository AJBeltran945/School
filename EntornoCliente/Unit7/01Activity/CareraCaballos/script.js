

async function startRace() {
    document.getElementById('inicio').disabled = true
    const imagenUrl = 'https://t4.ftcdn.net/jpg/02/58/71/53/360_F_258715362_lpzHSlpsQBwFdTJCJve5GQ1zt8YDr9YS.jpg';

    removeHorse()

    const horses = [];


    for (let i = 1; i <= 4; i++) {
        displayHorse(imagenUrl, i);
        horses.push(document.getElementById(`caballo-${i}`));
    }

    const winner = await Promise.race(horses.map(horse => moveHorse(horse)));
    alert('El '+ winner + ' gano la partida')
    document.getElementById('inicio').disabled = false
}

function moveHorse(horse) {
    return new Promise(resolve => {
        let position = 5;

        function animate() {
            const add = Math.random() * 2.5;
            position += add;
            horse.style.transform = `translateX(${position}px)`;

            if (position >= 995) {
                resolve(horse.id);
            } else {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    });
}

function displayHorse(imagenUrl, i){
    const pista = document.getElementById('pista')

    const nombre = 'caballo'
    const horse = document.createElement('div')
    horse.classList.add('caballo')
    horse.innerHTML = `
        <img src="${imagenUrl}" id="${nombre + '-' + i}">
    `;

    pista.appendChild(horse)
}

function removeHorse(){
    const pista =document.getElementById('pista')
    pista.innerHTML = ''
}