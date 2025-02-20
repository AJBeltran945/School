// no me funciona para cuando le clicas a un usuario
// enseña todo el post y comentarios
// por eso lo he puesto todo en on load  para
// poder enseñar que funciona el fetch

window.onload = function () {
    getDataUser()
    getUserPost(1)
    getPostComment(1)
}

async function getDataUser() {
    try{
        const  contenedor = document.getElementById("usuarios")

        const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json());



        for (let usuario of usuarios){
            addUser(usuario, contenedor)
        }


    }catch (e){
        console.error(e)
    }
}

async function getUserPost(idUsuario) {
    try{
        const  contenedor = document.getElementById("publicacion")

        const publicaciones = await fetch(`https://jsonplaceholder.typicode.com/users/${idUsuario}/posts`)
            .then(res => res.json());

        for (let publicacion of publicaciones){
            addPost(publicacion, contenedor)
        }
    }catch (e){
        console.error(e)
    }
}

async function getPostComment(idUsuario) {
    try{
        const  contenedor = document.getElementById("publicacion")

        const comentarios = await fetch(`https://jsonplaceholder.typicode.com/posts/${idUsuario}/comments`)
            .then(res => res.json());

        for (let comentario of comentarios){
            addComment(comentario, contenedor)
        }
    }catch (e){
        console.error(e)
    }
}

function addUser(usuario, contenedor){
    const card = document.createElement("div");
    card.classList.add("usuario");
    card.setAttribute("id", "usuario-"+`${usuario.id}`)
    card.innerHTML = `
        <h3>${usuario.name}</h3>
        <p>${usuario.email}</p>
        <p>${usuario.address.city}</p>
        <p>${usuario.company.name}</p>
    `;

    contenedor.appendChild(card);
}

function addPost(publicacion, contenedor){
    const card = document.createElement("div");
    card.classList.add("publicacion");
    card.setAttribute("id", "publicacion-"+`${publicacion.id}`)
    card.innerHTML = `
        <p>${publicacion.id}. ${publicacion.title}</p>
    `;

    contenedor.appendChild(card);
}

function addComment(comentario, contenedor){
    const card = document.createElement("div");
    card.classList.add("comentario");
    card.setAttribute("id", "comentario-"+`${comentario.id}`)
    card.innerHTML = `
        <h3>${comentario.email}</h3>
        <p>${comentario.name}</p>
    `;

    contenedor.appendChild(card);
}