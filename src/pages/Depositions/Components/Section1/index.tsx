import { Image, Title, Subtitle } from "./styles";
import imageDep4 from "../../../../assets/images/dep4.png";

const Section1 = () => {
    return (
        <>
            <Title>Nosso empenho em oferecer a melhor solução em Estímulo Cognitivo está refletida nas conquistas de nossos alunos.</Title>
            <Image src={imageDep4} />
            <Subtitle>Carta escrita por Leonor Gasparini, Aluna</Subtitle>
        </>
    )
}

export default Section1;