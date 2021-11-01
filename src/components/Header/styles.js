import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:30px 10px 0px 10px;

    @media(max-width:560px){
        flex-direction:column;
        align-items:flex-start;
    }
`;

export const  TitleContainer = styled.div`
    @media(max-width:560px){
        padding-bottom:20px;
        width:100%;
        border-bottom:1px solid ${props => props.theme.colors.label};
        
    }
`;

export const Title = styled.h1`
    padding-bottom:5px;
    color : ${props => props.theme.colors.text};
`;

export const FollowersCounter = styled.p`
    color : ${props => props.theme.colors.label};
    font-weight:700;
`;

export const SwitchContainer = styled.div`
    @media(max-width:560px){
        display:flex;
        width:100%;
        padding-top:20px;
        justify-content:space-between;
        align-items:flex-start;
    }
`;
export const Label = styled.label`
    color : ${props => props.theme.colors.label};
    font-weight:700;
`;