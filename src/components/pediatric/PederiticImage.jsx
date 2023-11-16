import React from "react";
import "./pediatric.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheelchairMove } from "@fortawesome/free-solid-svg-icons";

const PederiticImage = () => {
  return (
    <>
      <section className="ftco-section bg-light mt-1">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center animated zoomIn">
              <h2 className="mb-1 ">Benefit of Physiotherapy</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-end pe-md-4 animated zoomIn">
                  {/* <div className="text text-md-end pe-md-4"> */}
                  {/* <h3>Acceptance &amp; Commitment Therapy</h3> */}
                  <h3>Early Intervention</h3>
                  <p style={{ textAlign: "justify" }}>
                    Involves early intervention, addressing developmental issues
                    or physical challenges in children at an early age.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-end pe-md-4 animated zoomIn">
                  <h3 style={{ textAlign: "" }}>Motor Skills Development</h3>
                  <p style={{ textAlign: "justify" }}>
                    Physiotherapy helps children develop and improve motor
                    skills, including both gross motor skills and fine motor
                    skills.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  {/* <span className="flaticon-meditation"> */}
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                  {/* </span> */}
                </div>
                <div className="text text-md-end pe-md-4 animated zoomIn">
                  <h3>Muscle Strength and Endurance</h3>
                  <p style={{ textAlign: "justify" }}>
                    The therapy sessions are designed to enhance muscle
                    strength, endurance, and overall physical fitness in
                    children.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center order-md-last">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-end pe-md-4 animated zoomIn">
                  <h3>Improves Balance and Coordination</h3>
                  <p style={{ textAlign: "justify" }}>
                    It focuses on activities that improve balance and
                    coordination, essential for various daily activities and
                    overall physical independence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 d-flex">
              <div
                className="img img-services animated zoomIn"
                // className="img img-services w-100"
                style={{
                  // backgroundImage:
                  //   "url(/mission-walk-images/4c747fa9-0cfc-4212-8bf3-75a3d076d71f.JPG)",
                }}
              >
                <img
                  src="/img-mission/IMG-20231115-WA0057.jpg"
                  alt="img" style={{
                    width: "100%",
                    height: "95%"
                  }}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-start ps-md-3 animated zoomIn">
                  <h3>Respiratory Conditions</h3>
                  <p>
                    Beneficial for children with respiratory issues, helping to
                    improve breathing patterns, lung function, and overall
                    respiratory health.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-start ps-md-4 animated zoomIn">
                  <h3>Pain Management</h3>
                  <p>
                    Physiotherapy can be beneficial in managing pain associated
                    with certain pediatric conditions or injuries.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-start ps-md-4 animated zoomIn">
                  <h3>Post-Surgery Rehabilitation</h3>
                  <p>
                    For children who have undergone surgery, especially
                    orthopedic or neurological procedures, physiotherapy plays a
                    crucial role.
                  </p>
                </div>
              </div>
              <div className="services-2 ftco-animate d-flex w-100">
                <div className="icon d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    icon={faWheelchairMove}
                    className="fa-thin"
                    beat
                  />
                </div>
                <div className="text text-md-start ps-md-4 animated zoomIn">
                  <h3>Neurological Conditions</h3>
                  <p>
                    Is often utilized for children with neurological conditions
                    such as cerebral palsy or developmental delays. It focuses
                    on improving movement patterns and function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PederiticImage;
