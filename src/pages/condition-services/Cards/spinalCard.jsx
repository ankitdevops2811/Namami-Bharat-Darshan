import React from "react";
import ConditionCard from "../../../components/conditionCard";

const SpinalCards = () => {
  return (
    <section
      className="services py-5"
      id="services"
      style={{ backgroundColor: "aliceblue" }}
    >
     

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

export default SpinalCards;
const cardData = [
  {
    imageSrc: "/img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title:
      "A Multi-Center Clinical Trial to Evaluate the Effectiveness of Intermittent Hypoxia Therapy in Individuals with SCI",
    text: "A study to investigate the effectiveness of daily acute intermittent hypoxia therapy (dAIH), coupled with a massed practice intervention or the use of high repetition training.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title:
      "Locomotor function following transcutaneous electrical spinal cord stimulation in individuals with hemiplegic stroke",
    text: "This study is looking for persons who have had a stroke to determine if spinal stimulation helps improve walking ability.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title: "Repetitive Acute Intermittent Hypoxia for Spinal Cord Repair",
    text: "This research is being conducted to study the effects of breathing low oxygen air (hypoxia) and exercise training on recovery of upper limb (arms and hands) and lower limb (legs) function in people with spinal cord injury.",
    linkTo: "/pediatric-speech",
  },
];
