const nodos = document.body

// maneras para pilla el div
console.log(nodos.firstElementChild)
console.log(nodos.children[0])
console.log(nodos.childNodes[1])

//maneras para pillar el ul
console.log(nodos.children[1])

//maneras para pillar el ultimo il
const nodosUl = nodos.children[1]

console.log(nodosUl.firstElementChild)
console.log(nodosUl.lastElementChild)

console.log(nodosUl.children[0])
console.log(nodosUl.children[1])


//actividad tablas

let table = document.body.children[2]

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    setTimeout(() =>{
        row.cells[i].style.backgroundColor = 'red';
    }, 500 *i)

}

for (let i = 0; i < table.rows.length; i++) {
    let lastcell = table.rows.length
    let row = table.rows[lastcell-(i+1)]
    setTimeout(() =>{
        row.cells[i].style.backgroundColor = 'red'
    }, 500*i)

}

// actividades buscar y selector

const res1 = document.getElementById('age-table')
const res2 = document.querySelectorAll('label')
const res3 = res1.querySelector('td')
const res4 = document.querySelector('form[name = "search"]')
const res5 = document.querySelector('input')
const inputs = document.querySelectorAll('input')
const res6 = inputs[inputs.length-1]


const resultados = [res1, res2, res3, res4, res5, res6]

console.log(resultados)