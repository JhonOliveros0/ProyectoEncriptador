function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");

    let textoEncriptado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        texto = textoEncriptado;
        tituloMensaje.textContent = "Texto Encriptado con éxito";
        parrafo.textContent = "";
    } else {
        alert("Ingresa el texto que deseas encriptar o desencriptar");
    }
}