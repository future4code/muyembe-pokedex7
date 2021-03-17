import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import PokedexMain from '../components/PokedexMain/PokedexMain';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';
import PokemonList from '../components/PokemonList/PokemonList';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>

        <Route exact path="/pokedex">
          <PokedexMain />
        </Route>

        <Route exact path="/detalhes">
          <PokemonDetails />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;