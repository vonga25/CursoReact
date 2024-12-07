const getPokemon = async (name) => {
    try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok){  throw new Error ("Pokemon no encontrado");
        }
        const data = await response.json(); //Convertir la respuesta a JSON
        console.log(`Nombre: ${data.name}, Tipo: ${data.types[0].type.name}`);
    } catch (error){
        console.error("Error:", error.message);
    }
};

getPokemon("pikachu");