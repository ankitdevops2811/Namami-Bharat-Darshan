import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AnimateTest from "./components/AnimateTest";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
// import Register from "./components/register-form";
import About from "./pages/About";
import Home from "./pages/Home";
import Service from "./pages/Service";
import PaediatricOccupational from "./pages/peadiatric/PaediatricOccupational";
import PaediatricPhysiotherapy from "./pages/peadiatric/PaediatricPhysiotherapy";
import PaediatricSpeech from "./pages/peadiatric/PaediatricSpeech";
import Peadiatric from "./pages/peadiatric/Peadiatric";
import Dmi from "./pages/therapy-tools/Dmi";
import Functional_Estim from "./pages/therapy-tools/Functional-Estim";
import Galileo from "./pages/therapy-tools/Galileo";
import Neurosuit from "./pages/therapy-tools/Neurosuit";
import Spidercage from "./pages/therapy-tools/Spidercage";
import TherapyTools from "./pages/therapy-tools/TherapyTools";
import Theratogs from "./pages/therapy-tools/Theratogs";
import Register from "./components/register-form";
import "./style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
import Location from "./pages/Location";

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="service" element={<Service />} />
            {/* === TherapyTools === */}
            <Route path="therapy-tools" element={<TherapyTools />} />
            <Route path="register" element={<Register />} />
            <Route path="therapy-tools/neurosuit" element={<Neurosuit />} />
            <Route path="therapy-tools/spidercage" element={<Spidercage />} />
            <Route path="therapy-tools/dmi" element={<Dmi />} />
            <Route
              path="therapy-tools/functional-estim"
              element={<Functional_Estim />}
            />
            <Route path="therapy-tools/galileo" element={<Galileo />} />
            <Route path="therapy-tools/theratogs" element={<Theratogs />} />
            <Route path="therapy-tools/contacts" element={<Contact />} />
            <Route path="/locations" element={<Location />} />
            <Route path="/locations" element={<Location />} />
            {/* Pediatric */}
            <Route path="pediatric" element={<Peadiatric />} />
            <Route
              path="pediatric-occupational"
              element={<PaediatricOccupational />}
            />
            <Route
              path="pediatric-physiotherapy"
              element={<PaediatricPhysiotherapy />}
            />
            <Route path="pediatric-speech" element={<PaediatricSpeech />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
