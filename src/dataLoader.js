const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const fetchData = async () =>
{
    let pokemonList = await P.getPokemonsList();
    pokemonList = pokemonList.results.slice(0,100);
	let pokemonDetails = await Promise.all(
		pokemonList.map(async (pok) => await P.getPokemon(pok.name))
	);
    return [pokemonList,pokemonDetails];
}

export default {
    fetchData
}


