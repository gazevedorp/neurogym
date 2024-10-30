import {
    Title,
    Container,
    Card,
    CardBlue,
    CardCategory,
    CardTitle,
    CardSubtitle,
    Button,
    ButtonIcon,
  } from "./styles";
  import arrowRight from "../../../../assets/icons/arrowRight.png";
  
  const Section9 = () => {
    return (
      <>
        <Title>Blog da NeuroGym</Title>
        <Container>
          <Card>
            <CardBlue />
            <CardCategory>Categoria</CardCategory>
            <CardTitle>Nome do Post</CardTitle>
            <CardSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardSubtitle>
            <Button>
              Leia Mais<ButtonIcon src={arrowRight} />
            </Button>
          </Card>
          <Card>
            <CardBlue />
            <CardCategory>Categoria</CardCategory>
            <CardTitle>Nome do Post</CardTitle>
            <CardSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardSubtitle>
            <Button>
              Leia Mais<ButtonIcon src={arrowRight} />
            </Button>
          </Card>
          <Card>
            <CardBlue />
            <CardCategory>Categoria</CardCategory>
            <CardTitle>Nome do Post</CardTitle>
            <CardSubtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardSubtitle>
            <Button>
              Leia Mais<ButtonIcon src={arrowRight} />
            </Button>
          </Card>
        </Container>
      </>
    );
  };
  
  export default Section9;  