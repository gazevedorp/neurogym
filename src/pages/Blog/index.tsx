import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InternalHeader from "../../components/InternalHeader";
import { Container } from "./styles";

const Blog = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Blog"} />
            <Container></Container>
            <Footer />
        </>
    )
}

export default Blog;