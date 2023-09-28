import { Container, ContainerLeft, ContainerRight, Image, Subtitle, Title, TitlePurple, Button } from "./styles";
import image from '../../../../assets/images/person2.png'

const Section2 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitlePurple>Desafie sua Mente e Conquiste o Próximo Nível de Excelência</TitlePurple>
                <Subtitle>Na NeuroGym, acreditamos que o aprendizado pode ser divertido e empolgante. É por isso que investimos em uma incrível coleção de jogos online especialmente desenvolvidos para estimular as habilidades cognitivas e levar você a um novo patamar de excelência mental.</Subtitle>
                <Subtitle>Nossos jogos online são muito mais do que simples passatempos virtuais. São ferramentas poderosas que trabalham áreas-chave do cérebro, como memória, atenção, concentração, raciocínio lógico e criatividade. Cada jogo foi projetado com base em pesquisas científicas da neurociência e estratégias comprovadas para melhorar o desempenho cognitivo.</Subtitle>
                <Button>SAIBA MAIS</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section2;