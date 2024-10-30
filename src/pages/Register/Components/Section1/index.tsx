
import { useForm } from 'react-hook-form';
//@ts-expect-error
import supabase from '../../../../supabaseClient'
import {
  Button,
  Container,
  Input,
  InputTitle,
  ContainerButton,
  Form,
  LinkStyled,
  Column,
  Row,
  ErrorMessage,
} from './styles';

const Section1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Verificar se as senhas correspondem
    if (data.senha !== data.confirmarSenha) {
      alert('As senhas não correspondem.');
      return;
    }

    // Após o signUp, aguarde a sessão ser estabelecida
    const { error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.senha,
    });

    if (authError) {
      console.error('Erro ao registrar:', authError.message);
      alert('Erro ao registrar: ' + authError.message);
      return;
    }

    // Aguarde até que o usuário esteja autenticado
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData?.session) {
      alert('Não foi possível autenticar o usuário.');
      return;
    }

    const user = sessionData.session.user;

    // Agora, insira o perfil
    const { error: profileError } = await supabase.from('profiles').insert([
      {
        id: user.id,
        nome: `${data.primeiroNome} ${data.ultimoNome}`,
        cpf: data.cpf,
        data_nascimento: data.dataNascimento,
        telefone: data.telefone,
      },
    ]);

    if (profileError) {
      console.error('Erro ao salvar perfil:', profileError.message);
      alert('Erro ao salvar perfil: ' + profileError.message);
    } else {
      alert('Registro realizado com sucesso!');
      window.location.href = "/login"
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <InputTitle>Primeiro Nome</InputTitle>
            <Input
              type="text"
              {...register('primeiroNome', { required: 'Primeiro nome é obrigatório' })}
            />
            {/*@ts-expect-error*/}
            {errors.primeiroNome && <ErrorMessage>{errors.primeiroNome.message}</ErrorMessage>}
          </Column>
          <Column>
            <InputTitle>Último Nome</InputTitle>
            <Input
              type="text"
              {...register('ultimoNome', { required: 'Último nome é obrigatório' })}
            />
            {/*@ts-expect-error*/}
            {errors.ultimoNome && <ErrorMessage>{errors.ultimoNome.message}</ErrorMessage>}
          </Column>
        </Row>
        <Row>
          <Column>
            <InputTitle>Data de Nascimento</InputTitle>
            <Input
              type="date"
              {...register('dataNascimento', { required: 'Data de nascimento é obrigatória' })}
            />
            {errors.dataNascimento && (
              //@ts-expect-error
              <ErrorMessage>{errors.dataNascimento.message}</ErrorMessage>
            )}
          </Column>
          <Column>
            <InputTitle>CPF</InputTitle>
            <Input
              type="text"
              {...register('cpf', { required: 'CPF é obrigatório' })}
            />
            {/*@ts-expect-error*/}
            {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
          </Column>
        </Row>
        <Row>
          <Column>
            <InputTitle>E-mail</InputTitle>
            <Input
              type="email"
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'E-mail inválido',
                },
              })}
            />
            {/*@ts-expect-error*/}
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </Column>
          <Column>
            <InputTitle>Telefone</InputTitle>
            <Input
              type="tel"
              {...register('telefone')}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <InputTitle>Senha</InputTitle>
            <Input
              type="password"
              {...register('senha', { required: 'Senha é obrigatória' })}
            />
            {/*@ts-expect-error*/}
            {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
          </Column>
          <Column>
            <InputTitle>Confirmar Senha</InputTitle>
            <Input
              type="password"
              {...register('confirmarSenha', { required: 'Confirmação de senha é obrigatória' })}
            />
            {/*@ts-expect-error*/}
            {errors.confirmarSenha && <ErrorMessage>{errors.confirmarSenha.message}</ErrorMessage>}
          </Column>
        </Row>
        <ContainerButton>
          <Button type="submit">CRIAR CONTA</Button>
          <LinkStyled href="/login">Login</LinkStyled>
        </ContainerButton>
      </Form>
    </Container>
  );
};

export default Section1;