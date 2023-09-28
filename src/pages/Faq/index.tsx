import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import { Container, DivQuestion, TitleGolden, Subtitle } from "./styles";

const Faq = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Faq"} />
            <Container>
                <DivQuestion>
                    <TitleGolden>O que é a NeuroGym?</TitleGolden>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                </DivQuestion>
                <DivQuestion>
                    <TitleGolden>Como funciona?</TitleGolden>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                </DivQuestion>
                <DivQuestion>
                    <TitleGolden>O Curso possui certificado de conclusão?</TitleGolden>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                </DivQuestion>
                <DivQuestion>
                    <TitleGolden>As Aulas são disponibilizadas ao vivo?</TitleGolden>
                    <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
                </DivQuestion>
            </Container>
            <Footer />
        </>
    )
}

export default Faq;