import Footer from "../../components/Footer";
import Header from "../../components/Header";
import contact from './contact.png'

const Contact = () => {
    return (
        <h1>
            <Header />
            <img src={contact} />
            <Footer />
        </h1>
    )
}

export default Contact;