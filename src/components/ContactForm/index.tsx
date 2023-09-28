import { Button, Container, ContainerForm, Subtitle, Title, Row, InputDiv, InputDivTextArea, InputTitle, Input, InputSelect, TextArea } from "./styles";

const ContactForm = () => {
    return (
        <Container>
            <ContainerForm>
                <Title>Entre em Contato</Title>
                <Subtitle>Entre em contato com a nossa equipe para que possamos, juntos, escolher a melhor solução em Treinamento Cognitivo para você.</Subtitle>
                <Row>
                    <InputDiv>
                        <InputTitle>SEU NOME</InputTitle>
                        <Input placeholder="Nome" />
                    </InputDiv>
                    <InputDiv>
                        <InputTitle>SEU TELEFONE</InputTitle>
                        <Input placeholder="Telefone" />
                    </InputDiv>
                </Row>
                <Row>
                    <InputDiv>
                        <InputTitle>SEU E-MAIL</InputTitle>
                        <Input placeholder="E-mail" />
                    </InputDiv>
                    <InputDiv>
                        <InputTitle>ASSUNTO</InputTitle>
                        <InputSelect placeholder="NeuroGym">
                            <option>NeuroGym para Você</option>
                            <option>NeuroGym para Empresas</option>
                            <option>NeuroGym para Escolas</option>
                        </InputSelect>
                    </InputDiv>
                </Row>
                <InputDivTextArea>
                    <InputTitle>MENSAGEM</InputTitle>
                    <TextArea rows={8} placeholder="Mensagem" />
                </InputDivTextArea>
                <Button>ENVIAR MENSAGEM</Button>
            </ContainerForm>
        </Container>
    )
}

export default ContactForm;