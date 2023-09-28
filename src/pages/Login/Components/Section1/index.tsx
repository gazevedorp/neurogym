import { Button, Container, Input, InputTitle, ContainerButton, Form, Link } from "./styles";

const Section1 = () => {
    return (
        <Container>
            <Form>
                <InputTitle>CPF</InputTitle>
                <Input placeholder="CPF" />
                <InputTitle>SENHA</InputTitle>
                <Input placeholder="Senha" />
                <ContainerButton>
                    <Button>LOGIN</Button>
                    <Link href="/cadastrar">Criar Conta</Link>
                </ContainerButton>
            </Form>
        </Container >
    )
}

export default Section1;