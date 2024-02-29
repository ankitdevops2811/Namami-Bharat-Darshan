import ConditionCard from "../../../components/conditionCard";

const LimbCard = () => {
  return (
    <section className="services py-5" id="services" style={{ width: "120%" }}>
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
    imageSrc: "/images/Chiropractic-Care-Frisco-Texas-1024x683.jpg",
    title: "Evaluation of Powered Lower Limb Prostheses",
    text: "To refine and evaluate socket design, mechanical components, control mechanisms, control electronics and training of powered lower limb prosthetic devices for amputees.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/images/limb-loss.jpg",
    title: "Outcomes Testing with Myoelectric Upper Limb Prosthesis Users",
    text: "This study is exploring what factors may impact function using a prosthesis.",
    // linkTo: "/pediatric-physiotherapy",
  },
];
