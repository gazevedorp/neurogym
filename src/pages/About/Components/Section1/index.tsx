import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleGolden } from "./styles";
import image from '../../../../assets/images/about1.png'

const Section1 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleGolden>A NeuroGym oferece um dos Maiores Cursos Online de Estimulação Cognitiva e Desenvolvimento Cerebral da América Latina</TitleGolden>
                <Subtitle>Nascida da paixão pela excelência cognitiva, a NeuroGym foi criada com um objetivo claro: capacitar indivíduos a desbloquear todo o seu potencial mental e conquistar uma vida extraordinária.</Subtitle>
                <Subtitle>Nossa jornada começou com uma visão ousada de criar uma escola de estimulação cognitiva que fosse além das abordagens tradicionais. Combinando ciência de ponta, metodologias inovadoras e uma equipe dedicada de especialistas coordenados pela Dra. Gabriela Frighetto (Neuropsicóloga formada pelo Hospital Israelita Albert Einstein na cidade de São Paulo capital, contando com mais de 10 anos de atuação na área), construímos um espaço onde a mente pode florescer e alcançar níveis surpreendentes de desempenho.</Subtitle>
                <Subtitle>Na NeuroGym, não acreditamos em limites. Acreditamos que cada pessoa é capaz de expandir sua capacidade cognitiva, independente da idade ou histórico. Utilizamos técnicas avançadas de treinamento cognitivo, desenvolvidas por especialistas, para estimular habilidades como memória, atenção, raciocínio lógico e criatividade.</Subtitle>
                <Subtitle>Mas não paramos por aí. Além do treinamento cognitivo, também nos concentramos no crescimento pessoal e no bem-estar global de nossos alunos. Acreditamos que a mente e o corpo estão intrinsecamente conectados, e nosso programa abrange atividades que promovem o equilíbrio e o desenvolvimento integral.</Subtitle>
                <Subtitle>Então, se você está pronto para transformar sua mente, desafiar seus limites e alcançar uma vida extraordinária, junte-se a nós na NeuroGym. Nossa escola de estimulação cognitiva é o seu caminho para um futuro brilhante e cheio de conquistas. Venha despertar seu potencial e elevar seu cérebro ao ápice!</Subtitle>
            </ContainerRight>
        </Container >
    )
}

export default Section1;