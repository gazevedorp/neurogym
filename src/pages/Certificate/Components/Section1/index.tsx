import { Button, Container, ContainerLeft, ContainerRight, DivButton, Image, Logo, Subtitle, Title } from "./styles";
import logoGolden from "../../../../assets/images/logoGolden.png"
import image from '../../../../assets/images/certificate1.png'

const Section1 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Logo src={logoGolden} />
                <Title>Um diferencial no seu currículo que destaca sua excelência na área</Title>
                <Subtitle>Tenha a comprovação de sua expertise na área de Estimulação Cognitiva.</Subtitle>
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