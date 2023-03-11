//console.log(document.querySelector("tr"))
console.log(document.getElementsByTagName("tr"))

//Parte 1
let filasTabla = document.querySelectorAll("tr")
filasTabla[1].setAttribute("style","background-color: yellow;")

//Parte 2
filasTabla[2].setAttribute("style", "background-color: #BFF9F6")

//Parte3
let pepes = document.querySelectorAll("p")
pepes.forEach((x) => x.setAttribute("style", "color: brown"))

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
let acomodador = ""
let perchero = ""
for (let i = 0; i<(columnas.length);i++) {
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

//Parte 2
let wrapper;
for (let i = 0; i < filasTabla.length; i++) {
    let ultimos5 = [
        [1, -1, 1, 1, 1],
        [0, 0, 1, 1, -1],
        [1, 0, 1, 1, 0],
        [0, -1, 0, 1, -1],
        [0, 1, 1, 1, -1]
    ]

    if (i) {
        wrapper = document.createElement("td")
        filasTabla[i].appendChild(wrapper)
        columnas = filasTabla[i].getElementsByTagName("td")
        palmares(columnas[columnas.length - 1], ultimos5[i - 1])
    } else {
        wrapper = document.createElement("th")
        wrapper.textContent = "Últimos 5"
        filasTabla[i].appendChild(wrapper)
    }
}

function palmares(columna, ultimos) {
    for (let i=0;i<ultimos.length;i++) {
        switch (ultimos[i]) {
            case 1:
                wrapper =document.createElement("img")
                wrapper.src = "../img/tickverde.jpg"
                columna.appendChild(wrapper)
                break;
            case 0:
                wrapper =document.createElement("img")
                wrapper.src = "../img/circulo.png"
                columna.appendChild(wrapper)
                console.log(wrapper)
                break;
            case -1:
                wrapper =document.createElement("img")
                wrapper.src = "../img/cruzroja.jpg"
                columna.appendChild(wrapper)
                break;
            default:
                console.log("se me fue el dedo")
        }
    }
}

//Parte 3
let primero = filasTabla[1].getAttribute("style")
let segundo = filasTabla[2].getAttribute("style")

for (let i = 1; i<filasTabla.length; i++) {
    filasTabla[i].addEventListener("mouseover",function() {
        filasTabla[i].setAttribute("style", "background: purple; color: white;")
    })

    filasTabla[i].addEventListener("mouseout",function() {
        if(i === 1){
            filasTabla[i].setAttribute("style", primero)
        }else if(i === 2){
            filasTabla[i].setAttribute("style", segundo)
        }else{
            filasTabla[i].setAttribute("style", "background: white; color: purple;")
        }
    })
}

//Parte 4
feliz = document.getElementsByTagName("img")[0]
wrapper = document.createElement("img")

for (let i = 1;i<filasTabla.length;i++) {
    let equipo = filasTabla[i].getElementsByTagName("td")[2]

    equipo.addEventListener("mouseover",function() {
        let escudo = filasTabla[i].getElementsByTagName("td")[0]
        if(i === 1)
            escudo.removeChild(feliz)
        wrapper.setAttribute("src", escudoEquipo(i))
        escudo.appendChild(wrapper)
    })

    equipo.addEventListener("mouseout",function() {
        let escudo = filasTabla[i].getElementsByTagName("td")[0]
        escudo.removeChild(wrapper)
        if(i === 1)
            escudo.appendChild(feliz)
    })
}

function escudoEquipo(x) {
    switch (x) {
        case 1:
            return "../img/barça.png"
        case 2:
            return "../img/RM.png"
        case 3:
            return "../img/AM.png"
        case 4:
            return "../img/RS.png"
        case 5:
            return "../img/betis.jpg"
    }
}

//Parte 5