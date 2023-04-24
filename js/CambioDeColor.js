const $btnEnviar = document.getElementById("btnEnviar");
const $mensaje = document.getElementById("mensaje");
let $colores = []

$btnEnviar.addEventListener("click", () => {
    const mensaje = $mensaje.value;
    if (!mensaje) {
        return alert("Escribe un color");
    }else {
        $colores.push(mensaje);
        $mensaje.value = "";
    }
});

// Definición de función desde la que nos llama el padre
window.paleta = function () {
    if ($colores.length !== 0) {
        window.opener.EnviarColor($colores.shift());
    }
}