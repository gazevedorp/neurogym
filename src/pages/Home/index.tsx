import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import { Container } from "./styles";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Section1 />
                <Section2 />
            </Container>
            <Footer />
        </>
    )
}

export default Home;