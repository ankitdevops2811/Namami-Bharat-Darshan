import ConditionCard from "../../../components/conditionCard";

const BrainCard = () => {
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

export default BrainCard;
const cardData = [
  {
    imageSrc: "/images/cs-img.JPG",
    title: "Stimulating neuroplasticity in TBI with acute intermittent hypoxia",
    text: "We are studying whether briefly reducing oxygen consumption, equivalent to being on top of a mountain, is safe and stimulates neuroplasticity in people who have had a concussion or a mild to moderate traumatic brain injury (TBI).",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/images/cs-img1.jpeg",
    title: "COMET-C",
    text: "Seeking persons with communication difficulties due to stroke/aphasia, Parkinson’s Disease, cerebral palsy or traumatic brain injury to join a focus group.",
    // linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "/images/cs-img2.JPG",
    title:
      "Neuromodulation and Neurorehabilitation for Treatment of Functional Deficits after mTBI plus PTSD",
    text: "The purpose of this study is to alleviate persisting attention deficits related to mild TBI and PTSD by treating the neurocognitive system of attention.",
    // linkTo: "/pediatric-speech",
  },
];
