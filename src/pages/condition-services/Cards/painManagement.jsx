import ConditionCard from "../../../components/conditionCard";

const PainManagement = () => {
  return (
    <section className="services py-5" id="services" style={{ width: "120%" }}>
      <div className="container">
        <div className="row">
          {painData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ConditionCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainManagement;
const painData = [
  {
    imageSrc: "/images/pain-management.webp",
    title: "Efficacy of a Telehealth Pain Self-Management Intervention",
    text: "The E-TIPS trial will evaluate an evidence-based, telehealth pain self-management intervention compared to standard care (a waitlist) for chronic pain in adults with physical disabilities who are employed",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/images/OIP (1).jfif",
    title:
      "D-Cycloserine for the Treatment of Chronic, Refractory Low Back Pain",
    text: "This clinical trial is to evaluate the efficacy and safety of D-cycloserine versus placebo in relieving the signs and symptoms of patients with chronic lower back pain",
    // linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/images/Chiropractic-Care-Frisco-Texas-1024x683.jpg",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-physiotherapy",
  },
];
