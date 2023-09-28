import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import { Container } from "./styles";

const Business = () => {
    return (
        <>
            <Header />
            <Container>
                <Section1 />
                <Section2 />
                <Section3 />
                <ContactForm />
            </Container>
            <Footer />
        </>
    )
}

export default Business;