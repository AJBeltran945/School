// añade un evento al boton de inicio
document.getElementById('start').addEventListener('click', () =>{
    getdata()
})

// crea una función asincrona que obtiene los datos del objeto productos
// y obtiene una imagen aleatoria de la api de coffee
async function getdata() {
    try {
        // obtiene el contenedor de los productos
        const contenedor = document.getElementById("productos");
        // obtiene los productos del archivo productos.json
        const productos = await fetch('./productos.json').then(res => res.json());

        // por cada producto en productos hace una petición a la api de coffee
        for (let producto of productos) {
            // imagen por defecto en caso que no se pueda obtener la imagen de la api
            let imagenUrl = "https://miro.medium.com/v2/resize:fit:1400/1*UOP6GMMbb0NGGFLyi7M6NA.png";

            try {
                // obtiene la imagen de la api de coffee
                const response = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent("https://coffee.alexflipnote.dev/random.json?nocache=" + new Date().getTime()));

                // revisamos el response y miramos si hay un error
                if (!response.ok) throw new Error("Failed to fetch image");

                const data = await response.json();

                // si el data.file tiene algo dentro metemos el imagen dentro
                // si no utilizaremos el imagen por defecto
                imagenUrl = data.file || imagenUrl;

            } catch (error) {
                console.log("Error fetching image, using fallback:", error);
            }

            console.log(imagenUrl);
            addProducto(producto, contenedor, imagenUrl);
        }
    } catch (e) {
        console.log('Error:', e);
    }
}

// crea y añade el contenedor, con el imagen y los datos del producto
function addProducto(producto, contenedor, imagenUrl){
    const card = document.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
        <img src="${imagenUrl}" alt="${producto.name}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <strong>${producto.precio}</strong>
    `;

    contenedor.appendChild(card);
}

