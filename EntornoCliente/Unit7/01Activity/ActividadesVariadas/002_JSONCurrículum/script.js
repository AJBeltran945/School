document.getElementById("Show").addEventListener("click", ()=>{
    getData()
})

async function getData(){
    try{
        const infoCuriculum = await fetch('./curriculum.json').then(res => res.json())
        
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                const pictureUrl = data.results[0].picture.large;
                displayUserImage(pictureUrl);
            })
        // const imagenUrl = imagenData.result[0].picture.large

        displayCurriculum(infoCuriculum)
        // displayUserImage(imagenUrl)

    }catch (e){
        console.log("Error: ", e)
    }

}


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


function displayUserImage(pictureUrl) {
    const imageSection = document.getElementById('user-image');
    imageSection.innerHTML = `<img src="${pictureUrl}" alt="Imagen de perfil" />`;
}
