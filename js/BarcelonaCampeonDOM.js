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

//Parte 4, 5 y 6
//4
feliz = document.getElementsByTagName("img")[0]
wrapper = document.createElement("img")
//5
let cont = [
    {equipo: "",visita: 0},
    {equipo: "",visita: 0},
    {equipo: "",visita: 0},
    {equipo: "",visita: 0},
    {equipo: "",visita: 0}
]

for (let i = 1;i<filasTabla.length;i++) {
    let equipo = filasTabla[i].getElementsByTagName("td")[2]
    //5
    cont[i-1].equipo = equipo.textContent

    equipo.addEventListener("mouseover",function() {
        let escudo = filasTabla[i].getElementsByTagName("td")[0]
        if(i === 1)
            escudo.removeChild(feliz)
        wrapper.setAttribute("src", escudoEquipo(i,cont))
        escudo.appendChild(wrapper)
    })

    equipo.addEventListener("mouseout",function() {
        //4
        let escudo = filasTabla[i].getElementsByTagName("td")[0]
        escudo.removeChild(wrapper)
        if(i === 1)
            escudo.appendChild(feliz)
        //6
        if(document.getElementById("lista") != null)
            document.body.removeChild(document.getElementById("lista"))

        document.body.appendChild(popularidad(cont))
    })
}
//6
document.body.appendChild(popularidad(cont))

//4-5-6
function escudoEquipo(x,cont) {
    let equipo
    switch (x) {
        case 1:
            equipo = filasTabla[1].getElementsByTagName("td")[2]
            cont.map((cont) => {
                if(cont.equipo === equipo.textContent)
                    cont.visita++
            })
            return "../img/barça.png"
        case 2:
            equipo = filasTabla[2].getElementsByTagName("td")[2]
            cont.map((cont) => {
                if(cont.equipo === equipo.textContent)
                    cont.visita++
            })
            return "../img/RM.png"
        case 3:
            equipo = filasTabla[3].getElementsByTagName("td")[2]
            cont.map((cont) => {
                if(cont.equipo === equipo.textContent)
                    cont.visita++
            })
            return "../img/AM.png"
        case 4:
            equipo = filasTabla[4].getElementsByTagName("td")[2]
            cont.map((cont) => {
                if(cont.equipo === equipo.textContent)
                    cont.visita++
            })
            return "../img/RS.png"
        case 5:
            equipo = filasTabla[5].getElementsByTagName("td")[2]
            cont.map((cont) => {
                if(cont.equipo === equipo.textContent)
                    cont.visita++
            })
            return "../img/betis.jpg"
    }
}

//6
function popularidad(x){
    x.sort((a, b) => b.visita - a.visita)
    let cuerpo = document.createElement("div")
    cuerpo.setAttribute("id", "lista")
    x.forEach((y) =>{
        let contenedor = document.createElement("p")
        contenedor.textContent = `${y.equipo}: ${y.visita}`
        cuerpo.appendChild(contenedor)
    })
    return cuerpo
}



