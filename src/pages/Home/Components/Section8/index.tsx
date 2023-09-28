import { Container, ContainerLeft, ContainerRight, Image, Subtitle, Title, TitleGolden, Button } from "./styles";
import image from '../../../../assets/images/home5.png'

const Section8 = () => {
    return (
        <Container>
            <ContainerLeft>
                <TitleGolden>Certificado Digital</TitleGolden>
                <Title>O certificado digital da NeuroGym pode ser um diferencial no seu currículo, destacando suas habilidades e conhecimentos na área</Title>
                <Subtitle>O certificado comprova que você passou por um treinamento formal e adquiriu conhecimentos específicos sobre estimulação cognitiva. Isso demonstra sua competência e especialização na área, tornando-o mais confiável para fornecer serviços de qualidade relacionados à estimulação cognitiva.</Subtitle>
                <Button>SAIBA MAIS</Button>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section8;