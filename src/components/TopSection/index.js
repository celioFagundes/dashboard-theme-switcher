import React from 'react'

import { Container, Card, Icon, User ,Label, FollowersInfo, Followers, GrowInfo} from './style'
import facebookIcon from '../../images/icon-facebook.svg'
import twitterIcon from '../../images/icon-twitter.svg'
import instagramIcon from '../../images/icon-instagram.svg'
import youtubeIcon from '../../images/icon-youtube.svg'
import upArrow from '../../images/icon-up.svg'
import downArrow from '../../images/icon-down.svg'
function TopSection() {

    const cardsList = [
        {
            id: 1,
            icon: facebookIcon,
            user: '@nathanf',
            number: 1987,
            label: 'Followers',
            grow: '12 Today',
            border : 'hsl(208, 92%, 53%)',
            positive: true,
        },
        {
            id: 2,
            icon: twitterIcon,
            user: '@nathanf',
            number: 1044,
            label: 'Followers',
            grow: '99 Today',
            border : 'hsl(203, 89%, 53%)',
            positive: true,
        },
        {
            id: 3,
            icon: instagramIcon,
            user: '@realnathanf',
            number: '11K',
            label: 'Followers',
            grow: '1099 Today',
            border : 'linear-gradient(to right,#f8be6a,#e14b95)',
            positive: true,
        },
        {
            id: 4,
            icon: youtubeIcon,
            user: 'Nathan F.',
            number: 1044,
            label: 'Subscribers',
            grow: '8239 Today',
            border : 'hsl(348, 97%, 39%)',
            positive: false,
        }
]
    return (
        <Container className = 'container'>
            {cardsList.map(item =>(

                <Card border = {item.border} key = {item.id}>
                    <User>
                        <Icon src = {item.icon}/>
                        <Label>
                            {item.user}
                        </Label>
                    </User>
                    <FollowersInfo>
                        <Followers>{item.number}</Followers>
                        <Label className= 'followers'>{item.label}</Label>
                    </FollowersInfo>
                    <GrowInfo>
                        <Icon src = { item.positive ? upArrow : downArrow }/>
                        <Label className ={item.positive ? 'positive' : 'negative'}>{item.grow}</Label>
                    </GrowInfo>
                </Card>
            ))}
            
        </Container>
    )
}

export default TopSection
