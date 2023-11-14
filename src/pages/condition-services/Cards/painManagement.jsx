import React from "react";
import CustomCard from "../../../components/Card";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";


const PainManagement = () => {
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
          {painData.map((card, index) => (
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

export default PainManagement;
const painData = [
  {
    imageSrc: "/mission-walk-images/7dfa808a-797c-438d-a32b-2d549672f1c5 2.JPG",
    title: "Efficacy of a Telehealth Pain Self-Management Intervention",
    text: "The E-TIPS trial will evaluate an evidence-based, telehealth pain self-management intervention compared to standard care (a waitlist) for chronic pain in adults with physical disabilities who are employed",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "D-Cycloserine for the Treatment of Chronic, Refractory Low Back Pain",
    text: "This clinical trial is to evaluate the efficacy and safety of D-cycloserine versus placebo in relieving the signs and symptoms of patients with chronic lower back pain",
    // linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-physiotherapy",
  },
  
];
