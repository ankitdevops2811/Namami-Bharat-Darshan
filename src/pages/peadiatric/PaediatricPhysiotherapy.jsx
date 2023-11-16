import React from "react";
import ContactPagesCard from "../../components/contactPagesCard";
import "./paediatric.css";

const PaediatricPhysiotherapy = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
             Intensive Pediatric Physiotherapy
            </h1>
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
                  <h1 style={{ fontSize: "38px" }}> Intensive Pediatric Physiotherapy</h1>
                </div>
              </div>
              <p className="mb-4 animated zoomIn" style={{ fontSize: "22px", textAlign:"justify" }}>
                Mission Walk takes an intensive approach to pediatric
                physiotherapy using the NeuroSuit and Multifunctional Therapy
                Units.At Mission Walk Centre, our highly trained pediatric
                physiotherapists challenge the child in a loving environment,
                pushing their performance and helping them achieve new
                developmental milestones. All of our therapists –physical,
                speech, and occupational—work with each other and with family
                members to assess each child’s current functioning level. Then
                they create an individualised plan to help each child achieve
                optimal results. We offer pediatric physiotherapy in both
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
                  Intensive Pediatric Physiotherapy
                </span>
              </h1>
              <p className="p-2 animated zoomIn" style={{ fontSize: "22px", textAlign:"justify" }}>
                We take an intensive approach to physiotherapy with each child’s
                plan
               
                using the NeuroSuit and Universal Exercise Units. This highly
                effective method of treatment uses cutting-edge methods to
                challenge the child and achieve new physical abilities. The
                NeuroSuit helps hold the patient’s body in correct alignment and
                adds additional weight bearing through the use of bungee type
                bands that are attached to the suit.Our patients also
                participate in a variety of dynamic balance activities in the
                Multifunctional Therapy Unit, also called the SpiderCage.
              </p>

              <p className="mb-5 animated zoomIn" style={{ fontSize: "22px" }}>
                Physiotherapy can benefit your child if he/she is experiencing
                or has experienced:
              </p>
              <div>
                <ul className="list-unstyled animated zoomIn" style={{ fontSize: "20px" }}>
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
              className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end animated zoomIn"
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
        </div>
      </section>
      {/* next 1*/}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5 animated zoomIn" >
            <h2>
              Pediatric physiotherapy services may help improve a child’s:
            </h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4 animated zoomIn">Range of Motion</h5>
                  <p className="card-text animated zoomIn">
                    This can include immature or decreased motor control.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                {/* <div className="card bg-primary text-white"> */}
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Strength</h5>
                  <p className="card-text animated zoomIn">Strength against gravity </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title">Balance</h5>
                  <p className="card-text animated zoomIn">
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
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Reflexes</h5>
                  <p className="card-text animated zoomIn">
                    Automatic responses seen particularly in infants (palmar
                    grasp, positive support, asymmetrical tonic neck reflex
                    [ATNR] and labyrinthine)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
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
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Tone</h5>
                  <p className="card-text animated zoomIn">
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
          <div className="text-center my-5 animated zoomIn">
            <h2>Pediatric physiotherapy services for children may include:</h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Exercise</h5>
                  <p className="card-text animated zoomIn">
                    Stretching and strengthening activities and exercises to
                    increase a child’s range and quality of movement
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                {/* <div className="card bg-primary text-white"> */}
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Movement</h5>
                  <p className="card-text animated zoomIn">
                    Establishing or reshaping movement patterns to follow normal
                    development{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5 animated zoomIn">Equilibrium Improvement</h5>
                  <p className="card-text animated zoomIn">
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
                  <h5 className="card-title mb-5 animated zoomIn">Posture Training</h5>
                  <p className="card-text animated zoomIn">Improving postural control </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5 animated zoomIn">Gait Trainng</h5>
                  <p className="card-text animated zoomIn">Gait training (walking)</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4 animated zoomIn">Orthopedics</h5>
                  <p className="card-text animated zoomIn">
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
            <div className="col-md-4 animated zoomIn">
              <div className="classes w-100 ftco-animate animated zoomIn">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/img-mission/IMG-20231115-WA0049.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/img-mission/IMG-20231115-WA0046.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/img-mission/IMG-20231115-WA0053.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/img-mission/IMG-20231115-WA0052.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate animated zoomIn">
                <img
                  className="img w-100 mb-3"
                  src="/img-mission/IMG-20231115-WA0048.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate animated zoomIn">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/img-mission/IMG-20231115-WA0054.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
           
          </div>
        
        </div>
        <div className="video-iframe-container mt-5" style={{marginLeft:"6%", marginRight:"6%"}}>
                    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/PbbWYtHpz6k?si=pftCnBlHAHi19TK6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                     
                    </iframe>
                             </div>
      </section>
      {/* End */}
      <ContactPagesCard />
    </>
  );
};

export default PaediatricPhysiotherapy;
