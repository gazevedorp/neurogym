import { Container, Card, Button, ButtonIcon } from "./styles";
import homeCard1 from "../../../../assets/images/homeCard1.png";
import homeCard2 from "../../../../assets/images/homeCard2.png";
import homeCard3 from "../../../../assets/images/homeCard3.png";
import homeCard4 from "../../../../assets/images/homecard4.png";
import arrowRight from "../../../../assets/icons/arrowRight.png";

const Section2 = () => {
  return (
    <Container>
      <Card image={homeCard1}>
        <Button>
          NOSSO MÉTODO<ButtonIcon src={arrowRight} />
        </Button>
      </Card>
      <Card image={homeCard2}>
        <Button>
          JOGOS ONLINE<ButtonIcon src={arrowRight} />
        </Button>
      </Card>
      <Card image={homeCard3}>
        <Button>
          AULAS AO VIVO<ButtonIcon src={arrowRight} />
        </Button>
      </Card>
      <Card image={homeCard4}>
        <Button>
          CERTIFICADO DIGITAL<ButtonIcon src={arrowRight} />
        </Button>
      </Card>
    </Container>
  );
};

export default Section2;