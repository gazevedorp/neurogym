import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleGolden } from "./styles";
import image from '../../../../assets/images/about2.png'

const Section4 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleGolden>Todo o nosso material foi cuidadosamente elaborado para assegurar clareza e fácil compreensão.</TitleGolden>
                <Subtitle>As apostilas disponíveis são compostas por lições que vão do Básico ao Avançando, cuidadosamente elaboradas para garantir uma progressão tranquila e clara.</Subtitle>
                <Subtitle>Essas lições estão disponíveis aqui em nossa plataforma em vídeos curtos e objetivos, divididos entre dias da semana, para que você possa absorver o conteúdo de forma gradual e no seu tempo. Por isso também oferecemos aulas ao vivo e gravadas, para que você possa fazer nossos cursos de acordo com a sua rotina.</Subtitle>
            </ContainerRight>
        </Container >
    )
}

export default Section4;