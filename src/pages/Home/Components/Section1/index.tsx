import {
    Button1,
    Button2,
    Button3,
    Container,
    ContainerLeft,
    ContainerRight,
    DivButton,
    Image,
    Logo,
    Subtitle,
    Title,
  } from "./styles";
  import logoGolden from "../../../../assets/images/logoGolden.png";
  import imageSection1 from "../../../../assets/images/home1.png";
  
  const Section1 = () => {
    return (
      <Container>
        <ContainerLeft>
          <Logo src={logoGolden} />
          <Title>
            Eleve o Potencial do seu Cérebro ao Ápice e revolucione a sua saúde mental
          </Title>
          <Subtitle>
            Com a NeuroGym você tem todo suporte para exercitar o seu cérebro e atingir o seu potencial máximo
          </Subtitle>
          <DivButton>
            <Button1>PARA VOCÊ</Button1>
            <Button2>PARA ESCOLAS</Button2>
            <Button3>PARA EMPRESAS</Button3>
          </DivButton>
        </ContainerLeft>
        <ContainerRight>
          <Image src={imageSection1} />
        </ContainerRight>
      </Container>
    );
  };
  
  export default Section1;  