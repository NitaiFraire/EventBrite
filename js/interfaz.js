class Interfaz{

    constructor(){

        this.init();

        // obtener resultado de eventos
        this.listado = document.getElementById('resultado-eventos');

    }


    //Método para cuando inicie la app
    init(){

    }

    imprimirCategorias(){

        const listaCategorias = eventBrite.obtenerCategorias();
    }
}