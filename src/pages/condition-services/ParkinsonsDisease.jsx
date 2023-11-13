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
            {/* <a href="" className="h4 text-white">Home</a> */}
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
              {/* <p className="mb-4" style={{ fontSize: '18px' }}>
                The sooner you start rehabilitation, the greater potential for recovery. Our pioneering work reveals that patients with stroke benefit greatly from early, high-intensity therapy … regardless of the type or severity of the stroke. We are the world’s choice for stroke care, research and outcomes.
                </p> */}
              <h1 className="display-5 mb-0" style={{ fontSize: "26px" }}>
                What Sets Us Apart
              </h1>

              <p className="text-body mb-4">
                Our Parkinson's Disease & Movement Disorders (PDMD) experts work
                with you to enhance your abilities and well-being through
                integrative & innovative care. Learn how we redefine outcomes.
              </p>

              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/img/price-1.jpg" />
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
                      <Button variant="primary">read more..</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/img/price-1.jpg" />
                    <Card.Body>
                      <Card.Title>PDMD Research</Card.Title>
                      <Card.Text>
                        Our program offers a wide range of research
                        opportunities for the motor, cognitive, behavioral and
                        emotional aspects of PDMD.
                      </Card.Text>
                      <Button variant="primary">read more..</Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/img/price-1.jpg" />
                    <Card.Body>
                      <Card.Title>Education & Community Outreach</Card.Title>
                      <Card.Text>
                        Providing education for our patients and families is an
                        essential part of our mission. Our PDMD team offers a
                        wide variety of educational opportunities and events.
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
                  //   src="img/strokerecovery.jpg"
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
                  {/* <p>
                    The NeuroSuit frames the body providing support and
                    resistance simultaneously. It facilitates proper movement
                    and provides additional weight bearing distributed
                    strategically throughout the body.
                  </p> */}
                  <img
                    decoding="async"
                    // fetchpriority="high"
                    width="300"
                    height="300"
                    className="size-full wp-image-31823 aligncenter"
                    src="/mission-walk-images/neuro.JPG"
                    // src="https://napacenter.org/wp-content/uploads/2021/09/Registered-Practitioner-logo.png"
                    alt=""
                  />
                </div>
                <div className="our_programs_details_right">
                  <h3>How We Heel</h3>
                  <p>
                    Every person with Parkinson’s disease or a movement disorder
                    has unique medical and therapeutic needs. Our doctors,
                    therapists and scientists collaborate using the most
                    advanced medical research and technology to facilitate the
                    best outcomes.
                  </p>

                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <ul className="list-unstyled">
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
                  // style={{ backgroundColor: "aliceblue" }}
                >
                  <div
                    className="programs_details_list_txt"
                    style={{ fontSize: "38px" }}
                  >
                    <b>Clinical Trials & Research Studies</b>
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
      {/* <ContactPagesCard /> */}
      {/* <!-- About End --> */}
      <section style={{ backgroundColor: "aliceblue" }}>
<div className="container-fluid mb-5">
  <div className="row">
    <div className="col-lg-6 mb-4">
      <img
        src="/mission-walk-images/8c16fa72-d690-4257-8d2f-8822be7c5d3e 2.JPG"
        alt="Contact Us"
        className="img-fluid"
        style={{ width: "100%" }}
      />
    </div>
    <div className="col-lg-6 mt-5">
      <h2
        className="mb-5"
        style={{
          marginBlock: "60px",
          fontSize: "40px",
          textAlign: "initial",
        }}
      >
        Feel free to Connect Mission Walk is always there for you.
      </h2>
      <h4>Hyderabad (Telangana)</h4>
      <p className="mb-3">
      Lake Vista Road Number 3, Hyderabad, Telangana 500089
      </p>
      <h4>Delhi NCR (Greater Noida)</h4>
      <p className="mb-3">
      : Ecotech-II, Knowledge Park III, Greater Noida, Uttar Pradesh 201308Mobile: +91 91773 00194
      </p>
      <h4>Pune (Maharastra)</h4>
      <p className="mb-3">
      Physiotherapy and Rehabilitation Center Sun Gloria, mouje Ambegaon Budruk, Narhe Ambegaon Rd, Dalavi Nagar, Katraj, Pune, Maharashtra 411046
      </p>
      <button className="btn btn-primary">Contact Us</button>
    </div>
  </div>
</div>
</section>

    </>
  );
};

export default ParkinsonsDisease;
