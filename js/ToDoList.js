const button = document.getElementById('grab')
button.addEventListener("click", coger)
function coger() {
    crearTabla()
    const toDo = document.getElementById('quehaceres')
    const list = document.getElementById('list')
    const fila = document.createElement('tr')
    const reminder = document.createElement('td')
    const erase = document.createElement('button')
    const modify = document.createElement('button')

    if(toDo.value !== "") {
        reminder.setAttribute("class", "tarea")
        reminder.textContent = toDo.value
        toDo.value = ""

        erase.textContent = "Erase"

        modify.textContent = "Modify"

        fila.appendChild(reminder)

        let colum = document.createElement('td')
        colum.appendChild(erase)
        fila.appendChild(colum)

        colum = document.createElement('td')
        colum.appendChild(modify)
        fila.appendChild(colum)

        list.appendChild(fila)

        const buttons = fila.querySelectorAll('button')
        buttons[0].addEventListener("click", function (){deleteToDo(fila, list)})
        buttons[1].addEventListener("click", function (){modifyToDo(fila)})
    }
}

function crearTabla() {
    let table = document.getElementsByTagName('table')

    if(table.length === 0) {
        table = document.createElement('table')
        table.setAttribute("id", "list")
        document.body.appendChild(table)
    }
}

function deleteToDo(fila, list) {
    fila.outerHTML = ""

    if(list.getElementsByTagName('tr').length ===0){
        list.outerHTML = ""
    }
}

function modifyToDo(fila) {
    const colum = document.createElement('td')
    const text = document.createElement('text')
    const button = document.createElement('button')
}