import Footer from "../../components/Footer";
import Header from "../../components/Header";
import business from './business.png'

const Business = () => {
    return (
        <h1>
            <Header color="purple" />
            <img src={business} />
            <Footer />
        </h1>
    )
}

export default Business;