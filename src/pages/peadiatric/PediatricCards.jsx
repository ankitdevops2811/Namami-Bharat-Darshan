import React from "react";
import CustomCard from "../../components/Card";

const PediatricCards = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1>Our Programs</h1>
          </div>

          <div className="container">
            <div className="row">
              {cardData.map((card, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <CustomCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PediatricCards;
const cardData = [
  {
    imageSrc:"img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title: "Paediatric Occupational Therapy",
    text: "Our paediatric occupational therapists assist children in performing “occupations” with the greatest level of independence possible. Childhood occupations include learning in school and playing with friends.",
    linkTo: "/page1",
  },
  {
    imageSrc: "img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title: "Paediatric Physiotherapy",
    text: "Our Centre takes an intensive approach to paediatric physiotherapy using the NeuroSuit and Multifunctional Therapy Units. We offer paediatric physiotherapy in both weekly and intensive settings.",
    linkTo: "/page2",
  },
  {
    imageSrc: "img/mission-walk-hyderabad-5cf92914afb61.jpeg",
    title: "Paediatric Speech Therapy",
    text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
    linkTo: "/page1",
  },
];
