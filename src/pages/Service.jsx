import { Link } from "react-router-dom";
import ContactPagesCard from "../components/contactPagesCard";

const Service = () => {
  return (
    <>
      {/* <!-- Service Start --> */}
      <div className="container-fluid mt-5 wow fadeInUp" data-wow-delay="0.1s">
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
                  src="images/image2.jpeg"
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute w-100 h-100"
                  src="images/nbdlogo.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7" style={{ marginBottom: "25%" }}>
              <div className="section-title mb-5 mt-3">
                <h5
                  className="position-relative d-inline-block text-primary text-uppercase mb-3"
                  style={{ fontSize: "38px" }}
                >
                  Our Programs
                </h5>
                <h4
                  className="display-5 "
                  style={{ fontSize: "22px", textAlign: "justify" }}
                >
                  We go beyond traditional physical,occupational, and speech
                  therapy by using innovative tools and techniques that change
                  lives.
                </h4>
              </div>
              <div className="section-title mb-5">
                <h5
                  className="position-relative d-inline-block text-primary text-uppercase mb-3"
                  style={{ fontSize: "22px", textAlign: "justify" }}
                >
                  Discover our Programs
                </h5>
                <h4
                  className="display-5 mb-0"
                  style={{ fontSize: "22px", textAlign: "justify" }}
                >
                  At Mission-Walk, our dedicated and highly trained physical,
                  speech and occupational therapists use a diverse set of
                  innovative tools and therapies delivered through intensive
                  programs. These programs are customized specifically for each
                  child based on their needs, and provided at our centers, in a
                  playful and positive environment.{" "}
                </h4>
              </div>
              <div className="row g-5">
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
                      src="images/sevice_stroke.avif"
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
                  // style={{ objectFit: "cover" }}
                  style={{ width: "400px" }}
                >
                  <div className="rounded-top overflow-hidden">
                    <img
                      className="img-fluid"
                      src="images/spinal-cord.jpg"
                      alt=""
                      style={{ height: "240px", width: "400px" }}
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
                      src="images/service_braininjury.jpg"
                      alt=""
                    />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <Link to="/brain">
                      <h5 className="m-0">Brain Injury Recovery</h5>
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
                      src="images/service_multiplescelarasis.jpg"
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
                      src="images/service_parkisons.webp"
                      alt=""
                      style={{ height: "240px" }}
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
                      src="images/service_transverse-myelitis1.jpg"
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
                      src="images/service_motorneuron.jpg"
                      alt=""
                      style={{ height: "240px" }}
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
                      src="images/service_difficultyinwalk.jpg"
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
                  <Link to="/intake-forms">
                    <button>
                      <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Make Appointment</h3>
                        <p className="text-white mb-3">
                          Please Reach out to Mission-Walk Healpline Number
                        </p>
                        <h2 className="text-white mb-0">+91 9177300194</h2>
                      </div>
                    </button>
                  </Link>
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
