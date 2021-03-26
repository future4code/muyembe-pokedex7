export const goToPokemonList = (history) => {
  history.push("/");
};

export const goToPokedex = (history) => {
  history.push("/pokedex");
};

export const goToPokemonDetails = (history, name) => {
  history.push(`/detalhes/${name}`);
};