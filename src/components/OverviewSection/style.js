import styled from 'styled-components';

export const Container = styled.div`
    padding:10px;
`;

export const Title = styled.h1`
  
`;

export const CardsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    
    @media(max-width:560px){
        justify-content:center;
    }
`;

export const Card = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    height: 135px;
    width:270px;
    padding: 20px 30px;
    margin-top:20px;
    border-radius:6px;
    background-color: ${props => props.theme.colors.card};

    &:hover{
        background-color: ${props => props.theme.colors.hover};
        cursor:pointer;
    }
`;

export const Media = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const Label = styled.label`
    color: ${props => props.theme.colors.label};
    font-weight:700;
`;
export const Icon = styled.img`
  
`;
export const Numbers = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
`;

export const Quantity = styled.p`
    font-size:2rem;
    font-weight:700;
`;

export const Grow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:700;

    &.positive{
        color: hsl(163, 72%, 41%);
    }
    &.negative{
        color: hsl(356, 69%, 56%);
    }
`;