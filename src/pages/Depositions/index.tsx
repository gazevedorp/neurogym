import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import { Container } from "./styles";
import Section2 from "./Components/Section2"
import Section3 from "./Components/Section3";
import Section1 from "./Components/Section1";

const Depositions = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Depoimentos de Alunos"} />
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
            </Container>
            <Footer />
        </>
    )
}

export default Depositions;