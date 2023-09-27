import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import blog from './blog.png'
import post from './postagem.png'

const Blog = () => {
    const [type, setType] = useState(1);

    return (
        <h1>
            <Header />
            {type === 1 ? <img onClick={() => setType(2)} src={blog} /> : <img onClick={() => setType(1)} src={post} />}
            <Footer />
        </h1>
    )
}

export default Blog;