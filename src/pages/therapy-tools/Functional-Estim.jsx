import { Link } from "react-router-dom";
import "./therapy-2.css";
import TitleBar from "../../components/therapy-tools/TitleBar";
import PageHeading from "../../components/therapy-tools/PageHeading";
import { therapytools } from "../../data/Constant";


const Functional_Estim = () => {
  return (
    <div className="pb-5">
      <TitleBar name = 'Functional E stim' />
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <PageHeading heading={ therapytools.FES} /> 
            <div className="container-xxl">
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className="col-lg-5 animated zoomIn"
                    style={{ minHeight: "500px" }}
                  >
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute w-100 h-100 rounded wow zoomIn"
                        data-wow-delay="0.9s"
                        src="/images/functional-estim-2.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Functional Electrical Stimulation ( {""}
                      <span style={{ color: "darkgoldenrod" }}>FES </span>)
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Functional electrical stimulation (FES) is a modality
                      aimed at improving strength, coordination, endurance,
                      sensory feedback and timing in muscles used to promote
                      improved motor control and strength in patients.
                    </p>
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Let&apos;s Talk About {""}
                      <span style={{ color: "darkgoldenrod" }}>FES </span>
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Using a device and small adhesive electrodes, electrical
                      stimulation involves applying low level electrical
                      impulses to targeted muscles causing them to contract. It
                      is implemented during therapeutic activities to assist
                      with promoting or restoring function in muscles that may
                      be weak and/or uncoordinated, and to assist with
                      decreasing spasticity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
            How {""}
              <span style={{ color: "darkgoldenrod" }}>FES </span>
               Work&apos;s ?
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              Electrical stimulation can be used on all parts of the body
              including the back, legs, feet, arms and hands and is integrated
              into occupational, physical and speech therapy sessions at Our
              Center.
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functional_Estim;
