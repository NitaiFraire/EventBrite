class Interfaz{

    constructor(){

        this.init();

        // obtener resultado de eventos
        this.listado = document.getElementById('resultado-eventos');

    }


    //Método para cuando inicie la app
    init(){

        this.imprimirCategorias();
    }

    imprimirCategorias(){

        const listaCategorias = eventBrite.obtenerCategorias()
              .then( categorias => {
                  
                // seleccionar select categorias
                const selectCategoria = document.getElementById('listado-categorias');

                const categoria = categorias.categories;

                // recorremos el arreglo e imprimimos categorias
                categoria.forEach( categoria => {

                    const option = document.createElement('option');
                    option.value = categoria.id;

                    option.appendChild(document.createTextNode(categoria.name_localized));

                    selectCategoria.appendChild(option);
                });
              })

    }
}