import React from 'react'
import Switch from '../Switch'
import { Wrapper,Container,TitleContainer,Title,FollowersCounter,SwitchContainer ,Label} from './styles'

function Header({toggleTheme, theme}) {
    return (
        <Wrapper>
            <Container className ='container'>
                <TitleContainer>
                    <Title>Social Media Dashboard</Title>
                    <FollowersCounter>Total Followers : 23,004</FollowersCounter>
                </TitleContainer>
                <SwitchContainer>
                    <Label>
                      Dark Mode
                    </Label>
                    <Switch onToggle ={() =>{toggleTheme()}} isToggled ={theme === 'dark' ? true : false}/>
                </SwitchContainer>
            </Container>
        </Wrapper>
    )
}

export default Header
