const arr = ["fruta", "banana", "zorro", "perro", "sapa", "marsopa", "verano", "fruto", "bananero", "zorra", "furro"]

let buscona = document.getElementById("buscona");
buscona.addEventListener("input", busqueda)

const listado = new Promise(function(resolve) {
    let ara = []
    resolve(ara)
})

function busqueda() {
    listado.then((datos) => {
        if (buscona.value !== "") {
            datos = arr.filter(repo => repo.toLowerCase().startsWith(buscona.value.toLowerCase()))
            document.body.appendChild(encuentra(datos))
        } else {
            document.getElementsByTagName('ul')[0].remove()
        }
    })

}

function encuentra(datos) {
    let list = document.getElementsByTagName('ul')

    if(list.length > 0) {
        list[0].remove()
    }

    list = document.createElement('ul')

    for(let i=0;i<datos.length;i++) {
        let li = document.createElement("li")
        li.textContent = datos[i]
        list.appendChild(li)
    }

    return list
}