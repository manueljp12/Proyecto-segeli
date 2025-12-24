document.addEventListener('DOMContentLoaded',() =>{
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.querySelector('.sidebar');
    const main = document.getElementById('content');
    

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
   

    function cargarDashboard(){
        main.innerHTML = '';
        main.innerHTML = `
            <h1 class="titlle-bienvenido">Bienvenido a Segeli</h1>
            <p class="resumen-sistema">Resumen general del sistema</p>
            <div class = "cards">
                <div class = "card">
                    <h3>Total Productos</h3>
                    <p>120</p>
                </div>
                <div class="card">
                    <h3>Ventas Hoy</h3>
                    <p>15</p>
                </div>
                <div class="card">
                    <h3>Stock Bajo</h3>
                    <p>3</p>
                </div>

            </div> 
            <h2>Top 5 productos más vendidos</h2>
            <ul>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
                <li>Producto 4</li>
                <li>Producto 5</li>
            </ul>
        `;
    };
    cargarDashboard();

    function cargarProductos(){
        main.innerHTML = '';
        main.innerHTML =`
            <h1 class = "titlle-inventario" >Inventario</h1>
            <div class = "busqueda-modificar">
                <input type = "text" id= "busqueda-productos" placeholder = " Buscar producto....">
            
                <button class="btn-agregar">Agregar producto</button>
            </div>

                <table class = "tabla-productos" id="tabla-productos">
            
                <thead>
                    <tr class="name-fila" id="name-fila">
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr>
                        <td>aguardiente</td>
                        <td>Licores</td>
                        <td>$3.500</td>
                        <td>25</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Aguila</td>
                        <td>Bebidas</td>
                        <td>$3.500</td>
                        <td>25</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>

                    <tr>
                        <td>Cocacola</td>
                        <td>Gaseosa</td>
                        <td>$5.000</td>
                        <td>14</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>                        
                        </td>
                    </tr>
                </tbody>

            </table>
        `;

        const inputBusqueda = document.getElementById('busqueda-productos');
        const filas = document.querySelectorAll('#tabla-productos tbody tr');

        inputBusqueda.addEventListener('input',()=> {
            const texto = inputBusqueda.value.toLowerCase();
            filas.forEach(fila => {
                const nombreProducto = fila.children[0].textContent.toLowerCase();

                if(nombreProducto.includes(texto)){
                    fila.style.display ='';
                }else {
                    fila.style.display ='none';
                }
            })
        })
    };

    const opcionesMenu = document.querySelectorAll('.sidebar li');

    opcionesMenu.forEach(opcion =>{

        opcion.addEventListener('click',() => {

            opcionesMenu.forEach(item => {
                item.classList.remove('active')
            });

            opcion.classList.add('active')

            const seccion = opcion.dataset.seccion;

            if(seccion ==='inicio'){
                cargarDashboard();
            };
            if(seccion ==='productos'){
                cargarProductos();
            };

        });
    });
    
});