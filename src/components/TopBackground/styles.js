import styled from 'styled-components';

export const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index:-1000;
    height: 30vh;
    width:100%;
    background-color: ${props => props.theme.colors.topBackground}

`;