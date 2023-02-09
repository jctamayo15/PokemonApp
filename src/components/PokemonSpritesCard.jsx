import styles from "./PokemonSpritesCard.module.css";

export function PokemonSpritesCard({ spriteUrl }) {
  
  return (
    <li className={styles.pokemonSpriteCard}>
        <img
          width={80}
          height={80}
          src={spriteUrl}
          alt={"Sprite"}
        />
    </li>
  );
}
