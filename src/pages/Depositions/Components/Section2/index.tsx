import { Container, Card, Image, CardTitle, CardSubtitle } from "./styles";
import imageDep1 from "../../../../assets/images/dep1.png";
import imageDep2 from "../../../../assets/images/dep2.png";
import imageDep3 from "../../../../assets/images/dep3.png";

const Section2 = () => {
    return (
        <>
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

export default Section2;