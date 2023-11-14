import React from "react";
import CustomCard from "../../../components/Card";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";


const MsCard = () => {
  return (
    <section
      className="services py-5"
      id="services"
      style={{ backgroundColor: "aliceblue" }}
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
          {MsData.map((card, index) => (
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

export default MsCard;
const MsData = [
  {
    imageSrc: "/mission-walk-images/7dfa808a-797c-438d-a32b-2d549672f1c5 2.JPG",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-occupational",
  },

  // {
  //   imageSrc: "mission-walk-images/mission-walk-hyderabad-5cf92914afb61.jpeg",
  //   title: "Paediatric Speech Therapy",
  //   text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
  //   linkTo: "/page1",
  // },//css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
