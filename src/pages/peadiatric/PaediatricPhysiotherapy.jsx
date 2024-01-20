import ContactPagesCard from "../../components/contactPagesCard";
import "./paediatric.css";
import TitleBar from "../../components/therapy-tools/TitleBar";
import PediatricHeading from "../../components/pediatric/PediatricHeading";
import { pediatricContent } from "../../data/peadtricConstant";

const PaediatricPhysiotherapy = () => {
  return (
    <>
    <TitleBar name= 'Intensive Pediatric Physiotherapy' />
    <PediatricHeading 
     heading= 'Intensive Pediatric Physiotherapy'
     content = {pediatricContent.IntensivePediatric} 
     />
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
              <p
                className="p-2 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                We take an intensive approach to physiotherapy with each child’s
                plan using the NeuroSuit and Universal Exercise Units. This
                highly effective method of treatment uses cutting-edge methods
                to challenge the child and achieve new physical abilities. The
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
                <ul
                  className="list-unstyled animated zoomIn"
                  style={{ fontSize: "20px" }}
                >
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
              <img
                src="/images/paediatric3.jpg"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* next 1*/}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5 animated zoomIn">
            <h2>
              Pediatric physiotherapy services may help improve a child’s:
            </h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4 animated zoomIn">
                    Range of Motion
                  </h5>
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
                  <p className="card-text animated zoomIn">
                    Strength against gravity{" "}
                  </p>
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
                  <h5 className="card-title mb-5 animated zoomIn">
                    Equilibrium Improvement
                  </h5>
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
                  <h5 className="card-title mb-5 animated zoomIn">
                    Posture Training
                  </h5>
                  <p className="card-text animated zoomIn">
                    Improving postural control{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12 animated zoomIn">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5 animated zoomIn">
                    Gait Trainng
                  </h5>
                  <p className="card-text animated zoomIn">
                    Gait training (walking)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4 animated zoomIn">
                    Orthopedics
                  </h5>
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
                  src="/images/paediatric4.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/paediatric5.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/paediatric6.jpg"
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
                  src="/images/paediatric7.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate animated zoomIn">
                <img
                  className="img w-100 mb-3"
                  src="/images/paediatric8.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate animated zoomIn">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/paediatric9.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="video-iframe-container mt-5"
          style={{ marginLeft: "6%", marginRight: "6%" }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PbbWYtHpz6k?si=pftCnBlHAHi19TK6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* End */}
      <ContactPagesCard />
    </>
  );
};

export default PaediatricPhysiotherapy;
