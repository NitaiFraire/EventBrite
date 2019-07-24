class EventBrite{

    constructor(){

        this.token_auth = 'LGAUMGKTBJXSL4Y7VTET';
        this.ordenar = 'date';
    }

    // mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){

        const respuestaEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&categories=${categoria}&sort_by=${this.ordenar}&token=${this.token_auth}`);
        const eventos = await respuestaEventos.json();
        return eventos;
    }

    // obtiene categorias en init
    async obtenerCategorias(){

        // consultar categorias
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        // esperar respuesta de categorias
        const categorias = await respuestaCategorias.json();

        // devolver resultado
        return categorias;
    }
}