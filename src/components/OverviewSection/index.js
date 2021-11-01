import React from 'react'
import { CardsContainer, Container, Card, Quantity, Grow, Icon, Label, Media, Numbers, Title } from './style'
import facebookIcon from '../../images/icon-facebook.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import instagramIcon from '../../images/icon-instagram.svg'
import youtubeIcon from '../../images/icon-youtube.svg'
import upArrow from '../../images/icon-up.svg'
import downArrow from '../../images/icon-down.svg'

function OverviewSection() {

    const cardsList = [
        {
            id: 1,
            icon: facebookIcon,
            number: 87,
            label: 'Page Views',
            grow: '3%',
            positive: true,
        },
        {
            id: 2,
            icon: facebookIcon,
            number: 52,
            label: 'Likes',
            grow: '2%',
            positive: false,
        },
        {
            id: 3,
            icon: instagramIcon,
            number: 5462,
            label: 'Likes',
            grow: '2257%',
            positive: true,
        },
        {
            id: 4,
            icon: instagramIcon,
            number: '52k',
            label: 'Profile Views',
            grow: '1375%',
            positive: true,
        },
        {
            id: 5,
            icon: twitterIcon,
            number: 117,
            label: 'Retweets',
            grow: '303%',
            positive: true,
        },
        {
            id: 6,
            icon: twitterIcon,
            number: 507,
            label: 'Likes',
            grow: '553%',
            positive: true,
        },
        {
            id: 7,
            icon: youtubeIcon,
            number: 107,
            label: 'Likes',
            grow: '19%',
            positive: false,
        },
        {
            id: 8,
            icon: youtubeIcon,
            number: 1407,
            label: 'Total Views',
            grow: '12%',
            positive: false,
        },
    ]
    return (
        <Container className ='container'>
            <Title>Overview - Today</Title>
            <CardsContainer>
                {cardsList.map(item =>(
                    <Card key = {item.id}>
                    <Media>
                        <Label>
                            {item.label}
                        </Label>
                        <Icon src = {item.icon}/>
                    </Media>
                    <Numbers>
                        <Quantity>{item.number}</Quantity>
                        <Grow className = {item.positive ? 'positive' : 'negative'}><Icon src = {item.positive ? upArrow : downArrow}/>{item.grow}</Grow>
                    </Numbers>
                </Card>
                ))}
                
            </CardsContainer>
        </Container>
    )
}

export default OverviewSection
