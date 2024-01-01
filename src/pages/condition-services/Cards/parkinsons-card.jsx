import React from "react";
import ConditionCard from "../../../components/conditionCard";

const ParkinsonsCards = () => {
  return (
    <section className="services py-5" id="services" style={{ width: "120%" }}>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ConditionCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParkinsonsCards;
const cardData = [
  {
    imageSrc: "/images/degenerationofaneurong.jpg",
    title:
      "People with Parkinson's needed for Research on Digital Health Technology",
    text: "This study will explore different ways to integrate digital health technology and behavior change interventions into physical therapy settings to improve exercise monitoring and maintenance. We are looking for people with Parkinson's Disease who are referred to the Proactive PT Program at Shirley Ryan AbilityLab.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/images/OIP.jfif",
    title: "Sensory-specific peripheral stimulation for tremor management",
    text: "The Shirley Ryan AbilityLab is seeking patients with Parkinson’s disease or Essential Tremor, to study the effect and ability of muscle stimulation to reduce tremor.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/images/parkinsons.jpg",
    title: "COMET-C",
    text: "Seeking persons with communication difficulties due to stroke/aphasia, Parkinson’s Disease, cerebral palsy or traumatic brain injury to join a focus group.",
    linkTo: "/pediatric-speech",
  },
];
