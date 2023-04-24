let estuche = true
let ventana
let pintura = "blue"
function inicio(boton) {
    ventana = window.open("./CambioDeColor.html");
    boton.outerHTML="";

    document.addEventListener("contextmenu", event =>{
        event.preventDefault();
    })

    document.addEventListener("mousedown", function(event) {
        switch (event.button) {
            case 0:
                let dot = document.createElement("div");
                dot.className = "dot";
                dot.style.left = (event.pageX - 4) + "px";
                dot.style.top = (event.pageY - 4) + "px";
                dot.style.background = pintura
                if(estuche) {
                    document.body.appendChild(dot);
                    break;
                }else {
                    dot = document.querySelectorAll("div");
                    dot.forEach(borrar => {
                        if (borrar.style.left === ((event.pageX -4)+"px") && borrar.style.top === (event.pageY -4)+"px") {
                            borrar.outerHTML="";
                        }
                    })
                    break;
                }
            case 1:
                estuche = !estuche;
                break;
            case 2:
                ventana.paleta();
                break;
            default:
                console.log("Botón desconocido pulsado");
                break;
        }
    });
}


// Llamada desde la hija
function EnviarColor(color) {
    pintura = color;
}
