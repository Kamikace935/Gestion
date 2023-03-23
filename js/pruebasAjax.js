//queremos una lista actualizable al estilo buscador con promise como hace google
const url = 'https://api.github.com/users/Kamikace935/repos'

var buscona = document.getElementById("buscona")
buscona.addEventListener("input", busqueda)

function busqueda() {
    fetch(url).then(response => response.json()).then(repos => {
        const reposList = repos.map(repo => repo.name)
        

    }).catch(err => console.log(err))

}

function crearTabla() {
    let table = document.getElementsByTagName('table')

    if(table.length === 0) {
        table = document.createElement('table')
        table.setAttribute("id", "list")
        document.body.appendChild(table)
    }
}


