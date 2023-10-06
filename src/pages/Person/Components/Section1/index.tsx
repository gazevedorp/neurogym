import { Button, Container, ContainerLeft, ContainerRight, DivButton, Image, Logo, Subtitle, Title } from "./styles";
import logoPurple from "../../../../assets/images/logoPurple.png"
import image from '../../../../assets/images/person1.png'

const Section1 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Logo src={logoPurple} />
                <Title>Aulas Online, ao vivo ou gravadas, para você treinar todos os dias</Title>
                <Subtitle>Desenvolva seu potencial sem sair de casa, com Aulas e Acompanhamento Profissional 100% online</Subtitle>
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