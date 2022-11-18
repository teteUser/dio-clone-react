import { useNavigate } from 'react-router-dom';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { IFormData } from './types';
import { Container, Title, Column, FazerLoginText, JaTenhoText, Row, SubtitleLogin, TitleLogin, Wrapper, Terms } from './styles';

const schema = yup.object({
    nome: yup.string().required('Campo obrigatório!'),
    email: yup.string().email('Email não é válido').required('Campo obrigatório!'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório!'),
}).required();


const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/cadastro');
            }else{
                alert('Dados inválidos!');
            }
        }catch{
            alert('Houve um erro, tente novamente!');
        }
    };


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
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome" errorMessage={errors?.email?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<MdEmail />} />
                        <Input name="password" errorMessage={errors?.email?.message} control={control} placeholder="Password" type="password" leftIcon={<MdLock />} />
                        <br />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Terms>
                        Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </Terms>
                    <Row>
                        <JaTenhoText>Já tenho conta.</JaTenhoText>
                        <FazerLoginText>Fazer login.</FazerLoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }