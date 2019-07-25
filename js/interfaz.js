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


    // recibe respuesta de eventos y muestra resultados
    mostrarEventos(eventos){

        // leeer eventos y agregarlo
        const listaEventos = eventos.events;

        console.log(listaEventos);
        // recorrer eventos y crear template

        this.limpiarResultados();

        listaEventos.forEach( evento  =>{

            this.listado.innerHTML += `
            
                <div class="col-md-4 mb-4">
                    <div class="card">
                            <img class="img-fluid mb-2" src="${evento.logo !==  null ? evento.logo.url : ''}">                            
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class="lead text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0, 200)}...</p>
                                <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha y Hora: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // limpia resultados previos
    limpiarResultados(){

        this.listado.innerHTML = '';
    }

    mostrarMensaje(mensaje, clases){

        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);

        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    limpiarMensaje(){

        const alert =  document.querySelector('.alert');

        if(alert){

            alert.remove();
        }
    }
}