import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Navbar from "../pages/NavBar/NavBar";
import { sendPokemonFavorites } from "../shares/apiService";

const HomePage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loadNextPokemons, setLoadNextPokemons] = useState<number>(20);
  const [favoritesArray, setFavoritesArray] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${loadNextPokemons}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setFilteredPokemonList(data.results);
        setLoading(false);
      });
  }, [loadNextPokemons]);

  const sendFavorites = async () => {
    try {
      console.log("Favorite saved:", favoritesArray);
      const response = await sendPokemonFavorites(favoritesArray);
      console.log("Favorite saved:", response);
    } catch (error) {
      console.error("Error saving favorite:", error);
    }
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setFilter(value);
    setFilteredPokemonList(
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value)
      )
    );
  };

  const toggleFavorite = async (name: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(name)) {
        newFavorites.delete(name);
      } else {
        newFavorites.add(name);
      }
      // Actualiza el array de favoritos
      const updatedFavoritesArray = Array.from(newFavorites);
      setFavoritesArray(updatedFavoritesArray);
      return newFavorites;
    });
  };
  const filterFavorites = () => {
    setFilteredPokemonList(
      pokemonList.filter((pokemon) => favorites.has(pokemon.name))
    );
  };

  const favoriteFilter = () => {
    filterFavorites();
  };

  useEffect(() => {
    sendFavorites();
  }, [favoritesArray]);
  return (
    <div className="body-homepage">
      <div className="HomePage">
        <Navbar />
        <div>
          <h1>Pokémon List</h1>
          <p>Search your pokemons and watch their abilities and types</p>
          <input
            type="text"
            placeholder="Filter Pokémon"
            value={filter}
            onChange={handleFilterChange}
          />

          {favorites.size != 0 ? (
            <>
              <h3>See your favorites pokemon</h3>
              <button
                className="pokemon-item favorite"
                onClick={favoriteFilter}
              >
                {" "}
                Click here
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="pokemon-list">
              {filteredPokemonList.map((pokemon, index) => (
                <PokemonItem
                  key={index}
                  name={pokemon.name}
                  url={pokemon.url}
                  isFavorite={favorites.has(pokemon.name)}
                  toggleFavorite={toggleFavorite}
                  types={[]}
                  abilities={[]}
                />
              ))}
            </div>
            <div className="show-more-buttons">
              <button
                onClick={() =>
                  setLoadNextPokemons((prevCount) => prevCount + 100)
                }
              >
                Show more
              </button>
              <button onClick={() => setLoadNextPokemons(1302)}>
                Show all
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const PokemonItem: React.FC<PokemonItemProps> = ({
  name,
  url,
  isFavorite,
  toggleFavorite,
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [url]);

  return (
    <div className={`pokemon-item ${isFavorite ? "favorite" : ""}`}>
      <h2>{name}</h2>
      {pokemonData && (
        <>
          <img src={pokemonData.sprites.front_default} alt={name} />
          <p>
            Types: {pokemonData.types.map((type) => type.type.name).join(", ")}
          </p>
          <p>
            Abilities:{" "}
            {pokemonData.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
        </>
      )}
      <button onClick={() => toggleFavorite(name)}>
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default HomePage;
