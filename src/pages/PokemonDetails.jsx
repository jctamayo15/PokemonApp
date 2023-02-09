import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieImg";
import { get } from "../utils/httpClient";
import styles from "./PokemonDetails.module.css";
import { PokemonSpritesCard } from "../components/PokemonSpritesCard";

export function PokemonDetails() {
  const { pokemonId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("pokemon/" + pokemonId).then((data) => {
      setPokemon(data);
      setIsLoading(false);
    });
  }, [pokemonId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = getMovieImg(pokemon.sprites.other.dream_world.front_default, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.pokemonImage}`}
        src={imageUrl}
        alt={pokemon.name}
      />
      <div className={`${styles.col} ${styles.pokemonDetails}`}>
        <p>
          <strong>#</strong> {pokemonId}
        </p>
        <p>
          <strong>{pokemon.name}</strong>
        </p>
        <p className={styles.firstItem}>
          <strong>Tipo de personaje:</strong> {" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight} kg
        </p>
        <p>
          <strong>Sprites:</strong> 
        </p>
        <ul className={styles.pokemonSpritesGrid}>
          <PokemonSpritesCard  spriteUrl={pokemon.sprites.back_default} />
          <PokemonSpritesCard  spriteUrl={pokemon.sprites.back_shiny} />
          <PokemonSpritesCard  spriteUrl={pokemon.sprites.front_default} />
          <PokemonSpritesCard  spriteUrl={pokemon.sprites.front_shiny} />
        </ul>
        <p>
          <strong>Movimientos:</strong>{" "}
          {pokemon.moves.map((m) => m.move.name).join(", ")}
        </p>
      </div>
    </div>
  );
}
