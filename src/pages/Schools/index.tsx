import Footer from "../../components/Footer";
import Header from "../../components/Header";
import schools from './schools.png'

const Schools = () => {
    return (
        <h1>
            <Header color="blue" />
            <img src={schools} />
            <Footer />
        </h1>
    )
}

export default Schools;