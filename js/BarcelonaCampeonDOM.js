//console.log(document.querySelector("tr"))
//console.log(document.getElementsByTagName("td"))

//Parte 1
let filasTabla = document.querySelectorAll("tr")
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
let columnas = filasTabla[2].getElementsByTagName("td")

columnas[2].textContent = segundones[0].textContent
columnas[3].textContent = segundones[1].textContent

//Parte 6
pepes[1].outerHTML = ""

//DOM-2
columnas = filasTabla[0].getElementsByTagName("th")
for (let i = 0; i<(columnas.length);i++) {
    var acomodador
    var perchero
    if (i){
        acomodador = perchero
        perchero = columnas[i].textContent
        columnas[i].textContent = acomodador

    }else {
        perchero = columnas[i].textContent
        columnas[i].textContent = "Escudo"
    }
}

//Parte 1
for (let i = 1; i < filasTabla.length; i++) {
    columnas = filasTabla[i].getElementsByTagName("td")
    columnas[1].textContent = `${i}`
}
/*let wrapper = document.getElementsByTagName("img")[0]
columnas = filasTabla[1].getElementsByTagName("td")
columnas[1].appendChild(wrapper)*/

//Parte 2
let ultimos5 = [
    [1,-1,1,1,1],
    [0,0,1,1,-1],
    [1,0,1,1,0],
    [0,-1,0,1,-1],
    [0,1,1,1,-1]
]

for (let i = 0; i < filasTabla.length; i++) {
    columnas = filasTabla[i].getElementsByTagName("td")
    if (i) {

    }else {

        //filasTabla[i].appendChild()
    }


}


