document.getElementById("buscar").addEventListener("click", ()=>{
    getData()
})
document.getElementById("inputNumber").addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        getData();
    }
});

async function getData (){
    const num = document.getElementById("inputNumber").value

    try{
        const [persona, planeta, nave] = await Promise.all([
            fetch(`https://swapi.dev/api/people/${num}/`).then(res => res.json()),
            fetch(`https://swapi.dev/api/planets/${num}/`).then(res => res.json()),
            fetch(`https://swapi.dev/api/starships/${num}/`).then(res => res.json())
        ])

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