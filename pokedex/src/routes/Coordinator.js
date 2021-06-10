export const goToPokemonList = (history) => {
  history.push("/");
};

export const goToPokedex = (history, name) => {
  history.push(`/pokedex/${name}`);
};

export const goToPokemonDetails = (history, name) => {
  history.push(`/detalhes/${name}`);
};