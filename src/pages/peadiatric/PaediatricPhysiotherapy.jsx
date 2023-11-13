import React from "react";
import "./paediatric.css";

const PaediatricPhysiotherapy = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Paediatric Physiotherapy
            </h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
              About
            </a>
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
                  <h1 style={{ fontSize: "38px" }}>Paediatric Physiotherapy</h1>
                </div>
              </div>
              <p className="mb-4" style={{ fontSize: "22px" }}>
                Mission Walk takes an intensive approach to paediatric
                physiotherapy using the NeuroSuit and Multifunctional Therapy
                Units.At Mission Walk Centre, our highly trained paediatric
                physiotherapists challenge the child in a loving environment,
                pushing their performance and helping them achieve new
                developmental milestones. All of our therapists –physical,
                speech, and occupational—work with each other and with family
                members to assess each child’s current functioning level. Then
                they create an individualised plan to help each child achieve
                optimal results. We offer paediatric physiotherapy in both
                weekly and intensive settings.
              </p>
            </span>
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
                Our Approach to
                <span
                  // className="text-primary"
                  style={{ color: "darkgoldenrod" }}
                >
                  {" "}
                  Intensive Paediatric Physiotherapy
                </span>
              </h1>
              <p className="p-2" style={{ fontSize: "18px" }}>
                We take an intensive approach to physiotherapy with each child’s
                plan
                {/* consisting of 30 to 60 hours of vigorous therapy in just 3
                weeks  */}
                using the NeuroSuit and Universal Exercise Units. This highly
                effective method of treatment uses cutting-edge methods to
                challenge the child and achieve new physical abilities. The
                NeuroSuit helps hold the patient’s body in correct alignment and
                adds additional weight bearing through the use of bungee type
                bands that are attached to the suit.Our patients also
                participate in a variety of dynamic balance activities in the
                Multifunctional Therapy Unit, also called the SpiderCage.
              </p>
              {/* <p className="mb-5" style={{ fontSize: "18px" }}>
                Our patients also participate in a variety of dynamic balance
                activities in the Multifunctional Therapy Unit, also called the
                SpiderCage. These include transitioning from sitting to
                quadruped, quadruped to kneeling, and transition all the way to
                standing with the assistance of bungee cords attached to the
                patient from four angles. This equipment is referred to as the
                “SpiderCage” due to the eight bungees used to assist the
                patient.
              </p> */}
              <p className="mb-5" style={{ fontSize: "18px" }}>
                Physiotherapy can benefit your child if he/she is experiencing
                or has experienced:
              </p>
              <div>
                <ul className="list-unstyled" style={{ fontSize: "18px" }}>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
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
              className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end"
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <img
                src="/img/hq720.jpg"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
              <img
                src="/img/hq720.jpg"
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
                src="/img/hq720.jpg"
                alt="Image 1"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
              <img
                src="/img/hq720.jpg"
                alt="Image 2"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail position-absolute top-0 start-50 translate-middle-x"
                style={{ width: "80%", height:"180%" }}
              />
            </div>
          </div> */}
          </div>
        </div>
      </section>
      {/* next 1*/}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5">
            <h2>
              Paediatric physiotherapy services may help improve a child’s:
            </h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Range of Motion</h5>
                  <p className="card-text">
                    This can include immature or decreased motor control.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                {/* <div className="card bg-primary text-white"> */}
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Strength</h5>
                  <p className="card-text">Strength against gravity </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title">Balance</h5>
                  <p className="card-text">
                    Ability to maintain balance (tilting and righting responses)
                    and to keep oneself from falling (protective responses).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mt-5"
            data-aos="zoom-in-down"
            data-aos-offset="200"
          >
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Reflexes</h5>
                  <p className="card-text">
                    Automatic responses seen particularly in infants (palmar
                    grasp, positive support, asymmetrical tonic neck reflex
                    [ATNR] and labyrinthine)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Posture</h5>
                  <p className="card-text">
                    Alignment of the body in various positions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Tone</h5>
                  <p className="card-text">
                    Natural resistance in a muscle (increased tone is stiffness
                    and decreased tone is floppiness)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* next 2 */}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5">
            <h2>Paediatric physiotherapy services for children may include:</h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Exercise</h5>
                  <p className="card-text">
                    Stretching and strengthening activities and exercises to
                    increase a child’s range and quality of movement
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                {/* <div className="card bg-primary text-white"> */}
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Movement</h5>
                  <p className="card-text">
                    Establishing or reshaping movement patterns to follow normal
                    development{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title">Equilibrium Improvement</h5>
                  <p className="card-text">
                    Improving balance and equilibrium skills
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row mt-5"
            data-aos="zoom-in-down"
            data-aos-offset="200"
          >
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Posture Training</h5>
                  <p className="card-text">Improving postural control </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Gait Trainng</h5>
                  <p className="card-text">Gait training (walking)</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Orthopedics</h5>
                  <p className="card-text">
                    Evaluating the need for adaptive equipment and orthopedic
                    devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* last */}
      <section className="ftco-section py-5 mb-4">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h2 className="mb-1" style={{ fontSize: "40px" }}>
                Latest Picture From Gallery
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
      <section style={{ backgroundColor: "aliceblue" }}>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <img
                src="/img/hq720.jpg"
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
              {/* <p className="mb-3">
                Mission Walk is always there for you.
              </p> */}
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaediatricPhysiotherapy;
