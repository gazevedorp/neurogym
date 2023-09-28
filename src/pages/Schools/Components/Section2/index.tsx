import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleBlue, Button, Icon } from "./styles";
import image from '../../../../assets/images/schools2.png'
import listIcon from '../../../../assets/icons/roundBlue.png'

const Section2 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleBlue>Método de Estímulo Cognitivo para Escolas com foco no desenvolvimento das capacidades de aprendizado e habilidades interpessoais dos alunos</TitleBlue>
                <Subtitle top={20} bottom={20}>Através de nosso método inovador, os alunos terão os melhores resultados em seus estudos, desenvolvendo também:</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Criatividade e Memória</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Resiliência e Raciocínio Lógico</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Disciplina e Perserverança</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Concentração Foco e Atenção</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Autoestima e Confiança</Subtitle>
                <Subtitle bottom={20}><Icon src={listIcon} />Inteligência Emocional</Subtitle>
                <Subtitle bottom={20}>Nosso Método de Estímulo Cognitivo garantirá uma maior absorção e retenção dos conteúdos disciplinares e oferecerá a cada aluno um melhor preparo para a vida escolar, pessoal e profissional.</Subtitle>
                <Button>ENTRE EM CONTATO</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section2;