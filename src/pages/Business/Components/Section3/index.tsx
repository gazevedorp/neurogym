import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleGolden, Button } from "./styles";
import image from '../../../../assets/images/business3.png'

const Section3 = () => {
    return (
        <Container>
            <ContainerLeft>
                <TitleGolden>A NeuroGym tem o objetivo de ajudar as empresas a melhorarem o desempenho de seus funcionários, bem como a qualidade de vida no trabalho</TitleGolden>
                <Subtitle>Nosso curso oferece um conjunto de técnicas e estratégias que visam estimular a atividade cerebral e desenvolver habilidades emocionais,a fim de melhorar a produtividade, a criatividade, a tomada de decisões e a resolução de problemas dos funcionários. Além disso, o curso também ajuda a reduzir o estresse, a ansiedade e a melhorar a comunicação e o trabalho em equipe.</Subtitle>
                <Button>ENTRE EM CONTATO</Button>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section3;