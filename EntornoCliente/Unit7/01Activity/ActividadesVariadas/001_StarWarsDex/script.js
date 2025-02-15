
// event listener para el boton de buscar y el input de número
document.getElementById("buscar").addEventListener("click", ()=>{
    getData()
})
document.getElementById("inputNumber").addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        getData();
    }
});

// función asincrona que obtiene los datos de la api de star wars
async function getData (){
    const num = document.getElementById("inputNumber").value

    try{
        // obtiene los datos de la api de star wars y los guarda en las variables persona, planeta y nave
        const [persona, planeta, nave] = await Promise.all([
            fetch(`https://swapi.dev/api/people/${num}/`).then(res => res.json()),
            fetch(`https://swapi.dev/api/planets/${num}/`).then(res => res.json()),
            fetch(`https://swapi.dev/api/starships/${num}/`).then(res => res.json())
        ])

        // muestra los datos en el html en los contenedores person, planet y starship
        document.getElementById('person').innerHTML =
            `<h2>Personaje</h2>
                    <p><strong>Nombre:</strong> ${persona.name || 'No disponible'}</p>
                    <p><strong>Altura:</strong> ${persona.height || 'No disponible'} cm</p>
                    <p><strong>Peso:</strong> ${persona.mass || 'No disponible'} kg</p>`;

        document.getElementById('planet').innerHTML =
            `<h2>Planeta</h2>
                    <p><strong>Nombre:</strong> ${planeta.name || 'No disponible'}</p>
                    <p><strong>Clima:</strong> ${planeta.climate || 'No disponible'}</p>
                    <p><strong>Población:</strong> ${planeta.population || 'No disponible'}</p>`;

        document.getElementById('starship').innerHTML =
            `<h2>Nave</h2>
                    <p><strong>Nombre:</strong> ${nave.name || 'No disponible'}</p>
                    <p><strong>Modelo:</strong> ${nave.model || 'No disponible'}</p>
                    <p><strong>Pasajeros:</strong> ${nave.passengers || 'No disponible'}</p>`;
    }catch (e){
        console.log("Error: ", e)
    }
}