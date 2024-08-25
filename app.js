//Funcion para encriptar el texto ingresado
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("inicio");
    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    // Condicional que valida que el texto no este vacio o no tenga caracteres.
    if (texto.length != 0) {
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        parrafo.textContent = "";
        imagen.src = "img/Encriptado.jpg";
    } else {
        imagen.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el Texto que deseas encriptar o desencriptar";
        alert("Ingresa el texto que deseas encriptar o desencriptar");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("inicio");

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoDesencriptado;
        titulo.textContent = "Texto Desencriptado";
        parrafo.textContent = "";
        imagen.src = "img/Desencriptado.jpg";
    } else {
        imagen.src = "./img/muñeco.png";
        titulo.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el Texto que deseas encriptar o desencriptar";
        alert("Ingresa el texto que deseas encriptar o desencriptar");
    }
}