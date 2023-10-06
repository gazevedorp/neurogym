import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleBlue, Button } from "./styles";
import image from '../../../../assets/images/schools3.png'

const Section3 = () => {
    return (
        <Container>
            <ContainerLeft>
                <TitleBlue>Nós vamos sempre além, explorando as técnicas criativas e inovadoras que estimulam a mente de forma única</TitleBlue>
                <Subtitle>Em nossa escola, não acreditamos em métodos ultrapassados e monótonos. Abraçamos a diversidade de atividades e desafios, criando um treinamento estimulante e dinâmico. A cada aula, nossos alunos são envolvidos em experiências interativas, jogos desafiadores e exercícios que exploram diferentes habilidades cognitivas, como memória, atenção, raciocínio lógico e criatividade, por exemplo.</Subtitle>
                <Subtitle>Investimos incansavelmente na formação de nossa equipe de profissionais altamente qualificados, que estão sempre atualizados com as mais recentes pesquisas e tendências na área da estimulação cognitiva e saúde mental. Essa expertise nos permite personalizar o treinamento de acordo com as necessidades individuais de cada aluno, garantindo resultados efetivos e duradouros.</Subtitle>
                <Button onClick={() => window.location.href = ("/contato")}>ENTRE EM CONTATO</Button>
            </ContainerLeft>
            <ContainerRight>
                <Image src={image} />
            </ContainerRight>
        </Container >
    )
}

export default Section3;