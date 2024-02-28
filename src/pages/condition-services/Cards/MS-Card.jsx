import ConditionCard from "../../../components/conditionCard";
// import CustomCard from "../../components/Card";

const MsCard = () => {
  return (
    <section className="services py-5" id="services" style={{ width: "120%" }}>
      <div className="container">
        <div className="row">
          {MsData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ConditionCard {...card} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MsCard;
const MsData = [
  {
    imageSrc: "/images/cs-img.JPG",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-occupational",
  },
];
