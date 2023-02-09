import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";

export function PokemonCard({ pokemon }) {
  
  return (
    <li className={styles.pokemonCard}>
      <Link to={"/pokemons/" + pokemon.id}>
        <img
          width={230}
          height={300}
          className={styles.pokemonImage}
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
        <div className='card-info'>
				<span className={styles.cardInfoText}># {pokemon.id}</span>
				<h3 className={styles.cardInfoText}>{pokemon.name}</h3>
			
			</div>
      </Link>
    </li>
  );
}
