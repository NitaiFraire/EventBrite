class EventBrite{

    constructor(){

        this.token_auth = 'LGAUMGKTBJXSL4Y7VTET';
        this.ordenar = 'date';
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