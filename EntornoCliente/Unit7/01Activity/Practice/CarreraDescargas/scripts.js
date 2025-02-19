function descargarArchivo(nombre, timepo){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Archivo " + nombre + " descargado")
        }, timepo)
    })
}

const descarga1 = descargarArchivo("Video.mp4", 3000);
const descarga2 = descargarArchivo("Imagen.png", 2000);
const descarga3 = descargarArchivo("Documento.pdf", 4000);

Promise.all([descarga1, descarga2, descarga3])
    .then((mensajes) => {
        console.log("Todas las descargas han finalizado:");
        mensajes.forEach((mensaje) => console.log(mensaje));
    })
    .catch((error) => {
        console.error("Hubo un error en la descarga:", error);
    });