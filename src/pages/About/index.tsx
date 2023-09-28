import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import { Container } from "./styles";

const About = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Sobre a NeuroGym"} />
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </Container>
            <Footer />
        </>
    )
}

export default About;