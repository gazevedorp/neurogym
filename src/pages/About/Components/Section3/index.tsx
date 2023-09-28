import { Title, Subtitle, Container, Card, Image, CardTitle, CardSubtitle, ButtonIcon } from "./styles";
import imageDep1 from "../../../../assets/images/dep1.png";
import imageDep2 from "../../../../assets/images/dep2.png";
import imageDep3 from "../../../../assets/images/dep3.png";
import iconMore from "../../../../assets/icons/more.png"

const Section3 = () => {
    return (
        <>
            <Title>Depoimentos de Alunos</Title>
            <Subtitle href="/depoimentos">Mais Depoimentos<ButtonIcon src={iconMore} /></Subtitle>
            <Container>
                <Card>
                    <Image src={imageDep1} />
                    <CardTitle>Ana P. S., 29 anos</CardTitle>
                    <CardSubtitle>Empreendedora</CardSubtitle>
                </Card>
                <Card>
                    <Image src={imageDep2} />
                    <CardTitle>J. C. Fernandes, 40 anos</CardTitle>
                    <CardSubtitle>Gerente Industrial</CardSubtitle>
                </Card>
                <Card>
                    <Image src={imageDep3} />
                    <CardTitle>Sofia P. P., 32 anos</CardTitle>
                    <CardSubtitle>Engenheira</CardSubtitle>
                </Card>
            </Container>
        </>
    )
}

export default Section3;