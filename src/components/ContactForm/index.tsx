import {
    Button,
    Container,
    ContainerForm,
    Subtitle,
    Title,
    Row,
    InputDiv,
    InputDivTextArea,
    InputTitle,
    Input,
    InputSelect,
    TextArea,
  } from "./styles";
  
  interface ContactProps {
    color?: string;
  }
  
  const ContactForm = ({ color }: ContactProps) => {
    return (
      <Container>
        <ContainerForm>
          <Title color={color}>Entre em Contato</Title>
          <Subtitle>
            Entre em contato com a nossa equipe para que possamos, juntos, escolher a
            melhor solução em Treinamento Cognitivo para você.
          </Subtitle>
          <Row>
            <InputDiv>
              <InputTitle color={color}>SEU NOME</InputTitle>
              <Input placeholder="Nome" />
            </InputDiv>
            <InputDiv>
              <InputTitle color={color}>SEU TELEFONE</InputTitle>
              <Input placeholder="Telefone" />
            </InputDiv>
          </Row>
          <Row>
            <InputDiv>
              <InputTitle color={color}>SEU E-MAIL</InputTitle>
              <Input placeholder="E-mail" />
            </InputDiv>
            <InputDiv>
              <InputTitle color={color}>ASSUNTO</InputTitle>
              <InputSelect>
                <option>NeuroGym para Você</option>
                <option>NeuroGym para Empresas</option>
                <option>NeuroGym para Escolas</option>
              </InputSelect>
            </InputDiv>
          </Row>
          <InputDivTextArea>
            <InputTitle color={color}>MENSAGEM</InputTitle>
            <TextArea rows={8} placeholder="Mensagem" />
          </InputDivTextArea>
          <Button color={color}>ENVIAR MENSAGEM</Button>
        </ContainerForm>
      </Container>
    );
  };
  
  export default ContactForm;  