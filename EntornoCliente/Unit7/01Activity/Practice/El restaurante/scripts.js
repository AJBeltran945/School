function tomarOrden(pedido, callback){
    setTimeout(() =>{
        alert("Tu pedido: "+ pedido +" ha sido entregado")
        callback()
    }, 2000)
}

function cocinarComida( callback){
    setTimeout(() =>{
        alert("Tu pedido se esta cocinando")
        callback()
    }, 3000)
}

function servirComida(callback){
    setTimeout(() =>{
        alert("Tu pedido se ha servido")
        callback()
    },1000)
}

document.getElementById("pedirPedido").addEventListener("click", () =>{
    const pedido = document.getElementById("inputPedido").value

    tomarOrden(pedido, () =>{
        cocinarComida(() =>{
            servirComida(() => {
                setTimeout(() =>{
                    alert("Gracias por su visita")
                }, 3000)
            })
        })
    })
})