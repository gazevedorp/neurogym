import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Person from "./pages/Person";
import Business from "./pages/Business";
import Schools from "./pages/Schools";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import Books from "./pages/Books";
import Tasks from "./pages/Tasks";
import Task from "./pages/Task";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Certificate from "./pages/Certificate";
import Depositions from "./pages/Depositions";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voce" element={<Person />} />
        <Route path="/empresas" element={<Business />} />
        <Route path="/escolas" element={<Schools />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/certificado" element={<Certificate />} />
        <Route path="/depoimentos" element={<Depositions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/curso" element={<Course />} />
        <Route path="/apostilas" element={<Books />} />
        <Route path="/licoes" element={<Tasks />} />
        <Route path="/licao" element={<Task />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
