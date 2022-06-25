import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/about/about";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/work/Portfolio";
import Conntact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import CvState from "./components/context/CvState";
import Login from "./components/login/Login";

import {
  Route, Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <CvState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/work" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Conntact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </CvState>
    </>
  );
}

export default App;
