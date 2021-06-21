import React, { useContext }from "react"
import {
    Card,
    PokeName,
    ButtonWrapper,
    ButtonAdd,
    ButtonDetails,
    PokemonImage,
} from "./Styled";
import GlobalStateContext from "../../global/GlobalStateContext";



const PokeCard = (props) => {
    const { pokemons, pokedex, setPokedex } = useContext(GlobalStateContext);

    // const  adiciona =()=>{
    //     let pokeArray = []
    //     pokemons.forEach((pokemons.name===)=>{
    //         pokeArray.push()
    //     })
    //      setPokedex(pokeArray)
    //     console.log(pokedex)
         
    //    }
    return (

        <Card key={props.name}>
            <PokeName>{props.name}</PokeName>
            <PokemonImage
                alt={props.name}
                src={props.Image}
            />
            <ButtonWrapper>
                <ButtonAdd >{props.TextButtonOne}</ButtonAdd>
                <ButtonDetails
                    onClick={props.GoToPageTwo}>
                    {props.TextButtonTwo}
                </ButtonDetails>
            </ButtonWrapper>
        </Card>



    )



}

export default PokeCard;