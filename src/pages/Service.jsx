import { Link } from "react-router-dom";
import ContactPagesCard from "../components/contactPagesCard";

const Service = () => {
  return (
    // <div>sefvice</div>
    <>
      {/* <!-- Service Start --> */}
      <div className="container-fluid mt-5 wow fadeInUp" data-wow-delay="0.1s">
        {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s"> */}
        <div className="container">
          <div className="row g-5 mb-5">
            <div
              className="col-lg-5 wow zoomIn"
              data-wow-delay="0.3s"
              style={{ minHeight: "400px" }}
            >
              <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                <img
                  className="position-absolute w-100 h-100"
                  src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute w-100 h-100"
                  src="img/mission-walk-hyderabad-5cf92e33b8a96.jpeg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7" style={{ marginBottom: "25%" }}>
              <div className="section-title mb-5 mt-3">
                <h5 className="position-relative d-inline-block text-primary text-uppercase mb-3">
                  Our Programs
                </h5>
                <h4 className="display-5 " style={{ fontSize: "16px" }}>
                  We go beyond traditional physical,occupational, and speech
                  therapy by using innovative tools and techniques that change
                  lives.
                </h4>
              </div>
              <div className="section-title mb-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase mb-3">
                  Discover our Programs
                </h5>
                <h4 className="display-5 mb-0" style={{ fontSize: "16px" }}>
                  At Mission-Walk, our dedicated and highly trained physical,
                  speech and occupational therapists use a diverse set of
                  innovative tools and therapies delivered through intensive
                  programs. These programs are customized specifically for each
                  child based on their needs, and provided at our centers, in a
                  playful and positive environment.{" "}
                </h4>
              </div>
              <div className="row g-5">
                {/* <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/hq720.jpg" alt="jhds" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Pediatric Physiotherapy</h5>
                  </div>
                </div> */}
                {/* <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/download.jfif" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Neuro Physiotherapy</h5>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="" style={{ marginBottom: "40px" }}>
        <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
              {/* <div className="col-lg-7"> */}
              <div className="row g-5">
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/stroke-recovery">
                      <h5 className="m-0">Stroke Recovery</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/spinal">
                      <h5 className="m-0">Spinal Cord Injury</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/brain">
                      <h5 className="m-0">Brain Injury Recovery</h5>
                    </Link>
                  </div>
                </div>
                {/* <div
                  className="col-md-6 service-item wow zoomIn"
                  style={{ width: "400px" }}
                  data-wow-delay="0.6s"
                >
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/sddefault.jpg" alt="" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Spinal Cord Injury</h5>
                  </div>
                </div> */}
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/multiple-sclerosis">
                      <h5 className="m-0">Multiple Sclerosis</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/parkinsons">
                      <h5 className="m-0">Parkinson's Disease</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/transverse-myelitis">
                      <h5 className="m-0">Transverse Myelitis</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/motor-neuron">
                      <h5 className="m-0">Motor Neuron</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="img/mission-walk-hyderabad-5cf92e1761f8b.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/conditions/difficulty-in-walking">
                      <h5 className="m-0">Difficulty InWalking</h5>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-md-6 service-item wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{ width: "400px" }}
                >
                  <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                    <h3 className="text-white mb-3">Make Appointment</h3>
                    <p className="text-white mb-3">
                      Please Reach out to Mission-Walk Healpline Number
                    </p>
                    <h2 className="text-white mb-0">+91 9177300194</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactPagesCard />
      {/* <!-- Service End --> */}
    </>
  );
};

export default Service;
