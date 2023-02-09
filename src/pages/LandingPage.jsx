import { PokemonGrid } from "../components/PokemonGrid";
import { Search } from "../components/Search";

export function LandingPage() {
  return (
    <div>
      <Search />
      <PokemonGrid />
    </div>
  );
}
