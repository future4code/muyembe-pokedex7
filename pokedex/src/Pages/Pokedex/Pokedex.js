import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header/Header";

const Pokedex = () => {
  const history = useHistory();

  return (
    <>
      <Header titlePage={"Pokedex"} />
    </>
  );
};

export default Pokedex;
