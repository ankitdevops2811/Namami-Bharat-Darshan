import { Link } from "react-router-dom";
import "./therapy-2.css";

const Theratogs = () => {
  return (
    <div className="pb-5">
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn"> Theratogs</h1>
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
                    TheraTogs are orthotic undergarment and strapping products
                    that give individuals with sensorimotor impairment a highly
                    effective modality for improving postural alignment and
                    stability, movement skill and precision, and joint
                    stability.
                    {/* TheraTogs are an orthotic undergarment and strapping product recommended for children who may benefit from increased proprioception as well as improved postural alignment, stability, and/or prolonged muscle stretch to improve developmental and functional outcomes. */}
                  </p>
                </span>
              </div>
            </div>
            <div className="container-xxl">
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className="col-lg-5 animated zoomIn"
                    style={{
                      minHeight: "200px",
                      // width: "550px"
                    }}
                  >
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute w-100 h-100 rounded wow zoomIn"
                        data-wow-delay="0.9s"
                        src="/images/theratogs2.jpeg"
                        // style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      TheraTogs {""}
                      <span style={{ color: "darkgoldenrod" }}>Basics </span>
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      TheraTogs are an orthotic undergarment and strapping
                      product recommended for children who may benefit from
                      increased proprioception as well as improved postural
                      alignment, stability, and/or prolonged muscle stretch to
                      improve developmental and functional outcomes.
                    </p>
                    {/* <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Let&apos;s Talk About {""}
                      <span style={{ color: "darkgoldenrod" }}>WBV </span>
                    </h2> */}
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      TheraTogs may be useful for kiddos with: hypotonia,
                      ataxia, gait deviations, cerebral palsy, brain injury,
                      ASD, postural alignment issues, athetosis, weakness and
                      balance problems, joint laxity to name a few.
                    </p>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Patient&apos;s love Mission Walk because they work in
                      therapy sessions and, when worn in-between sessions,
                      continue to be effective for the wearer in providing
                      numerous additional hours of therapy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
              How it {""}
              <span style={{ color: "darkgoldenrod" }}>help&apos;s</span>?
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              TheraTogs are designed to be customized by clinicians to address
              the unique specific musculoskeletal, postural, balance, or
              movement issues of their clients. Worn next to the skin under
              clothing or over a diaper, the patented soft-foam material gently
              grips the wearer’s soft tissues to create biomechanical changes
              that are key to positive outcomes. A variety of strap lengths,
              widths, calibers of stiffness, and placement options optimize
              therapeutic and orthotic results.
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
      </div>
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <h1
              className="wow zoomIn pb-3"
              data-aos-offset="200"
              style={{ fontSize: "38px" }}
            >
              Benefits of {""}
              <span style={{ color: "darkgoldenrod" }}>TheraTog </span>
            </h1>
            <ul
              className=" wow zoomIn ps-1"
              data-wow-delay="0.11s"
              style={{ fontSize: "22px" }}
            >
              <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2 "></i>
                Improved functional alignment
              </li>
              <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>
                Gentle and prolonged stretch in an aligned position
              </li>
              <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                <span style={{ fontWeight: "500" }}>
                  Normalized bone and joint development due to improved
                  alignment
                </span>
              </li>
              <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                <span style={{ fontWeight: "500" }}>
                  Increased body awareness
                </span>
              </li>
              <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                <span style={{ fontWeight: "500" }}>
                  Postural stabilization
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theratogs;
