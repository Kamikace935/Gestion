//console.log(document.querySelector("tr"))
console.log(document.getElementsByTagName("td"))

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
let segundones = document.getElementsByTagName("span")
let huecos = document.getElementsByTagName("td")

huecos[6].textContent = segundones[0].textContent
huecos[7].textContent = segundones[1].textContent

//Parte 6
pepes[1].outerHTML = ""

//DOM-2
//Parte 1
huecos[9].textContent = "3"
huecos[13].textContent = "4"
huecos[17].textContent = "5"

//Parte 2



