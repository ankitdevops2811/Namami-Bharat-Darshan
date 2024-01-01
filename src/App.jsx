import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import AnimateTest from "./components/AnimateTest";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
// import Register from "./components/register-form";
import Register from "./components/register-form";
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
import "./style.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";
import Location from "./pages/Location";
import ReferPatient from "./pages/ReferPatient";
// import BalanceMobility from "./pages/condition-services/BalanceMobility";
import Brain from "./pages/condition-services/Brain-Injury";
import CerebralPalsy from "./pages/condition-services/CerebralPalsy";
import DifficultyInWalking from "./pages/condition-services/Limb-Loss";
import MotorNeuron from "./pages/condition-services/PainManagement";
import ParkinsonsDisease from "./pages/condition-services/ParkinsonsDisease";
import Spinal from "./pages/condition-services/Spinal-Cord";
import Stroke from "./pages/condition-services/Stroke-Recovery";
import TransverseMyelitis from "./pages/condition-services/TransverseMyelitis";
import MultipleSclerosis from "./pages/condition-services/multiple-sclerosis";
import IntakeForm from "./pages/get-started/IntakeForm";
import Questions from "./pages/get-started/Questions";
import RegistrationProcess from "./pages/get-started/RegistrationProcess";
import Test from "./pages/get-started/Test";
import OurVedios from "./pages/ourVideo";

// import ChatBot from '../src/pages/chatBot';

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
            {/* === Condition & Services === */}
            <Route path="conditions" element={<Service />} />
            <Route path="conditions/stroke-recovery" element={<Stroke />} />
            <Route path="spinal" element={<Spinal />} />
            <Route path="brain" element={<Brain />} />
            {/* <Route
              path="conditions/balance-mobility"
              element={<BalanceMobility />}
            /> */}
            <Route
              path="conditions/cerebral-palsy"
              element={<CerebralPalsy />}
            />
            <Route
              path="conditions/multiple-sclerosis"
              element={<MultipleSclerosis />}
            />
            <Route
              path="conditions/parkinsons"
              element={<ParkinsonsDisease />}
            />
            <Route
              path="conditions/transverse-myelitis"
              element={<TransverseMyelitis />}
            />
            <Route
              path="conditions/pain-management"
              element={<MotorNeuron />}
            />
            <Route
              path="conditions/difficulty-in-walking"
              element={<DifficultyInWalking />}
            />
            {/* get-started-page */}
            <Route path="/intake-forms" element={<IntakeForm />} />
            <Route
              path="/registration-process"
              element={<RegistrationProcess />}
            />
            <Route path="/Frequently-asked-questions" element={<Questions />} />
            {/* <Route path="chatbot" element={<ChatBot />} /> */}
            <Route path="/refer-patient" element={<ReferPatient />} />
            <Route path="/refer-patient/our-vedios" element={<OurVedios />} />
            <Route path="1test-2" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
