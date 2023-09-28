import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleGolden, Button } from "./styles";
import image from '../../../../assets/images/certificate2.png'

const Section2 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleGolden>Como funciona o Certificado Digital de Conclusão de Curso?</TitleGolden>
                <Subtitle top={20} bottom={20}>Para receber o Certificado Digital de Conclusão do Curso de Performance Cognitiva da NeuroGym o aluno deve concluir todas as atividades e requisitos do curso, cumprindo as etapas estabelecidas. Após o término, a equipe responsável pelo curso verifica o desempenho do aluno, garantindo que todos os critérios de aprovação tenham sido atendidos.</Subtitle>
                <Subtitle bottom={20}>Em seguida, é emitido um certificado digital de conclusão do curso. Esse certificado inclui informações como o nome do aluno, o nome do curso, a carga horária, a data de conclusão e o logotipo da escola.</Subtitle>
                <Subtitle bottom={30}>O certificado é enviado ao aluno por meio de um formato digital, como um arquivo PDF, ou é disponibilizado para download na uma plataforma online de aprendizagem. O aluno pode salvá-lo no seu computador, imprimi-lo ou compartilhá-lo conforme necessário.</Subtitle>
                <Button>ENTRE EM CONTATO</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section2;