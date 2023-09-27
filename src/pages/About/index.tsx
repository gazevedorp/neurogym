import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import about from './about.png'
import dep from './depoimentos.png'

const About = () => {
    const [type, setType] = useState(1);

    return (
        <h1>
            <Header />
            {type === 1 ? <img onClick={() => setType(2)} src={about} /> : <img onClick={() => setType(1)} src={dep} />}
            <Footer />
        </h1>
    )
}

export default About;