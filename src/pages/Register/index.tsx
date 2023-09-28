import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import Section1 from "./Components/Section1";
import { Container } from "./styles";

const Register = () => {
    return (
        <h1>
            <Header />
            <InternalHeader title={"Criar Conta"} />
            <Container>
                <Section1 />
            </Container>
            <Footer />
        </h1>
    )
}

export default Register;