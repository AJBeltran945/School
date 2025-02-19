function girarRuleta(){
    return  new Promise((resolve, reject) =>{

        const numero = Math.floor(Math.random() * 10 + 1)

        if (numero > 7){
            isGanador = true
            resolve( "¡Has ganado un premio! tu numero era: " + numero)
        }else {
            reject("Sigue intentando, tu numero era: " + numero)
        }

    })
}

document.getElementById("spinRulleta").addEventListener("click", () =>{
    girarRuleta().then(value => {alert(value)})
                 .catch(error => alert(error))
})