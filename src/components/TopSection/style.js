import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding:30px 10px 0px 10px;
    
    @media(max-width:560px){
        justify-content:center;
    }
`;

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    position: relative;
    height: 220px;
    width:270px;
    padding: 30px;
    margin-bottom:25px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
    background-color:${props => props.theme.colors.card};
    
    &:hover{
        background-color : ${props => props.theme.colors.hover};
        cursor:pointer;
    }
    &:before{
        content: '';
        position:absolute;
        top:0;
        height:6px;
        width:100%;
        border-top-left-radius:6px;
        border-top-right-radius:6px;
        background:${props => props.border};
    }
`;

export const User = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Icon = styled.img`
  margin-right:5px;
`;

export const Label = styled.label`
    color : ${props => props.theme.colors.label};
    font-weight:700;
    &.followers{
        text-transform:uppercase;
        letter-spacing: 4px;
        font-weight:400;
    }
    &.positive{
        color: hsl(163, 72%, 41%);
    }
    &.negative{
        color: hsl(356, 69%, 56%);
    }
`;

export const FollowersInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`;
export const Followers = styled.p`
    font-size:4rem;
    font-weight:700;
`;

export const GrowInfo = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;