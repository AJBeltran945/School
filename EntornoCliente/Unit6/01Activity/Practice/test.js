document.getElementById('irPadre').addEventListener('click', irPadre)
document.getElementById('irHijos').addEventListener('click', irHijos)
document.getElementById('prevHijo').addEventListener('click', prevHijo)
document.getElementById('nextHijo').addEventListener('click', nextHijo)

function irPadre(){
    const padre = document.querySelector('.padre')
    padre.style.background = 'blue'
    padre.style.color = 'white'

    const hijos = document.querySelectorAll('.hijos')
    for (const hijo of hijos){
        hijo.style.background = 'white'
        hijo.style.color = 'black'
    }
}
function irHijos(){
    const padre = document.querySelector('.padre')
    const hijos = document.querySelectorAll('.hijos')
    let isActivo = false
    padre.style.background = 'white'
    padre.style.color = 'black'

    for (const hijo of hijos){
        if (hijo.style.background === 'blue'){
            isActivo
        }else{
            alert('ya estas dentro de los hijos')
            hijo.style.background = 'blue'
            hijo.style.color = 'white'
            break
        }
    }

    if (isAllWhite){
        hijos[0].style.background = 'blue'
        hijos[0].style.color = 'white'
    }
}
function nextHijo(){
    const padre = document.querySelector('.padre')
    const hijos = document.querySelectorAll('.hijos')
    let position = 0

    if (padre.style.background === 'blue'){
        alert('no hay hijos sigiente')
    }else{
        hijos.forEach((hijo, i) =>{
            if(hijo.style.background === 'blue'){
                position = i+1
                // hijos[].style.background = 'blue'
                hijo.style.background = 'white'
                hijo.style.color = 'black'
            }
        })

        hijos[position].style.background = 'blue'
        hijos[position].style.color = 'white'
    }
}
function prevHijo(){
    const padre = document.querySelector('.padre')
    const hijos = document.querySelectorAll('.hijos')
    let position = 0

    if (padre.style.background === 'blue'){
        alert('no hay hijos previo')
    }else{
        hijos.forEach((hijo, i) =>{
            if(hijo.style.background === 'blue'){
                position = i-1
                // hijos[].style.background = 'blue'
                hijo.style.background = 'white'
                hijo.style.color = 'black'
            }
        })

        hijos[position].style.background = 'blue'
        hijos[position].style.color = 'white'
    }
}