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