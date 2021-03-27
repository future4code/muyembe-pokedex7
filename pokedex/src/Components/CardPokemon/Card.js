import React from "react"
import {
    Card,
    PokeName,
    ButtonWrapper,
    ButtonAdd,
    ButtonDetails,
    PokemonImage,
} from "./Styled";


const PokeCard = (props) => {
    return (

        <Card key={props.name}>
            <PokeName>{props.name}</PokeName>
            <PokemonImage
                alt={props.name}
                src={props.Image}
            />
            <ButtonWrapper>
                <ButtonAdd>{props.TextButtonOne}</ButtonAdd>
                <ButtonDetails
                    onClick={props.GoToPage}>
                    {props.TextButtonTwo}
                </ButtonDetails>
            </ButtonWrapper>
        </Card>



    )



}

export default PokeCard;