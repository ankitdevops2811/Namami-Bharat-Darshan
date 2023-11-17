import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ContactPagesCard from "../../components/contactPagesCard";
import ParkinsonsCards from "./Cards/parkinsons-card";

const ParkinsonsDisease = () => {
  return (
    <>
      {/* <div>About</div> */}
      {/* <!-- Hero Start --> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Parkinson's Disease & Neurologic Rehabilitation{" "}
            </h1>
            <i className="far fa-circle text-white px-2"></i>
            <p className="h4 text-white">
              With a comprehensive team of clinicians trained in treating
              Parkinson’s disease and movement disorders, we go beyond
              medication and surgery with specialized treatment including
              therapy, technology and scientific advances to dramatically
              improve abilities.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- About Start --> */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h1 className="display-5 mb-0" style={{ fontSize: "38px" }}>
                What Sets Us Apart
              </h1>

              <p className="text-body mb-4" style={{fontSize:"22px", textAlign:"justify"}}>
                Our Parkinson's Disease & Movement Disorders (PDMD) experts work
                with you to enhance your abilities and well-being through
                integrative & innovative care. Learn how we redefine outcomes.
              </p>

              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/mission-walk-images/WhatsApp Image 2023-11-17 at 1.02.24 AM.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        Parkinson's Disease & Movement Disorders Program
                      </Card.Title>
                      <Card.Text>
                        Our PDMD experts team with you to enhance your abilities
                        and well-being through integrative and innovative care.
                        Across all stages of the disease, we provide a holistic
                        and science-driven approach to providing care.
                      </Card.Text>
                      {/* <Button variant="primary">read more..</Button> */}
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/img-mission/IMG-20231115-WA0020.jpg" />
                    <Card.Body>
                      <Card.Title>PDMD Research</Card.Title>
                      <Card.Text>
                        Our program offers a wide range of research
                        opportunities for the motor, cognitive, behavioral and
                        emotional aspects of PDMD.
                      </Card.Text>
                      {/* <Button variant="primary">read more..</Button> */}
                    </Card.Body>
                  </Card>
                </div>
            
              </div>
              {/* <a
                href="intake-forms"
                className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a> */}
            </div>
            <div className="col-lg-5" style={{ minHeight: "300px" }}>
              <div className="position-relative h-100">
                <img
                  className=" rounded wow zoomIn"
                  data-wow-delay="0.9s"
                style={{ maxWidth: "120%", maxHeight:"100%" }}
                  
                  src="/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.52 PM (2).jpeg"
                  // style={{ objectFit: "cover" }}
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
                    // decoding="async"
                    // width="300"
                    // height="300"
                style={{ maxWidth: "100%", maxHeight:"50%" }}

                    className="size-full wp-image-31823 aligncenter"
                    src="/mission-walk-images/WhatsApp Image 2023-11-17 at 1.02.20 AM.jpeg"
                    alt=""
                  />
                </div>
                <div className="our_programs_details_right">
                  <h3 style={{fontSize:"38px", textAlign:"justify"}}>How We Heel</h3>
                  <p style={{fontSize:"22px", textAlign:"justify"}}>
                    Every person with Parkinson’s disease or a movement disorder
                    has unique medical and therapeutic needs. Our doctors,
                    therapists and scientists collaborate using the most
                    advanced medical research and technology to facilitate the
                    best outcomes.
                  </p>

                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <ul className="list-unstyled" style={{fontSize:"22px", textAlign:"justify"}}>
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
                  <h3 style={{fontSize:"38px", textAlign:"justify"}}>Science-Driven Care</h3>
                  <p style={{fontSize:"22px", textAlign:"justify"}}>
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
                    <b style={{fontSize:"38px", textAlign:"justify"}}>Clinical Trials & Research Studies</b>
                  </div>
                  <div className="program_details_outer_div">
                    <ParkinsonsCards />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <ContactPagesCard /> */}

      <ContactPagesCard />

    </>
  );
};

export default ParkinsonsDisease;
