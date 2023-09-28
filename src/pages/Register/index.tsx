import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import Section1 from "./Components/Section1";
import { Container } from "./styles";

const Register = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Criar Conta"} />
            <Container>
                <Section1 />
            </Container>
            <Footer />
        </>
    )
}

export default Register;