import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import Section1 from "./Components/Section1";
import { Container } from "./styles";

const Login = () => {
    return (
        <h1>
            <Header />
            <InternalHeader title={"Login"} />
            <Container>
                <Section1 />
            </Container>
            <Footer />
        </h1>
    )
}

export default Login;