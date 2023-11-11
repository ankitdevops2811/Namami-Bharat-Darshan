import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faCode } from '@fortawesome/free-solid-svg-icons';
const ServiceCard = ({
  title,
  description,
  linkText,
  bgColor,
  textColor,
  icon,
}) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 col-12">
      <div
        className={`card ${bgColor ? `bg-${bgColor} text-${textColor}` : ""}`}
        style={{paddingBlock:"10%"}}
      >
        <div className="card-body">
          {/* <FontAwesomeIcon
            icon={icon}
            className={`p-2 text-white rounded ${
              bgColor ? `bg-${bgColor}` : ""
            }`}
          /> */}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* <a href="#" className="btn btn-primary">
            {linkText}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
 {/* <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5">
            <h3>
              Your child may benefit from paediatric occupational therapy if
              they display any of the following:
            </h3>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <ServiceCard
              title="Poor Fine Motor Skills"
              description="This can include immature or decreased motor control"
              linkText="Go somewhere"
              bgColor="white"
              textColor="dark"
              // icon={faUsers}
            />
            <ServiceCard
              title="Eye Hand Coordination"
              description="Decreased coordination."
              linkText="Go somewhere"
              bgColor="primary"
              textColor="white"
              // icon={faCode}
            />
            <ServiceCard
              title="Sensory Challenges"
              description="Overly sensitive to sensory input, under-responsive to sensory input, touches people or objects constantly (seeking sensory input), or crashes or bangs into people or objects"
              linkText="Go somewhere"
              bgColor="primary"
              textColor="white"
              // icon={faCode}
            />
          </div>
          <div
            className="row mt-5"
            data-aos="zoom-in-down"
            data-aos-offset="200"
          >
            <ServiceCard
              title="Poor Attention"
              description="Difficulty with sitting still, attention, and/or behavior,"
              linkText="Go somewhere"
              bgColor="white"
              textColor="dark"
              // icon={faCode}
            />
            <ServiceCard
              title="Emotional Challenges"
              description="Emotional reactivity, or difficulty calming self"
              linkText="Go somewhere"
              bgColor="primary"
              textColor="white"
              // icon={faCode}
            />
            <ServiceCard
              title="Social Challenges"
              description="Limited play skills, poor social development"
              linkText="Go somewhere"
              bgColor="white"
              textColor="dark"
              // icon={faCode}
            />
          </div>
          <div
            className="row mt-5"
            data-aos="zoom-in-down"
            data-aos-offset="200"
          >
            <ServiceCard
              title="Difficulty Sleeping"
              description="
              And other challenges associated with sleeping."
              linkText="Go somewhere"
              bgColor="white"
              textColor="dark"
              // icon={faCode}
            />
            <ServiceCard
              title="Independence"
              description="Limited independence in self-care skills"
              linkText="Go somewhere"
              bgColor="primary"
              textColor="white"
              // icon={faCode}
            />
            <ServiceCard
              title="Environmental Challenges"
              description="Difficulty transitioning or accepting change in the environment or a routine"
              linkText="Go somewhere"
              bgColor="white"
              textColor="dark"
              // icon={faCode}
            />
          </div>
        </div>
      </section> */}