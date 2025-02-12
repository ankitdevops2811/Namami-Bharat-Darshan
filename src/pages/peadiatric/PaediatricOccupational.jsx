import ContactPagesCard from "../../components/contactPagesCard";
import "./paediatric.css";
import TitleBar from "../../components/therapy-tools/TitleBar";
import PediatricHeading from "../../components/pediatric/PediatricHeading";
import { pediatricContent } from "../../data/PeadtricConstant";

const PaediatricOccupational = () => {
  return (
    <>
     <TitleBar name= 'Paediatric Occupational Therapy' />
     <PediatricHeading 
     heading= 'Paediatric Occupational Therapy'
     content = {pediatricContent.PediatricPrimary} 
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
              className="col-sm-12 col-md-6 col-lg-6 col-12"
              style={{ fontSize: "38px" }}
              data-aos="zoom-in"
              data-aos-offset="200"
            >
              <h1
                data-aos="fade-up"
                data-aos-offset="200"
                style={{ fontSize: "38px" }}
              >
                {/* <h1> */}
                What Are the Benefits of{" "}
                <span
                  // className="text-primary"
                  style={{ color: "darkgoldenrod" }}
                >
                  {" "}
                  Children’s Occupational Therapy?
                </span>
              </h1>
              <p
                className="p-2 animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                Occupational therapy can benefit children with a wide variety of
                diagnoses, including but not limited to: autism, birth injuries,
                cerebral palsy, developmental delays, juvenile rheumatoid
                arthritis, sensory processing disorders, traumatic brain or
                spinal cord injuries, sensory processing disorders, and more.
              </p>
              <p className="mb-5" style={{ fontSize: "22px" }}>
                Additionally, pediatric OT may help your child with the
                following:
              </p>
              <div>
                <ul className="list-unstyled" style={{ fontSize: "20px" }}>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Sensory management
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Engaging in play activities
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Learning to navigate the environment
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Removing barriers to learning to help the child become more
                    focused
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Practice appropriate social interactions and communication
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Establishing autonomy and accomplishment in the daily
                    routine, such as brushing hair or teeth
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
                src="/images/paediatric.JPG"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "65%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* next */}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5">
            {/* <h1>
              Our<span className="text-primary"> Services</span>
            </h1> */}
            <h2>
              Your child may benefit from paediatric occupational therapy if
              they display any the following
            </h2>
            {/* <hr className="w-25 m-auto" /> */}
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  {/* <i className="fa fa-users bg-primary p-2 text-white rounded"></i> */}
                  {/* <FontAwesomeIcon icon={faUsers} className="bg-primary p-2 text-white rounded" /> */}
                  <h5 className="card-title mb-5">Poor Fine Motor Skills</h5>
                  <p className="card-text">
                    This can include immature or decreased motor control.
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
                  <h5 className="card-title mb-5">Eye Hand Coordination</h5>
                  <p className="card-text animated zoomIn">
                    This basically include decreased eye hand coordination.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title">Sensory Challenges</h5>
                  <p
                    className="card-text animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
                    Overly sensitive to sensory input, under-responsive to
                    sensory input, touches people or objects constantly (seeking
                    sensory input), or crashes or bangs into people or objects
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
                  <h5 className="card-title mb-4">Poor Attention</h5>
                  <p className="card-text animated zoomIn">
                    Difficulty with sitting still, attention, and/or behavior.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Emotional Challenges</h5>
                  <p className="card-text animated zoomIn">
                    Emotional reactivity, or difficulty calming self.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Social Challenges</h5>
                  <p className="card-text animated zoomIn">
                    Limited play skills, poor social development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  {/* <FontAwesomeIcon icon={faUsers} className="bg-primary p-2 text-white rounded" /> */}
                  <h5 className="card-title mb-5">Difficulty Sleeping</h5>
                  <p className="card-text animated zoomIn">
                    And other challenges associated with sleeping.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-5">Independence</h5>
                  <p className="card-text animated zoomIn">
                    Limited independence in self-care skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Environmental Challenges</h5>
                  <p className="card-text animated zoomIn">
                    Difficulty transitioning or accepting change in the
                    environment or a routine
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
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
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/paediatric1.JPG"
                  alt="img"
                  //   width="300px"
                  // height="600px"
                  //   style={{ width: "40%" }}
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/paediatric2.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/neuro.JPG"
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
                  src="/images/cs-image6.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/pediatric-5.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3 animated zoomIn"
                  src="/images/cs-image3.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="video-iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ckfzCOSDFzc?si=kv1GlhA_tzeNEysx"
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

export default PaediatricOccupational;
