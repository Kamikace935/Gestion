const button = document.getElementById('grab')
button.addEventListener("click", coger)
function coger() {
    const toDo = document.getElementById('quehaceres')

    if(toDo.value !== "") {
        crearTabla()
        const fila = document.createElement('tr')
        const reminder = document.createElement('td')
        const erase = document.createElement('button')
        const modify = document.createElement('button')
        const list = document.getElementById('list')

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
    let texto = fila.getElementsByTagName('td')[0]
    let tarea = prompt("¿Cual es la nueva tarea?")

    if(tarea.length > 0) {
        texto.textContent = tarea
    }
}