import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleBlue, Button } from "./styles";
import image from '../../../../assets/images/person3.png'

const Section3 = () => {
    return (
        <Container>
            <ContainerLeft>
                <TitleBlue>Um Método de Treinamento que vai Expandir seus Horizontes e Revolucionar seu Potencial Cognitivo</TitleBlue>
                <Subtitle>Na NeuroGym, mergulhamos fundo no universo do desenvolvimento mental/cognitivo para criar um método de treinamento revolucionário baseado na neurociência e que durou mais de 3 anos para ser desenvolvido e testado. Nosso objetivo é simples: potencializar as habilidades cognitivas e proporcionar uma experiência transformadora aos nossos alunos.</Subtitle>
                <Subtitle>O segredo está na combinação perfeita entre a ciência e a arte do treinamento cognitivo. Utilizamos os mais avançados conhecimentos da neurociência para entender como o cérebro funciona e como podemos fortalecer suas conexões neuronais. Mas não paramos por aí. Vamos além, explorando as técnicas criativas e inovadoras que estimulam a mente de forma única.</Subtitle>
                <Button>SAIBA MAIS</Button>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section3;