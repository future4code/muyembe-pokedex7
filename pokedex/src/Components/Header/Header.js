import React from 'react';
import { HeaderContainer } from './Styled'

const Header = (props) => {

    return (
        <HeaderContainer>
            <button onClick = {props.botaoCaminho}>{props.botaoTexto}</button>
        </HeaderContainer>
    )
    
}

export default Header;