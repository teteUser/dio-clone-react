import React from 'react'
import profilePic from '../../assets/profile.png';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Tennison Capra" image={profilePic} percentual={75}/>
                <UserInfo nome="Tennison Capra" image={profilePic} percentual={65}/>
                <UserInfo nome="Tennison Capra" image={profilePic} percentual={45}/>
                <UserInfo nome="Tennison Capra" image={profilePic} percentual={25}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 