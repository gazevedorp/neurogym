import { Button, Container, ContainerLeft, ContainerRight, DivButton, Image, Logo, Subtitle, Title } from "./styles";
import logoBlue from "../../../../assets/images/logoBlue.png"
import image from '../../../../assets/images/schools1.png'

const Section1 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Logo src={logoBlue} />
                <Title>Método Inovador de Estímulo Cognitivo para Escolas</Title>
                <Subtitle>Desenvolvimento da Criatividade, Raciocínio Lógico e Habilidades Interpessoais dos Alunos</Subtitle>
                <DivButton>
                    <Button onClick={() => window.location.href = ("/sobre")}>SAIBA MAIS</Button>
                    <Button onClick={() => window.location.href = ("/contato")}>ENTRE EM CONTATO</Button>
                </DivButton>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section1;