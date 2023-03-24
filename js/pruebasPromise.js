//queremos una lista actualizable al estilo buscador con promise como hace google
const url = 'https://api.github.com/users/Kamikace935/repos'

let buscona = document.getElementById("buscona");
buscona.addEventListener("input", busqueda)

function busqueda() {
    fetch(url).then(response => response.json()).then(repos => {
        const reposList = repos.map(repo => repo.name)

        let valor = new RegExp(buscona.value)

        if (buscona.value !== "") {
            document.body.appendChild(encuentro(reposList
                .filter(
                    repo => repo.startsWith(buscona.value.toLowerCase()) || repo.startsWith(buscona.value.toUpperCase())
                )
            ))
        } else {
            document.getElementsByTagName('ul')[0].remove()
        }

    }).catch(err => console.log(err))

}

function encuentro(datos) {
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


