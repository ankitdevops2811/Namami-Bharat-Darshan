import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Service from "./pages/Service";
import TherapyTools from "./pages/therapy-tools/TherapyTools";
import Neurosuit from "./pages/therapy-tools/Neurosuit";
import Spidercage from "./pages/therapy-tools/Spidercage";
import Dmi from "./pages/therapy-tools/Dmi";
import Functional_Estim from "./pages/therapy-tools/Functional-Estim";
import Galileo from "./pages/therapy-tools/Galileo";
import Theratogs from "./pages/therapy-tools/Theratogs";
import Peadiatric from "./pages/peadiatric/Peadiatric";
// import { useEffect } from "react";
// import 'aos/dist/aos.css';
// // import './style.css'; 
// import './App.css'

function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js';
  //   script.integrity = 'sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p';
  //   script.crossOrigin = 'anonymous';
  //   document.body.appendChild(script);

  //   const bootstrapScript = document.createElement('script');
  //   bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js';
  //   bootstrapScript.integrity = 'sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF';
  //   bootstrapScript.crossOrigin = 'anonymous';
  //   document.body.appendChild(bootstrapScript);

  //   const aosScript = document.createElement('script');
  //   aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
  //   document.body.appendChild(aosScript);

  //   aosScript.onload = () => {
  //     window.AOS.init();
  //   };

  //   return () => {
  //     document.body.removeChild(script);
  //     document.body.removeChild(bootstrapScript);
  //     document.body.removeChild(aosScript);
  //   };
  // }, []);
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
            <Route path="therapy-tools/neurosuit" element={<Neurosuit />} />
            <Route path="therapy-tools/spidercage" element={<Spidercage />} />
            <Route path="therapy-tools/dmi" element={<Dmi />} />
            <Route path="therapy-tools/functional-estim" element={<Functional_Estim />} />
            <Route path="therapy-tools/galileo" element={<Galileo />} />
            <Route path="therapy-tools/theratogs" element={<Theratogs />} />
            <Route path="therapy-tools/contacts" element={<Contact />} />
            <Route path="pediatric" element={<Peadiatric />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
