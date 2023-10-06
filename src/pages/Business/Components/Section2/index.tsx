import { Container, ContainerLeft, ContainerRight, Image, Subtitle, TitleGolden, Button, Icon } from "./styles";
import image from '../../../../assets/images/business2.png'
import listIcon from '../../../../assets/icons/round.png'

const Section2 = () => {
    return (
        <Container>
            <ContainerLeft>
                <Image src={image} />
            </ContainerLeft>
            <ContainerRight>
                <TitleGolden>Com os benefícios do Treinamento Cognitivo, você atrai, retém e desenvolve os melhores talentos que existem em sua empresa</TitleGolden>
                <Subtitle top={20} bottom={20}>Baixa Produtividade de Colaboradores é uma dor crescente em empresas dos mais variados segmentos, acarretando em:</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Aumento do estresse no ambiente de trabalho</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Problemas constantes na comunicação interna</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Inconsistência dos processos</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Falta de comprometimento com a empresa</Subtitle>
                <Subtitle bottom={5}><Icon src={listIcon} />Equipe insatisfeita com os resultados</Subtitle>
                <Subtitle bottom={20}><Icon src={listIcon} />Perda de oportunidades de negócios</Subtitle>
                <Subtitle bottom={20}>Não deixe isso acontecer com o seu negócio. Obtenha os melhores resultados investindo em seu time e investindo no “equipamento” mais importante de sua empresa: o cérebro de seus colaboradores.</Subtitle>
                <Button onClick={() => window.location.href = ("/contato")}>ENTRE EM CONTATO</Button>
            </ContainerRight>
        </Container >
    )
}

export default Section2;