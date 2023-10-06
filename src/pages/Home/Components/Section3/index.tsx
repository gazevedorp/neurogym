import { Container, ContainerLeft, ContainerRight, Image, Subtitle, Title, TitleGolden, Button } from "./styles";
import image from '../../../../assets/images/home2.png'

const Section3 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleGolden>NeuroGym para Empresas</TitleGolden>
                <Title>Treinamento Cognitivo Corporativo destinado ao desenvolvimento de equipes e ao aceleramento do crescimento de empresas e negócios</Title>
                <Subtitle>Cada empresa tem os seus próprios desafios e para atender cada
                    um deles de maneira direta e personalizada, nossos programas
                    são cuidadosamente elaborados conforme as necessidades
                    de seus líderes e seus colaboradores.</Subtitle>
                <Button onClick={() => window.location.href = ("/empresas")}>SAIBA MAIS</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section3;