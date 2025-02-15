// un evento al boton de inicio para llamar a la función asincrona
document.getElementById("Show").addEventListener("click", ()=>{
    getData()
})

// una función asincrona que obtiene los datos del archivo curriculum.json
// y obtiene una imagen aleatoria de la api de randomuser
async function getData(){
    try{
        //obtiene los datos del archivo curriculum.json
        const infoCuriculum = await fetch('./curriculum.json').then(res => res.json())

        //obtiene la imagen de la api de randomuser
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                const pictureUrl = data.results[0].picture.large;
                // llama a la función displayUserImage con la imagen del usuario
                displayUserImage(pictureUrl);
            })

        // llama a la función displayCurriculum con los datos del curriculum
        displayCurriculum(infoCuriculum)

    }catch (e){
        console.log("Error: ", e)
    }

}

// crea y añade el contenedor, con datos del curriculum
function displayCurriculum(data) {
    const curriculumSection = document.getElementById('curriculum');

    curriculumSection.innerHTML = `
    <h1>${data.name}</h1>
    <h2>${data.title}</h2>
    <p>Email: ${data.email}</p>
    <p>Teléfono: ${data.phone}</p>
    <p>Dirección: ${data.address.street}, ${data.address.city}, ${data.address.state}, ${data.address.country}</p>
    <h3>Habilidades:</h3>
    <ul>
      ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    <h3>Experiencia:</h3>
    <ul>
      ${data.experience.map(exp => `
        <li>
          <strong>${exp.company}</strong>: ${exp.role} (${exp.start_date} - ${exp.end_date})
        </li>
      `).join('')}
    </ul>
  `;
}

// crea y añade el contenedor, con el imagen del usuario
function displayUserImage(pictureUrl) {
    const imageSection = document.getElementById('user-image');
    imageSection.innerHTML = `<img src="${pictureUrl}" alt="Imagen de perfil" />`;
}
