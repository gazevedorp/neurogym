import { Button, Container, Input, InputTitle, ContainerButton, Form, Link, Column, Row } from "./styles";

const Section1 = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Column>
                        <InputTitle>Primeiro Nome</InputTitle>
                        <Input />
                    </Column>
                    <Column>
                        <InputTitle>Último Nome</InputTitle>
                        <Input />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputTitle>Data de Nascimento</InputTitle>
                        <Input />
                    </Column>
                    <Column>
                        <InputTitle>CPF</InputTitle>
                        <Input />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputTitle>E-mail</InputTitle>
                        <Input />
                    </Column>
                    <Column>
                        <InputTitle>Telefone</InputTitle>
                        <Input />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <InputTitle>Senha</InputTitle>
                        <Input />
                    </Column>
                    <Column>
                        <InputTitle>Confirmar Senha</InputTitle>
                        <Input />
                    </Column>
                </Row>
                <ContainerButton>
                    <Button>CRIAR CONTA</Button>
                    <Link href="/login">Login</Link>
                </ContainerButton>
            </Form>
        </Container >
    )
}

export default Section1;