import { Container, ContainerLeft, ContainerRight, Image, Subtitle, Title, TitleBlue, Button } from "./styles";
import image from '../../../../assets/images/home3.png'

const Section4 = () => {
    return (
        <Container>
            <ContainerLeft>
                <TitleBlue>NeuroGym para Escolas</TitleBlue>
                <Title>Método de Estímulo Cognitivo para Escolas com foco no desenvolvimento das capacidades de aprendizado e habilidades interpessoais dos alunos</Title>
                <Subtitle>Através de nosso método os alunos terão os melhores resultados em seus estudos através do estímulo da Criatividade, Memória e Raciocínio Lógico, além do desenvolvimento da Inteligência Emocional, Motivação para Estudo e Trabalho em Equipe.</Subtitle>
                <Button onClick={() => window.location.href = ("/escolas")}>SAIBA MAIS</Button>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section4;