import React from "react";
import ConditionCard from "../../../components/conditionCard";

const SpinalCards = () => {
  return (
    <section
      className="services py-5"
      id="services"
      style={{width:"120%"}}
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
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.53 PM.jpeg",
    title:
      "A Multi-Center Clinical Trial to Evaluate the Effectiveness of Intermittent Hypoxia Therapy in Individuals with SCI",
    text: "A study to investigate the effectiveness of daily acute intermittent hypoxia therapy (dAIH), coupled with a massed practice intervention or the use of high repetition training.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/54.webp",
    title:
      "Locomotor function following transcutaneous electrical spinal cord stimulation in individuals with hemiplegic stroke",
    text: "This study is looking for persons who have had a stroke to determine if spinal stimulation helps improve walking ability.",
    // linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.51 PM.jpeg",
    title: "Repetitive Acute Intermittent Hypoxia for Spinal Cord Repair",
    text: "This research is being conducted to study the effects of breathing low oxygen air (hypoxia) and exercise training on recovery of upper limb (arms and hands) and lower limb (legs) function in people with spinal cord injury.",
    // linkTo: "/pediatric-speech",
  },
];
