import React from "react";
import CustomCard from "../../../components/Card";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";


const LimbCard = () => {
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
          {limbData.map((card, index) => (
            <div key={index} className="col-lg-6 col-md-6 mb-4">
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

export default LimbCard;
const limbData = [
  {
    imageSrc: "/mission-walk-images/7dfa808a-797c-438d-a32b-2d549672f1c5 2.JPG",
    title: "Evaluation of Powered Lower Limb Prostheses",
    text: "To refine and evaluate socket design, mechanical components, control mechanisms, control electronics and training of powered lower limb prosthetic devices for amputees.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Outcomes Testing with Myoelectric Upper Limb Prosthesis Users",
    text: "This study is exploring what factors may impact function using a prosthesis.",
    // linkTo: "/pediatric-physiotherapy",
  },

  
];
