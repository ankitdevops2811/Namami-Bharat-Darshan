import React from "react";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";

const BrainCard = () => {
  return (
    <section
      className="services py-5"
      id="services"
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

export default BrainCard;
const cardData = [
  {
    imageSrc: "/mission-walk-images/7dfa808a-797c-438d-a32b-2d549672f1c5 2.JPG",
    title: "Stimulating neuroplasticity in TBI with acute intermittent hypoxia",
    text: "We are studying whether briefly reducing oxygen consumption, equivalent to being on top of a mountain, is safe and stimulates neuroplasticity in people who have had a concussion or a mild to moderate traumatic brain injury (TBI).",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-17 at 1.02.24 AM.jpeg",
    title: "COMET-C",
    text: "Seeking persons with communication difficulties due to stroke/aphasia, Parkinson’s Disease, cerebral palsy or traumatic brain injury to join a focus group.",
    // linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/mission-walk-images/1ccf28b6-2704-4298-8378-e2cd21c07c34.JPG",
    title:
      "Neuromodulation and Neurorehabilitation for Treatment of Functional Deficits after mTBI plus PTSD",
    text: "The purpose of this study is to alleviate persisting attention deficits related to mild TBI and PTSD by treating the neurocognitive system of attention.",
    // linkTo: "/pediatric-speech",
  },
  // {
  //   imageSrc: "mission-walk-images/mission-walk-hyderabad-5cf92914afb61.jpeg",
  //   title: "Paediatric Speech Therapy",
  //   text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
  //   linkTo: "/page1",
  // },//css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
