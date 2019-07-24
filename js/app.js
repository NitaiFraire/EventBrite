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

    }else{

    }
    
});