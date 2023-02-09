import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PokemonDetails } from "./pages/PokemonDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Listado de Pokemons</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/pokemons/:pokemonId">
            <PokemonDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
