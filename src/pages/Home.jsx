import { Link } from "react-router-dom";
import Courousel from "../components/mainpage/Courousel";
// import ConditionCard from "../../../components/conditionCard";
import HomeCard from "../components/HomeCards";
const Home = () => {
  return (
    <>
      <Courousel />
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row">
              <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "600px" }}
              >
                <h1>Conditions and Services</h1>
              </div>
              <div className="container">
                <div className="row">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 mb-4"
                      // style={{ aspectRatio: "1/1" }}
                    >
                      <HomeCard {...card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {Therapy tools} */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Therapy Tools We are Using</h1>
            </div>
            <div className="row g-4">
              {TherapyData.map((service, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow fadeInUp`}
                  data-wow-delay={service.delay}
                >
                  <div className="service-item bg-light rounded h-100 p-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                      style={{ width: "65px", height: "65px" }}
                    >
                      <i
                        className={`fa ${service.image} text-primary fs-4`}
                      ></i>
                    </div>
                    <h4 className="card-2 mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <Link className="btn" to={service.linkTo}>
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="col-lg-24 service-item wow zoomIn"
          data-wow-delay="0.9s"
        >
          <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
            {/* <h3 className="yellow mb-3">Make Appointment</h3> */}
            <a
              href="/intake-forms"
              className="btn btn-secondary py-md-3 px-md-5 me-3 animated slideInLeft"
              style={{ backgroundColor: "#FFD700" }}
            >
              <span style={{ fontSize: "larger" }}>Make Appointment</span>
            </a>
            <b className="text-white mb-3">
              Please Reach out to Mission-Walk Healpline Number and Email
            </b>
            <h2 className="yellow mb-0" style={{ color: "yellow" }}>
              +91 9177300194
            </h2>
            <h2 className="yellow mb-0" style={{ color: "yellow" }}>
              rehab@missionwalk.in
            </h2>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Our Videos</h1>
            </div>
            <div className="row g-4">
              {videoData.map((video, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow fadeInUp`}
                  data-wow-delay={`0.${index + 1}s`}
                >
                  <div className="video-item position-relative rounded overflow-hidden">
                    <div className="video-iframe-container">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

const TherapyData = [
  {
    imageSrc: "/images/cs-img.JPG",
    title: "NeuroSuit",
    description:
      "The NeuroSuit frames the body providing support and resistance simultaneously. It facilitates proper movement and provides additional weight bearing distributed strategically throughout the body.",
    linkTo: "/therapy-tools/neurosuit",
  },

  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Spider Cage (Universal Exercise Unit)",
    description:
      "The SpiderCage is a three-sided wire device that uses a belt and bungee cords to enable the patient to perform balance and strengthening exercise with proper positioning alignment.",
    linkTo: "/therapy-tools/spidercage",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "DMI",
    description:
      "In the spirit of innovation and continuous growth, we have embraced DMI to better meet the needs of our patients.",
    linkTo: "/therapy-tools/dmi",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Functional Estim",
    description:
      "Functional electrical stimulation (FES) is a modality aimed at improving strength, coordination, endurance, sensory feedback and timing in muscles used to promote improved motor control and strength in patients.",

    linkTo: "/therapy-tools/functional-estim",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Galileo",
    description:
      "Whole Body Vibration (WBV) is delivered via a mechanical vibrating platform. As the machine vibrates, it transmits energy to the individual standing, sitting, lying or kneeling on the plate causing the muscles to contract and relax many times each second.",
    linkTo: "/therapy-tools/galileo",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Theratogs",
    description:
      "TheraTogs are an orthotic undergarment and strapping product recommended for children who may benefit from increased proprioception as well as improved postural alignment, stability, and/or prolonged muscle stretch to improve developmental and functional outcomes.",
    linkTo: "/therapy-tools/theratogs",
  },
];

const videoData = [
  {
    id: "4_k6OOqrCRQ?si=UR4XmsDGqjKVAqKx",
    title: "Video 1",
  },
  {
    id: "HEIj_1XG4Hg?si=E2cNetj-w1kUKhuy",
    title: "Video 2",
  },
  {
    id: "04-e3yhQ9k8?si=qa2hgWdC9yCLSeyf",
    title: "Video 3",
  },

  // Add more video data objects as needed
];
const cardData = [
  {
    imageSrc: "/images/cs-image9.jpeg",
    title: "Stroke Recovery",
    text: "The sooner you start rehabilitation, the greater potential for recovery. Our pioneering work reveals that patients with stroke benefit greatly from early, high-intensity therapy … regardless of the type or severity of the stroke. We are the world’s choice for stroke care, research and outcomes.",
    linkTo: "/conditions/stroke-recovery",
  },
  {
    imageSrc: "/images/cs-image10.jpeg",
    title: "Spinal Cord Injury",
    text: "Our goal is to help you achieve your best outcome with cutting-edge treatments. As the world’s #1 referral choice for spinal cord injury, you benefit from our integration of medicine, research and technology.",
    linkTo: "/spinal",
  },
  {
    imageSrc: "/images/cs-image.jpeg",
    title: "Brain Injury Recovery",
    text: "People from all over the world seek our 70 years’ experience in treating the most complex traumatic brain injuries and illnesses. We bring you the latest and most promising treatments and therapies.",
    linkTo: "/brain",
  },
  {
    imageSrc: "/images/cs-img8.jpeg",
    title: "Multiple Sclerosis",
    text: "People with multiple sclerosis (MS) come to us for inpatient, outpatient or day rehabilitation. We focus on medical treatments and therapies for building strength, motor function and communication. We also offer guidance on diet, support groups and assistive devices.",
    linkTo: "/conditions/multiple-sclerosis",
  },

  {
    imageSrc: "/images/cs-img7.jpeg",
    title: "Parkinson's Disease & Neurologic Rehabilitation",
    text: "With a comprehensive team of clinicians trained in treating Parkinson’s disease and movement disorders, we go beyond medication and surgery with specialized treatment including therapy, technology and scientific advances to dramatically improve abilities.",
    linkTo: "/conditions/parkinsons",
  },
  {
    imageSrc: "/images/paediatric7.jpg",
    title: "Cerebral Palsy",
    text: "Each person with cerebral palsy (CP) has unique functional and therapeutic needs. We treat patients with CP of any age, at any point in their lives with the latest therapies for CP rehabilitation.",
    linkTo: "/conditions/cerebral-palsy",
  },
  {
    imageSrc: "/images/cs-image8.jpeg",
    title: "Pain Management",
    text: "We address pain in two distinct ways: Chronic pain cases for conditions like sciatic nerve pain, amputation or long-term back pain are treated at our Pain Management Center. Cases of acute or short-term pain are seen by our expert DayRehab® and outpatient clinicians.",
    linkTo: "/conditions/pain-management",
  },
  {
    imageSrc: "/images/cs-img5.webp",
    title: "Limb Loss & Impairment",
    text: "Amputation or limb impairment can affect ability, but doesn’ can affect ability, but doesn’t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies.t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies.",
    linkTo: "/conditions/difficulty-in-walking",
  },
  {
    imageSrc: "/images/home-card.JPG",
    title: "View All",
    text: "We go beyond traditional physical,occupational, and speech therapy by using innovative tools and techniques that change lives.",
    linkTo: "/service",
  },
];
