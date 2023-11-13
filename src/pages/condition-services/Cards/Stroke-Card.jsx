import React from "react";
import CustomCard from "../../../components/Card";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";

const StrokeCards = () => {
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
          {cardData.map((card, index) => (
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

export default StrokeCards;
const cardData = [
  {
    imageSrc: "/mission-walk-images/620b6bc0-2526-4f8e-9dd7-f7bf1892ae4f 2.JPG",
    title: "Locomotor function following transcutaneous electrical spinal cord stimulation in individuals with hemiplegic stroke",
    text: "This study is looking for persons who have had a stroke to determine if spinal stimulation helps improve walking ability.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/cb9acd9e-9ab3-4bdc-b996-f53a5957cd87.JPG",
    title: "An Exploration of Acute Intermittent Hypoxia as a tool to Enhance Neural Recovery in Stroke Survivors; a pilot safety study.",
    text: "This is a Phase I safety study. Our plan consists of dose-escalation exposures with continual assessment of hypoxic conditioning impact in individuals with chronic stroke.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/mission-walk-images/06c8b886-0988-43f5-b120-7779c48e6cf3.JPG",
    title: "Improving Arm Movement Using Wearable Device After Stroke",
    text: "Mission-Walk is evaluating a new rehab therapy using wearable devices and a video game interface to improve arm movement after stroke. Participants use these wearable devices, called myoelectric computer interfaces, to play video games using their arm muscles.",
    linkTo: "/pediatric-speech",
  },
  // {
  //   imageSrc: "mission-walk-images/mission-walk-hyderabad-5cf92914afb61.jpeg",
  //   title: "Paediatric Speech Therapy",
  //   text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
  //   linkTo: "/page1",
  // },//css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
