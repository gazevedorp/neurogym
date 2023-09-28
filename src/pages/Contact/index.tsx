import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import InternalHeader from "../../components/InternalHeader";

const Contact = () => {
    return (
        <>
            <Header />
            <InternalHeader title={"Entre em Contato"} />
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;