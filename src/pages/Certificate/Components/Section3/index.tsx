import { Container, ContainerButton, Subtitle, TitleGolden, Button, Icon, Row, Column, Title, SubtitleCard } from "./styles";
import iconRound from "../../../../assets/icons/round.png"

const Section3 = () => {
    return (
        <Container>
            <TitleGolden>Quais os benefícios do Certificado Digital da NeuroGym?</TitleGolden>
            <Subtitle top={30} bottom={40}>O Certificado Digital da NeuroGym pode ser um diferencial no seu currículo, destacando suas habilidades e conhecimentos na área</Subtitle>
            <Row>
                <Column>
                    <Title><Icon src={iconRound} />Reconhecimento Profissional</Title>
                    <SubtitleCard>Nosso Certificado pode aumentar as suas chances e criar novas oportunidades de trabalho em diversas instituições, principalmente nas da área da saúde que oferecem serviços de Estimulação Cognitiva.</SubtitleCard>
                </Column>
                <Column>
                    <Title><Icon src={iconRound} />Desenvolvimento Pessoal</Title>
                    <SubtitleCard>Você terá ainda a comprovação de benefícios pessoais, pois ao fim do treinamento você adquire um conjunto de habilidades valiosas para melhorar sua própria cognição e saúde mental.</SubtitleCard>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Title><Icon src={iconRound} />Competência e Especialização</Title>
                    <SubtitleCard>O Certificado comprova que você passou por um treinamento formal e adquiriu conhecimentos específicos sobre Estimulação Cognitiva. Isso demonstra sua competência e especialização na área, tornando-o mais confiável.</SubtitleCard>
                </Column>
                <Column>
                    <Title><Icon src={iconRound} />Acesso à Novas Oportunidades</Title>
                    <SubtitleCard>Ter o certificado da NeuroGym pode abrir portas para participação em projetos de pesquisa e colaborações acadêmicas, além de tornar você elegível para se juntar a associações profissionais ou obter credenciais adicionais na área.</SubtitleCard>
                </Column>
            </Row>
            <ContainerButton>
                <Button>ENTRE EM CONTATO</Button>
            </ContainerButton>
        </Container >
    )
}

export default Section3;