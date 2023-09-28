import { Container, ContainerLeft, ContainerRight, Image, Subtitle, Title, TitlePurple, Button } from "./styles";
import image from '../../../../assets/images/home4.png'

const Section6 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitlePurple>NeuroGym para Você</TitlePurple>
                <Title>TNosso principal objetivo é elevar o potencial do seu cérebro ao àpice e revolucionar a sua saúde mental através de um método inovador</Title>
                <Subtitle>Através de nosso método baseado na neurociência, vamos treinar a sua memória, atenção, raciocínio lógico e criatividade. Vamos também  trabalhar com você
                    através de ferramentas criadas para auxiliarem no controle de sua mente, stress
                    e ansiedade. O treinamento da NeuroGym é abrangente e dinâmico, sendo
                    indicado para todas as idades, podendo cada aluno utilizá-lo de acordo com
                    seu tempo livre e seus objetivos.</Subtitle>
                <Button>SAIBA MAIS</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section6;