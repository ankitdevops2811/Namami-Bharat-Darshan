import Card from "react-bootstrap/Card";
import ContactPagesCard from "../../components/contactPagesCard";
import BrainCard from "./Cards/brain-Card";

const Brain = () => {
  return (
    <>
      {/* <!-- Hero Start --> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Brain Injury Recovery
            </h1>
            <i className="far fa-circle text-white px-2"></i>
            <p className="h4 text-white">
              People from all over the world seek our 70 years’ experience in
              treating the most complex traumatic brain injuries and illnesses.
              We bring you the latest and most promising treatments and
              therapies.
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
                Programs, Services & Patients
              </h1>

              <p
                className="text-body mb-4"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                You want to recover what’s most important in your life —
                mobility, independence, walking or speaking again. Together, we
                reach for your goals.
              </p>

              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/images/cs-image.jpeg" />
                    <Card.Body>
                      <Card.Title>
                        Brain Injury Recovery — What sets us apart?
                      </Card.Title>
                      <Card.Text>
                        See what sets us apart from other rehabilitation
                        hospitals and why our outcomes for stroke patients are
                        exceptional.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/images/cs-image2.jpeg" />
                    <Card.Body>
                      <Card.Title>Brain Injury Specialty Services</Card.Title>
                      <Card.Text>
                        Our wide array of services for brain injury patients
                        will help you and your family navigate your recovery.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: "300px" }}>
              <div className="position-relative h-100">
                <img
                  className="rounded wow zoomIn"
                  style={{ maxWidth: "120%", maxHeight: "100%" }}
                  data-wow-delay="0.9s"
                  src="/images/cs-image1.jpeg"
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

                    style={{ maxWidth: "100%", maxHeight: "50%" }}
                    className="size-full wp-image-31823 aligncenter"
                    src="/images/cs-image3.JPG"
                    alt=""
                  />
                </div>
                <div className="our_programs_details_right">
                  <h3></h3>

                  <h3 style={{ fontSize: "38px" }}>How We Heel</h3>
                  <p style={{ fontSize: "22px", textAlign: "justify" }}>
                    Our integrated team of physicians, nurses, therapists,
                    researchers and case managers understand the most complex
                    injuries. They create programs for each patient – tailored
                    to your individual goals. Therapy may take place in one or
                    several ability labs.
                  </p>

                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <ul className="list-unstyled" style={{ fontSize: "22px" }}>
                      <li>
                        <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                        Gait Training  Lab
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
                        Think + Speach Lab
                      </li>
                    </ul>
                  </div>

                  <h3 style={{ fontSize: "38px", textAlign: "justify" }}>
                    Science-Driven Care
                  </h3>
                  <p style={{ fontSize: "22px", textAlign: "justify" }}>
                    With nearly 200 clinical trials and research studies
                    specifically dedicated to improving function and recovery
                    from stroke (including treatment for aphasia) — we offer you
                    access to the world’s most advanced research, which can
                    directly impact your recovery.
                    <a
                    >
                      contacting us
                    </a>
                    to learn more.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="our_programs_details_list">
                <div className="programs_details_list_txt">
                  <b style={{ fontSize: "38px", textAlign: "justify" }}>
                    Clinical Trials & Research Studies
                  </b>
                </div>
                <div className="program_details_outer_div">
                  <div className="program_details_outer_div">
                    <BrainCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="video-iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/29LTq95V6f0?si=vLsQYOuggbtJKgah"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      <ContactPagesCard />
    </>
  );
};

export default Brain;
