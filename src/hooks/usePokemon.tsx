import { useEffect, useState } from "react";

interface Props {
  id: number;
}

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

const usePokemon = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [isLoading, setLoading] = useState<boolean>(true);

  const getPokemonById = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      setPokemon({
        id: data.id,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setPokemon(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonById(id).then();
  }, [id]);

  return {
    //props
    pokemon,
    isLoading,
    //computed
    formattedId: id.toString().padStart(3, "0"),
  };
};

export default usePokemon;
