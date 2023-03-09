//console.log(document.querySelector("tr"))
console.log(document.getElementsByTagName("div"))

//Parte 1
let filasTabla = document.getElementsByTagName("tr")
filasTabla[1].setAttribute("style","background-color: yellow;")

//Parte 2
filasTabla[2].setAttribute("style", "background-color: #BFF9F6")

//Parte3
let pepes = document.querySelectorAll("p")
pepes.forEach(x => x.setAttribute("style", "color: brown"))

//Parte 4
let contenedores = document.getElementsByTagName("div")
contenedores[1].setAttribute("style", "border-color: black;" +
                                                        "border-width: 2px;")

//Parte 5
