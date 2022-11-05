import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';
import { UserPicture } from '../Card/styles';
import profilePic from '../../assets/profile.png';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'></Input>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={profilePic}></UserPicture>
                    ) : (
                    <> 
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                         <Button title="Cadastrar"/>
                    </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }