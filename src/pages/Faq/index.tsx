import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import { Container } from "./styles";

const Faq = () => {
    return (
        <h1>
            <Header />
            <InternalHeader title={"Faq"} />
            <Container></Container>
            <Footer />
        </h1>
    )
}

export default Faq;