import ConditionCard from "../../../components/conditionCard";

const StrokeCards = () => {
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

export default StrokeCards;
const cardData = [
  {
    imageSrc: "/images/cs-img6.jpeg",
    title:
      "Locomotor function following transcutaneous electrical spinal cord stimulation in individuals with hemiplegic stroke",
    text: "This study is looking for persons who have had a stroke to determine if spinal stimulation helps improve walking ability.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc:
      "/images/cs-img7.jpeg",
    title:
      "An Exploration of Acute Intermittent Hypoxia as a tool to Enhance Neural Recovery in Stroke Survivors; a pilot safety study.",
    text: "This is a Phase I safety study. Our plan consists of dose-escalation exposures with continual assessment of hypoxic conditioning impact in individuals with chronic stroke.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc:
      "/images/cs-img8.jpeg",
    title: "Improving Arm Movement Using Wearable Device After Stroke",
    text: "Mission-Walk is evaluating a new rehab therapy using wearable devices and a video game interface to improve arm movement after stroke. Participants use these wearable devices, called myoelectric computer interfaces, to play video games using their arm muscles.",
    linkTo: "/pediatric-speech",
  },
];
