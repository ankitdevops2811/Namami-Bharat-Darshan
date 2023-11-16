import React from "react";
import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";

const LimbCard = () => {
  return (
    <section className="services py-5" id="services" style={{ width: "120%" }}>
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
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-17 at 1.02.23 AM.jpeg",
    title: "Evaluation of Powered Lower Limb Prostheses",
    text: "To refine and evaluate socket design, mechanical components, control mechanisms, control electronics and training of powered lower limb prosthetic devices for amputees.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.52 PM (2).jpeg",
    title: "Outcomes Testing with Myoelectric Upper Limb Prosthesis Users",
    text: "This study is exploring what factors may impact function using a prosthesis.",
    // linkTo: "/pediatric-physiotherapy",
  },
];
