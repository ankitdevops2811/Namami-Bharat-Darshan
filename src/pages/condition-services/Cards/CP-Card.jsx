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
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.44 PM.jpeg",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/a61fabe4-341f-46ad-991b-b7f3ec89f70c.JPG",
    title:
      "Robot Based Gait Training Therapy for Pediatric Population with Cerebral Palsy",
    text: "This study is looking for children with Cerebral Palsy to wear an robotic exoskeleton to help improve walking ability.",
    // linkTo: "/pediatric-physiotherapy",
  },

  {
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.47 PM.jpeg",

    title: "Children with Cerebral Palsy - Trunk Control and Walking Study",
    text: "The primary purpose for this study is to determine the effects of a robotic training on trunk control and walking ability in children with cerebral palsy.",
    // linkTo: "/page1",
  }, //css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
