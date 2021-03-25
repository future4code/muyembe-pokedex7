import React from 'react';
import { HeaderContainer } from './Styled'

const Header = (props) => {

    return (
        <HeaderContainer>
            <button onClick = {props.botaoCaminho}>{props.botaoTexto}</button>
            <h1>LISTA DE POKÉMONS!</h1>
        </HeaderContainer>
    )
    
}

export default Header;