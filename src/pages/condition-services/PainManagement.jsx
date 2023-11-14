import React from 'react'
import Card from 'react-bootstrap/Card';
import PainManagement from "./Cards/painManagement";
import ContactPagesCard from "../../components/contactPagesCard";

const MotorNeuron = () => {
  return (

    <>
      {/* <div>About</div> */}
      {/* <!-- Hero Start --> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Pain Management</h1>
            <i className="far fa-circle text-white px-2"></i>
            <p className="h4 text-white">We address pain in two distinct ways: Chronic pain cases for conditions like sciatic nerve pain, amputation or long-term back pain are treated at our Pain Management Center. Cases of acute or short-term pain are seen by our expert DayRehab® and outpatient clinicians.</p>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- About Start --> */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h1 className="display-5 mb-0" style={{ fontSize: '26px' }}>
                Our Patients are Our Priority
              </h1>

              <p className="text-body mb-4">We have varied departments and resources specializing in addressing all levels of pain for patients. Check out a few of these groups and individual success stories.</p>

              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/mission-walk-images/3e82004b-1f7b-43d1-aa1a-6703185f9355.JPG" />
                    <Card.Body>
                      <Card.Title>Pain Management Center</Card.Title>
                      <Card.Text>
                        Helping patients manage their pain and improve quality of life through interdisciplinary treatments and developing long-term strategies and plans.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9 2.JPG" />
                    <Card.Body>
                      <Card.Title>Adolescent Pain + POTS Program</Card.Title>
                      <Card.Text>
                        Persistent pain can upset your teen’s ability to concentrate in school, participate in sports and socialize with friends. We’re here to help.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9 2.JPG" />
                    <Card.Body>
                      <Card.Title>Outpatient Care</Card.Title>
                      <Card.Text>
                        Our 14 outpatient and 23 Alliance therapy sites are spread over a wide geographical area and support your therapy needs by offering care closer to home.
                      </Card.Text>
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
                  src="/mission-walk-images/656e4782-2f1e-4672-b384-d4db2f053360.JPG"
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
                    className="size-full wp-image-31823 aligncenter"
                    src="/mission-walk-images/cb9acd9e-9ab3-4bdc-b996-f53a5957cd87.JPG"
                    alt=""
                  />
                </div>
                <div className="our_programs_details_right">
                  <h3></h3>

                  <h3>How We Heel</h3>
                  <p>
                    All of our pain programs are informed by the innovative research conducted in our Ability Labs. Our doctors, therapists and scientists work together to bring you the best care with the most advanced medical research and technology.
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
                    With hundreds of clinical studies under way, we offer you access to the world’s most advanced therapeutic techniques and research, which can directly impact your outcome. New therapies may include application of technology, biological materials and pharmacological solutions specific to neural action.
                    <a href="http://www.napacenter.org/contact/">
                      contacting us
                    </a>
                    to learn more.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="our_programs_details_list">
                <div className="programs_details_list_txt">

                  <b>Clinical Trials & Research Studies</b>
                </div>
                <div className="program_details_outer_div">
                  <div className="program_details_outer_div">
                    <PainManagement />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* Contact Page Dynamic Called */}
      <ContactPagesCard />
    </>
  )
}

export default MotorNeuron