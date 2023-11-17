import React from "react";
import ContactPagesCard from "../components/contactPagesCard";
import "./peadiatric/Peadiatric";
import { Link } from "react-router-dom";
import ConditionCard from "../components/conditionCard";

const PaediatricPhysiotherapy = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Referral Center
            </h1>
            <p
              className=" text-white animated zoomIn"
              style={{ fontSize: "38px" }}
            >
              The best rehabilitation hospital in india has gotten even better.
              See why your patients will benefit from care at the Mission-Walk
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
      <section className="bg-light p-5">
        <div className="container-xxl">
          <div className="page-header__content clearfix">
            <span className="page-subheader">
              <div className="container">
                <div
                  className="text-center mx-auto mb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ maxWidth: "600px" }}
                >
                  <h1 style={{ fontSize: "38px" }}> In Mission Walk ...</h1>
                </div>
              </div>
              <p
                className="mb-4 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                We treat people of all ages from around the world with a range
                of disabilities, from complex conditions like brain injury,
                spinal cord injury, and stroke to more common ailments such as
                arthritis and sports injuries.
              </p>
              <p
                className="mb-4 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                We’ve designed this page to help you learn about the unique
                programs and people that truly make AbilityLab the best
                post-acute rehabilitation choice for your patients. If you have
                questions about our programs and services, or if we can be of
                help in any way, please call the number at left.
              </p>
              <strong
                className="mb-4 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                HOURS OF OPERATION
              </strong>
              <strong style={{ fontSize: "17px", textAlign: "justify" }}>
                <p>MONDAY - FRIDAY 8:00 AM TO 7:30 PM</p>
                <p>PHONE-+91 9177300194</p>
                <p>E-mail- rehab@missionwalk.in</p>
              </strong>
              <h1></h1>
            </span>
          </div>
        </div>
      </section>
      <section>
        {/* <div className="container"> */}
        <div className="card">
          <div
            className="card-body shadow p-3 mb-5 bg-warning rounded"
            style={{ fontSize: "38px", textAlign: "center" }}
          >
            <Link to="/refer-patient/our-vedios">
              <button>
                <strong>Virtual Tour(Mission Walk) - Please Click Once ....</strong>
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* //next */}
      <section className="about my-5" id="about">
        <div className="container ">
          {/* <div className="text-center my-5">
            <h1 data-aos="fade-up" data-aos-offset="200">
              About<span className="text-primary"> me</span>
            </h1>
            <hr className="w-25 m-auto" />
          </div> */}
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-12 "
              data-aos="zoom-in"
              data-aos-offset="200"
            >
              <h1 data-aos="fade-up" data-aos-offset="200">
                {/* <h1> */}
                Our Patients are
                <span
                  // className="text-primary"
                  style={{ color: "darkgoldenrod" }}
                >
                  {" "}
                  Our Priority
                </span>
              </h1>
              <p
                className="p-2 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                Putting patients on the road to physical, emotional and
                psychological recovery is what we do. Here are a few patients
                who continuously inspire us with the strength of their resolve.
              </p>

              <p className="mb-5 animated zoomIn" style={{ fontSize: "22px" }}>
                Physiotherapy can benefit your child if he/she is experiencing
                or has experienced:
              </p>
              <div>
                <ul
                  className="list-unstyled animated zoomIn"
                  style={{ fontSize: "20px" }}
                >
                  <li>
                    <i className="bi bi-check-circle text-success me-2 "></i>
                    Prematurity
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Torticollis/Wry Neck (head tilt)
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Muscular Dystrophy
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Down Syndrome
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Spina Bifida
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Cerebral Palsy
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Stroke
                  </li>{" "}
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Delays in developmental milestones
                  </li>{" "}
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Hypotonia (weakness, low tone)
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Hypertonia (tightness, high tone)
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Gross motor incoordination
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Motor planning difficulties
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Gait difficulties
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Orthotic concerns
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Neurological problems
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-12  m-auto text-end animated zoomIn"
              data-aos="fade-right"
              data-aos-offset="200"
            >
              {/* <img
                src="/mission-walk-images/0a207ba2-d222-4cc8-9b88-906a29d7fcf1.JPG"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              /> */}
              <img
                src="/img-mission/IMG-20231115-WA0042.jpg"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
            </div>
            {/* <div
            className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            <div className="position-relative">
              <img
                src="/mission-walk-images/hq720.jpg"
                alt="Image 1"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
              <img
                src="/mission-walk-images/hq720.jpg"
                alt="Image 2"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail position-absolute top-0 start-50 translate-middle-x"
                style={{ width: "80%", height:"180%" }}
              />
            </div>
          </div> */}
          </div>
          <hr className="hr mb-0 mt-5" />
        </div>
      </section>
      {/* next 1*/}

      <section>
        <div>
          <div className="section-title">
            <h5
              className="  text-primary text-uppercase mb-4 "
              style={{ textAlign: "center", fontSize: "38px" }}
            >
              Our Programs
            </h5>

            <h4
              className="display-5"
              style={{ textAlign: "center", fontSize: "22px" }}
            >
              We go beyond traditional physical,occupational, and speech therapy
              by using innovative tools and techniques that change lives.
            </h4>
          </div>

          <div
            className="section-title mb-5 mt-4 my-5"
            style={{ textAlign: "center", fontSize: "38px" }}
          >
            {/* <h4 className="position-relative  text-primary text-uppercase mb-3">
                  Discover our Programs
                </h4> */}
            <h4
              className="display-5"
              style={{ textAlign: "center", fontSize: "22px" }}
            >
              At Mission-Walk, our dedicated and highly trained physical, speech
              and occupational therapists use a diverse set of innovative tools
              and therapies delivered through intensive programs. These programs
              are customized specifically for each child based on their needs,
              and provided at our centers, in a playful and positive
              environment.{" "}
            </h4>
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
                  ></div>
                </div>
              </div>
              <hr className="hr mb-0 mt-5" />
            </div>
          </div>
        </section>
      </section>

      {/* next 2 */}
      <div className="programs_details_list_txt" style={{ fontSize: "38px" }}>
        <b>The Mission Walk Difference</b>
      </div>
      <div className="program_details_outer_div">
        <section
          className="services py-2"
          id="services"
          style={{ width: "100%" }}
        >
          <div className="container aligns-items-center">
            <div className="row">
              {cardData.map((card, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-5">
                  <ConditionCard {...card} />
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </section>
      </div>
      {/* last */}
      {/* End */}
      <ContactPagesCard />
    </>
  );
};

export default PaediatricPhysiotherapy;
const cardData = [
  {
    imageSrc: "/mission-walk-images/istockphoto-1059268632-170667a.jpg",
    title: "Global Patient Services",
    text: "Patients from around the world choose us for our expertise and patient care services. Our expert team navigates all obstacles so you can focus on recovery.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/OIP.jfif",
    title: "Workers' Compensation",
    text: "Mission Walk has decades of experience in workers' compensation cases, and we are dedicated to making things work smoothly for you.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/mission-walk-images/54.webp",
    title: "National Patients",
    text: "Patients travel to the AbilityLab from across the United States to take advantage of our inpatient, DayRehabCenter®, outpatient, and ExpertEval® services.",
    linkTo: "/pediatric-speech",
  },
  // {
  //   imageSrc: "mission-walk-images/mission-walk-hyderabad-5cf92914afb61.jpeg",
  //   title: "Paediatric Speech Therapy",
  //   text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
  //   linkTo: "/page1",
  // },//css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
