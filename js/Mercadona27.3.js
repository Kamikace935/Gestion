function guardarProducto() {

    const codigo = document.getElementById("codigo").value;
    const descripcion = document.getElementById("descripcion").value;
    const importe = document.getElementById("importe").value;
    const stock = document.getElementById("stock").value;

    // valida que se hayan ingresado los campos obligatorios
    if (!codigo || !descripcion || !importe || !stock) {
        alert("Por favor, complete todos los campos");
        return;
    }

    // crea un objeto con los datos del producto
    const producto = {
        codigo,
        descripcion,
        importe,
        stock
    };

    // agrega el producto a la lista de productos
    const listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
    listaProductos.push(producto);
    localStorage.setItem("productos", JSON.stringify(listaProductos));

    // limpia los campos del formulario
    document.getElementById("codigo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("importe").value = "";
    document.getElementById("stock").value = "";
}

const buscador = document.getElementById("buscador")
buscador.addEventListener("input", buscarProducto)

function cargarProductos() {
    return new Promise((resolve) => {
        const listaProductos = JSON.parse(localStorage.getItem("productos")) || [];
        resolve(listaProductos);
    });
}

function buscarProducto() {
    const campoBusqueda = document.getElementById("campo-busqueda").value;
    const valorBusqueda = document.getElementById("buscador").value;

    cargarProductos()
        .then(productos => {
            if(valorBusqueda.length > 0){
                const resultados = productos.filter(producto => {
                    const valor = producto[campoBusqueda];
                    return valor.toLowerCase().startsWith(valorBusqueda.toLowerCase());
                });
                actualizarTablaProductos(resultados);
            } else {
                actualizarTablaProductos([])
            }
        })
        .catch(error => {
            console.error("Error al cargar los productos:", error);
        });
}

function actualizarTablaProductos(productos) {
    const tablaResultados = document.getElementById("resultados-busqueda");
    console.log(tablaResultados)
    tablaResultados.innerHTML = ""; // limpia la tabla antes de actualizarla

    productos.forEach(producto => {
        const fila = document.createElement("tr");

        const codigo = document.createElement("td");
        codigo.textContent = producto.codigo;
        fila.appendChild(codigo);

        const descripcion = document.createElement("td");
        descripcion.textContent = producto.descripcion;
        fila.appendChild(descripcion);

        const importe = document.createElement("td");
        importe.textContent = producto.importe;
        fila.appendChild(importe);

        const stock = document.createElement("td");
        stock.textContent = producto.stock;
        fila.appendChild(stock);

        const cantidad = document.createElement("input");
        cantidad.setAttribute("type", "number");
        cantidad.id = "cantidad"
        fila.appendChild(cantidad);

        const anadir = document.createElement("button");
        anadir.textContent = "Añadir al Carro"
        anadir.addEventListener("click", function(){anadirCarrito(cantidad.value)})
        fila.appendChild(anadir)

        tablaResultados.appendChild(fila);
    });
}

function anadirCarrito(cantidad) {

}