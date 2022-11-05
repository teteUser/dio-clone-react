//import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './styles';

const Login = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça o seu cadastro.</TitleLogin>
                    <SubtitleLogin>Faça o sei login e make the change._</SubtitleLogin>
                    <form action="">
                        <Input placeholder="Email" leftIcon={<MdEmail />}/>
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />}/>
                        <Button title="Entrar" variant="secondary" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha.</EsqueciText>
                        <CriarText>Criar Conta.</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }