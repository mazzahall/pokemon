import pokemonJSON from "../../data/pokemon.json";
import { useState } from "react";
import PokemonItem from "../PokemonItem/PokemonItem";
import  "./pokemonList.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (e) => {
    const search = pokemons.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterPokemons(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />
      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
      </div>
    </>
  );
}

export default PokemonList;
