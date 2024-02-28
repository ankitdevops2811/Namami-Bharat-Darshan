import ConditionCard from "../../../components/conditionCard";

const CpCard = () => {
  return (
    <section
      className="services py-5"
      id="services"
      // style={{ backgroundColor: "aliceblue" }}
      style={{ width: "120%" }}
    >

      <div className="container">
        <div className="row">
          {cpData.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ConditionCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CpCard;
const cpData = [
  {
    imageSrc: "/images/cs-img3.jpeg",
    title: "Center for Rehabilitation Outcomes Research Registry",
    text: "The aim of this project is to develop a registry of research volunteers for recruitment purposes at the Center for Rehabilitation Outcomes Research.",
    // linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "/images/p-img.JPG",
    title:
      "Robot Based Gait Training Therapy for Pediatric Population with Cerebral Palsy",
    text: "This study is looking for children with Cerebral Palsy to wear an robotic exoskeleton to help improve walking ability.",
    // linkTo: "/pediatric-physiotherapy",
  },

  {
    imageSrc: "/images/cs-img4.jpeg",

    title: "Children with Cerebral Palsy - Trunk Control and Walking Study",
    text: "The primary purpose for this study is to determine the effects of a robotic training on trunk control and walking ability in children with cerebral palsy.",
    // linkTo: "/page1",
  }, 
];
