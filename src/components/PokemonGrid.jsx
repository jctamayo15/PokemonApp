import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../utils/httpClient";
import { PokemonCard } from "./PokemonCard";
import styles from "./PokemonGrid.module.css";
import { Spinner } from "./Spinner";
import Pagination from "./Pagination";

export function PokemonGrid() {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = 'https://pokeapi.co/api/v2/';
  const [currentPageUrl, setCurrentPageUrl] = useState(baseURL+"pokemon");
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const query = useQuery();
  const search = query.get("search");

  const getGlobalPokemons = async () => {
    const searchUrl = search
      ? baseURL+"pokemon/" + search
      :  currentPageUrl;

		const res = await fetch(
			searchUrl
		);
		const data = await res.json();
    setNextPageUrl(data.next)
    setPrevPageUrl(data.previous)
    setIsLoading(false);

    if(!search){
      const promises = data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);
      setPokemons(results)
    }else{
      setPokemons([data])
    }
		
	};

  useEffect(() => {
    setIsLoading(true);
    getGlobalPokemons();
    
  }, [search, currentPageUrl]);

  if (isLoading) {
    return <Spinner />;
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }


  


  return (
    <>
    <ul className={styles.pokemonGrid}>
      {pokemons.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </ul>
    <Pagination
      gotoNextPage={nextPageUrl ? gotoNextPage : null}
      gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>
    
  </>

  );
}
