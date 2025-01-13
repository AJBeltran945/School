const formContainer = document.getElementById("form-container");

function createInput(type) {
    const name = prompt(`¿Cuál será el atributo "name" del input ${type}?`);
    if (name) {
        const input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.id = name;
        input.placeholder = name;
        formContainer.appendChild(input);
        formContainer.appendChild(document.createElement("br"));
    }
}

function createTextarea() {
    const name = prompt("¿Cuál será el atributo 'name' del textarea?");
    if (name) {
        const textarea = document.createElement("textarea");
        textarea.name = name;
        textarea.cols = 40;
        textarea.rows = 5;
        textarea.placeholder = `${name}`;
        formContainer.appendChild(textarea);
        formContainer.appendChild(document.createElement("br"));
    }
}

function createLabel() {
    const forInput = prompt("¿A qué input irá referido el label? (atributo 'for')");
    const text = prompt("¿Cuál será el texto del label?");
    if (forInput && text) {
        const label = document.createElement("label");
        label.setAttribute("for", forInput);
        label.textContent = text;

        const targetInput = formContainer.querySelector(`[name="${forInput}"]`);

        if (targetInput) {
            formContainer.insertBefore(label, targetInput);
            formContainer.insertBefore(document.createElement("br"), targetInput); // Agregar un salto de línea
        } else {
            alert(`No se encontró un input con el atributo 'name' igual a "${forInput}".`);
        }
    }
}


function createImage() {
    const src = prompt("¿Cuál es la ruta de la imagen (atributo 'src')?");
    if (src) {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagen generada dinámicamente";
        img.style.maxWidth = "200px";
        formContainer.appendChild(img);
        formContainer.appendChild(document.createElement("br"));
    }
}

function createCheckbox() {
    const name = prompt("¿Cuál será el atributo 'name' del checkbox?");
    const value = prompt("¿Cuál será el atributo 'value' del checkbox?");
    if (name && value) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = name;
        checkbox.value = value;
        formContainer.appendChild(checkbox);
        formContainer.appendChild(document.createTextNode(` ${value}`));
        formContainer.appendChild(document.createElement("br"));
    }
}

function createRadio() {
    const name = prompt("¿Cuál será el atributo 'name' del radio?");
    const value = prompt("¿Cuál será el atributo 'value' del radio?");
    if (name && value) {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = name;
        radio.value = value;
        formContainer.appendChild(radio);
        formContainer.appendChild(document.createTextNode(` ${value}`));
        formContainer.appendChild(document.createElement("br"));
    }
}

function createButton() {
    const name = prompt("¿Cuál será el atributo 'name' del botón?");
    const value = prompt("¿Cuál será el atributo 'value' del botón?");
    if (name && value) {
        const button = document.createElement("button");
        button.type = "submit";
        button.name = name;
        button.textContent = value;
        formContainer.appendChild(button);
        formContainer.appendChild(document.createElement("br"));
    }
}