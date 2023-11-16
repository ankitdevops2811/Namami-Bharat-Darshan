import React from "react";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";

const CpCard = () => {
  return (
    <section
      className="services py-5"
      id="services"
      // style={{ backgroundColor: "aliceblue" }}
      style={{ width: "120%" }}
    >
      {/* <div
        className="container-xxl py-5"
        style={{ backgroundColor: "aliceblue" }}
      > */}
      {/* <div className="container"> */}
      {/* <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1>Our Programs</h1>
          </div> */}

      <div className="container">
        <div className="row">
          {cpData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ConditionCard {...card} />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default CpCard;
const cpData = [
  {
    imageSrc: "/mission-walk-images/7dfa808a-797c-438d-a32b-2d549672f1c5 2.JPG",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title:
      "Robot Based Gait Training Therapy for Pediatric Population with Cerebral Palsy",
    text: "This study is looking for children with Cerebral Palsy to wear an robotic exoskeleton to help improve walking ability.",
    // linkTo: "/pediatric-physiotherapy",
  },

  {
    imageSrc: "/mission-walk-images/4fb3b9f4-e81e-4b3b-8e89-b5527408fbd7.JPG",

    title: "Children with Cerebral Palsy - Trunk Control and Walking Study",
    text: "The primary purpose for this study is to determine the effects of a robotic training on trunk control and walking ability in children with cerebral palsy.",
    // linkTo: "/page1",
  }, //css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
