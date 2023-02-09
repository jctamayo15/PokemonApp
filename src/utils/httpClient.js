const API = "https://pokeapi.co/api/v2/";

export function get(path) {
  return fetch(API + path, {
    headers: {
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
