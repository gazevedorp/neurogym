//@ts-expect-error
import supabase from '../../../../supabaseClient'
import { useForm } from 'react-hook-form';
import {
    Button,
    Container,
    Input,
    InputTitle,
    ContainerButton,
    Form,
    LinkStyled,
    ErrorMessage,
} from './styles';

const Section1 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            // Autenticar o usuário com o Supabase
            const { error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.senha,
            });

            if (error) {
                console.error('Erro ao fazer login:', error.message);
                alert('Erro ao fazer login: ' + error.message);
            } else {
                alert('Login realizado com sucesso!');
                window.location.href = "/dashboard"
            }
        } catch (error) {
            console.error('Erro inesperado:', error);
            alert('Ocorreu um erro inesperado. Por favor, tente novamente.');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputTitle>E-mail</InputTitle>
                <Input
                    type="email"
                    {...register('email', { required: 'E-mail é obrigatório' })}
                />
                {/*@ts-expect-error*/}
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

                <InputTitle>Senha</InputTitle>
                <Input
                    type="password"
                    {...register('senha', { required: 'Senha é obrigatória' })}
                />
                {/*@ts-expect-error*/}
                {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}

                <ContainerButton>
                    <Button type="submit">LOGIN</Button>
                    <LinkStyled href="/cadastrar">Criar Conta</LinkStyled>
                </ContainerButton>
            </Form>
        </Container>
    );
};

export default Section1;