// instanciar ambas clases
const eventBrite = new EventBrite();
const ui = new Interfaz();


// listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {

    e.preventDefault();

    // leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    // leer select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
    
    // validar buscador
    if(textoBuscador !== ''){

        eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
                  .then(data => {
                      console.log(data);
                  });

    }else{

        // mostrar mensaje de alerta
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4 text-center');

    }
    
});