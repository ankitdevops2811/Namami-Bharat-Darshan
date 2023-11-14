import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StrokeCards from "./Cards/Stroke-Card";
import ContactPagesCard from "../../components/contactPagesCard";

const Stroke = () => {
  return (
    <>
      {/* Stroke Heading Corosel */}
      {/* <!-- Start --> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Stroke Recovery
            </h1>
            <i className="far fa-circle text-white px-2"></i>
            <p className="h4 text-white">
              The sooner you start rehabilitation, the greater potential for
              recovery. Our pioneering work reveals that patients with stroke
              benefit greatly from early, high-intensity therapy … regardless of
              the type or severity of the stroke. We are the world’s choice for
              stroke care, research and outcomes.
            </p>
          </div>
        </div>
      </div>
      {/* <!--End --> */}

      {/* ****** <!-- Stroke Content Start -->****** */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h1 className="display-5 mb-4" style={{ fontSize: "35px" }}>
                Programs, Services & Patients
              </h1>

              <p className="text-body mb-4" style={{ fontSize: "20px" }}>
                You want to recover what’s most important in your life — be it
                mobility, independence, wlking, swallowing or speaking again.
                Together we reach for those goals.
              </p>

              <div className="row g-5">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/mission-walk-images/3763c9e4-8616-469a-969d-65b603b11caa 3.JPG" />
                    <Card.Body>
                      <Card.Title>
                        Stroke Recovery— What sets us apart?
                      </Card.Title>
                      <Card.Text>
                        See what sets us apart from other rehabilitation
                        hospitals and why our outcomes for stroke patients are
                        exceptional.
                      </Card.Text>
                      <Button variant="primary">read more..</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/mission-walk-images/44e8f869-bf91-4d6c-a734-08d17fdbb518.JPG" />
                    <Card.Body>
                      <Card.Title>Stroke Specialty Services</Card.Title>
                      <Card.Text>
                        Our wide array of services for stroke patients will help
                        you and your family navigate your recovery.
                      </Card.Text>
                      <Button variant="primary">read more..</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <a
                href="appointment.html"
                className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: "300px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="/img/mission-walk-hyderabad-5cf92914afb61.jpeg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="our_programs_details_inner">
                <div className="our_programs_details_left">
                  <img
                    decoding="async"
                    width="300"
                    height="300"
                    className="position-absolute w-400 h-50 rounded wow aligncenter"
                    src="/mission-walk-images/4c747fa9-0cfc-4212-8bf3-75a3d076d71f 2.JPG"
                    alt=""
                  />
                </div>
                <div className="our_programs_details_right">
                  <h3></h3>
                  <h3>How We Heel</h3>
                  <p>
                    Our integrated team of physicians, nurses, therapists,
                    researchers and case managers understand the most complex
                    injuries. They create programs for each patient – tailored
                    to your individual goals. Therapy may take place in one or
                    several ability labs.
                  </p>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <ul className="list-unstyled" style={{ fontSize: "18px" }}>
                      <li>
                        <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                        Legs + Walking Lab
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                        Arms + Hands Lab
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                        Strength + Endurance Lab
                      </li>
                      <li>
                        <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                        Think + Speak Lab
                      </li>
                    </ul>
                  </div>
                  <h3>Science-Driven Care</h3>
                  <p>
                    With nearly 200 clinical trials and research studies
                    specifically dedicated to improving function and recovery
                    from stroke (including treatment for aphasia) — we offer you
                    access to the world’s most advanced research, which can
                    directly impact your recovery.
                    <a href="http://www.napacenter.org/contact/">
                      contacting us
                    </a>
                    to learn more.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="our_programs_details_list">
                <div
                  className=""
                >
                  <div
                    className="programs_details_list_txt"
                    style={{ fontSize: "38px" }}
                  >
                    <b>Clinical Trials & Research Studies</b>
                  </div>
                  <div className="program_details_outer_div">
                    <StrokeCards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* Contact Card /> */}
      <ContactPagesCard />
    </>
  );
};

export default Stroke;
