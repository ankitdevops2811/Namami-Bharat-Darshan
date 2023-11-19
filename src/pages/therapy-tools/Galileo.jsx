import { Link } from "react-router-dom";
import "./therapy-2.css";


const Functional_Estim = () => {
  return (
    <div className="pb-5">
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn"> Galileo</h1>
          </div>
        </div>
      </div>
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <div className="container-xxl">
              <div className="page-header__content clearfix">
                <span className="page-subheader">
                  <p
                    className="mb-4 animated zoomIn  text-center"
                    style={{
                      fontSize: "36px",
                      fontWeight: "bolder",
                      textAlign: "justify",
                      color: "#808B96",
                    }}
                  >
                    Mission Walk uses the Galileo plate which provides a side
                    alternating motion based on the natural movement of human
                    gait, creating a tilting movement of the pelvis.
                  </p>
                </span>
              </div>
            </div>
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
                        src="/images/galileo-1.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Whole Body Vibration ( {""}
                      <span style={{ color: "darkgoldenrod" }}>WBV </span>)
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Whole Body Vibration (WBV) is delivered via a mechanical
                      vibrating platform. As the machine vibrates, it transmits
                      energy to the individual standing, sitting, lying or
                      kneeling on the plate causing the muscles to contract and
                      relax many times each second.
                    </p>
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Let&apos;s Talk About {""}
                      <span style={{ color: "darkgoldenrod" }}>WBV </span>
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Mission Walk uses the Galileo plate which provides a side
                      alternating motion based on the natural movement of human
                      gait, creating a tilting movement of the pelvis. With
                      frequencies ranging from 5 – 30 Hz depending upon the
                      platform, therapists are able to use the Galileo to
                      address a variety of therapeutic goals including balance
                      training, mobilization and stretching of tight muscles,
                      spasticity reduction, and strength and coordination
                      building.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
             Simulation of human {""}
              <span style={{ color: "darkgoldenrod" }}>gait </span>
              
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              Unique to Galileo WBV platform is the Wobbel function which
              generates randomly changing frequencies during the training. The
              variability in frequencies provided by the Wobbel function ensures
              that the patient gains the most out of their training time by
              disallowing the muscles to accommodate to the stimulation, forcing
              the body to constantly adapt to the changing frequencies. Mission
              Walk utilizes WBV training in all aspects of its therapy programs
              and your child may participate in Galileo training in any of their
              PT, OT, and ST hours.
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
