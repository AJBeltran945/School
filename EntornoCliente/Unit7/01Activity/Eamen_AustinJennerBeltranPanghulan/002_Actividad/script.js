function nuevoPedido(numeroPedido){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (Math.random() > 0.1){
                resolve(`📋 Entrando llamada de pedido #${numeroPedido}.`)
            }else{
                reject(`❌ Error al tomar el pedido #${numeroPedido}.`)
            }
        }, Math.random() * 1000 + 500)
    })
}

function prepararIngredientes(numeroPedido){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (Math.random() > 0.05){
                resolve(`🧑‍🍳 Revisando ingredientes del pedido #${numeroPedido}.`)
            }else{
                reject(`⚠️ Error al preparar ingredientes del pedido #${numeroPedido}.`)
            }
        }, Math.random() * 1000 + 1000)
    })
}

function cocinarPizza(numeroPedido){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (Math.random() > 0.05){
                resolve(`🍕 Pizza del pedido #${numeroPedido} en el horno.`)
            }else{
                reject(`⚠️ Error al cocinar la pizza del pedido #${numeroPedido}.`)
            }
        }, Math.random() * 1000 + 2000)
    })
}

function empacarPizza(numeroPedido){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (Math.random() > 0.01){
                resolve(`📦 Empaquetando pedido #${numeroPedido} .`)
            }else{
                reject( `⚠️ Error al empaquetar el pedido #${numeroPedido}.`)
            }
        }, Math.random() * 1000 + 500)
    })
}

function entregarPedido(numeroPedido){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (Math.random() > 0.08){
                resolve(`✅ Cliente del pedido #${numeroPedido} satisfecho.`)
            }else{
                reject( `⚠️ Error al entregar el pedido #${numeroPedido}.`)
            }
        }, Math.random() * 1000 + 3000)
    })
}

for (let i = 1; i <= 3; i++) {
    Promise.all([nuevoPedido(i), prepararIngredientes(i), cocinarPizza(i), empacarPizza(i), entregarPedido(i)])
        .then((results) => {
            for (const result of results) {
                console.log(result)
            }
        })
        .catch((error) => {
            console.error(error)
            console.error("😡 Esto no va bien" )
        })
}


