interface Pokemon {
  name: string;
  url: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface PokemonData {
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface PokemonItemProps extends Pokemon {
  isFavorite: boolean;
  toggleFavorite: (name: string) => void;
}

interface CustomePokemon {
  id?: number;
  name: string;
  type: string;
  abilities: string[];
  evolutions: string;
}
