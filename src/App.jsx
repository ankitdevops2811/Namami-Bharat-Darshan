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
import Register from "./components/register-form";
// import WOW from 'wowjs';
// import { useEffect } from "react";
import './style.css'
import AnimateTest from "./components/AnimateTest";
// import { useEffect } from "react";
// import './assets/animate/lib/animate/animate.min.css'
// import './assets/animate/lib/animate/animate.css'
// import './assets/animate/css/bootstrap.min.css'
// import './App.css'

function App() {

  // useEffect(() => {
  //   const wow = new WOW.WOW({
  //     live: false
  //   });
  //   wow.init();
  // }, []);

  // useEffect(() => {
  //    WOW().init()
  // })
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
            <Route path="therapy-tools/functional-estim" element={<Functional_Estim />} />
            <Route path="therapy-tools/galileo" element={<Galileo />} />
            <Route path="therapy-tools/theratogs" element={<Theratogs />} />
            <Route path="therapy-tools/contacts" element={<Contact />} />
            <Route path="test" element={<AnimateTest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
