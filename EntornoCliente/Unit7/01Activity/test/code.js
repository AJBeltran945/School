const coches = [
    { marca: "Toyota", modelo: "Corolla" },
    { marca: "Honda", modelo: "Civic" },
    { marca: "Ford", modelo: "Mustang" },
    { marca: "Chevrolet", modelo: "Camaro" },
    { marca: "BMW", modelo: "M3" },
    { marca: "Mercedes-Benz", modelo: "C-Class" },
    { marca: "Audi", modelo: "A4" },
    { marca: "Volkswagen", modelo: "Golf" },
    { marca: "Nissan", modelo: "GT-R" },
    { marca: "Porsche", modelo: "911" }
];

// callback

document.getElementById('callBack').addEventListener("click", () =>{
    sayTheName(coches[0].marca, anotherName)
})

function sayTheName(name, callback){
    console.log(name)
    callback()
}

function anotherName(){
    setTimeout(() => {
        console.log(coches[0].modelo)
    }, 2000)

}

// Promises

document.getElementById('promises').addEventListener("click", () =>{
    sayTheModel(coches[i].marca)
        .then(() => sayTheBrand())
        .catch(error => console.error(error))
})

function sayTheModel(name){
    return new Promise((resolve, reject) =>{
        if (name){
            console.log(name)
            resolve()
        }else {
            reject('Name not found')
        }
    })
}

function sayTheBrand(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(coches[0].modelo)
            resolve()
        }, 2000)
    })


}