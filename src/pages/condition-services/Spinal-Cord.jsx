import Card from "react-bootstrap/Card";
import ContactPagesCard from "../../components/contactPagesCard";
import SpinalCards from "./Cards/spinalCard";

const Spinal = () => {
  return (
    <>
      {/* Spinal Heading Corosel */}
      {/* <!-- Start --> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Spinal Cord Injury{" "}
            </h1>
            <i className="far fa-circle text-white px-2"></i>
            <p className="h4 text-white">
              Our goal is to help you achieve your best outcome with
              cutting-edge treatments. As the world’s #1 referral choice for
              spinal cord injury, you benefit from our integration of medicine,
              research and technology.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- End --> */}

      {/* <!-- SpinalPage Start --> */}

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
                You want to recover what’s most important in your life — be it
                mobility, independence or walking again. Together we reach for
                those goals.
              </p>

              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/images/spinal-cord.jpeg" />
                    <Card.Body>
                      <Card.Title>SCI Recovery Program</Card.Title>
                      <Card.Text>
                        What sets us apart from other rehabilitation hospitals
                        and why our outcomes for spinal cord injury patients are
                        exceptional.
                      </Card.Text>
                      {/* <Button variant="primary">read more..</Button> */}
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="/images/cs-image10.jpeg" />
                    <Card.Body>
                      <Card.Title>SCI Specialty Services</Card.Title>
                      <Card.Text>
                        Our wide array of services, many available only here at
                        Shirley Ryan AbilityLab, will help you and your family
                        navigate your recovery.
                      </Card.Text>
                      {/* <Button variant="primary">read more..</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              </div>

            </div>
            <div className="col-lg-5">
              <div className="position-relative">
                <img
                  style={{ maxWidth: "120%", maxHeight: "100%" }}
                  className=" rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="/images/carousel-6.jpeg"
                  //   src="img/strokerecovery.jpg"
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
                    // fetchpriority="high"
                    // width="300"
                    // height="300"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    className="size-full wp-image-31823 aligncenter"
                    src="/images/cs-img6.jpeg"
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
                  <h3 style={{ fontSize: "38px" }}>Science-Driven Care</h3>
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
                <div className="">
                  <div
                    className="programs_details_list_txt"
                    style={{ fontSize: "38px" }}
                  >
                    <b>Clinical Trials & Research Studies</b>
                  </div>
                  <div className="program_details_outer_div">
                    <SpinalCards />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-iframe-container">
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GRRCrVxYh8Y?si=SuaHPEJLpikgP_fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                     
                    </iframe> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7rI43OqXzH4?si=kUx6KY7ki6tr0kvo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* <!-- About End --> */}

      {/* <ContactPagesCard /> */}
      <ContactPagesCard />
    </>
  );
};

export default Spinal;
