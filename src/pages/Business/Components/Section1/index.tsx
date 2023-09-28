import { Button, Container, ContainerLeft, ContainerRight, DivButton, Image, Logo, Subtitle, Title } from "./styles";
import logoGolden from "../../../../assets/images/logoGolden.png"
import image from '../../../../assets/images/business1.png'

const Section1 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Logo src={logoGolden} />
                <Title>Treinamento Cognitivo corporativo sob-medida para empresas</Title>
                <Subtitle>Um programas cuidadosamente elaborado conforme as necessidades de seu negócio.</Subtitle>
                <DivButton>
                    <Button>SAIBA MAIS</Button>
                    <Button>ENTRE EM CONTATO</Button>
                </DivButton>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section1;