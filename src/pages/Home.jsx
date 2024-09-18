import { Link } from "react-router-dom";
import Courousel from "../components/mainpage/Courousel";
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
                <h1>Our Services</h1>
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
              <h1>Our other Services</h1>
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
                    <Link className="btn">
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
              <span className="fs-6 text-dark" >Book your Enquiry</span>
              {/* <span style={{ fontSize: "larger" }}>Make Appointment</span> */}
            </a>
            <b className="text-white mb-3">
              Please Reach out to Namaami Bharat Darshan Healpline Number and Email
            </b>
            <h2 className="yellow mb-0" style={{ color: "yellow" }}>
            +91 7979825395, +91 6284005945
            </h2>
            <h2 className="yellow mb-0" style={{ color: "yellow" }}>
            namaamibharatdarshan@gmail.com
            </h2>
          </div>
        </div>
        <div className="container-xxl py-5">
          {/* <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Our Blogs</h1>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;

const TherapyData = [
  {
    imageSrc: "/images1/taxi.JPG",
    title: "24 hrs cab service",
    description:
      "Need a reliable ride, anytime, anywhere? Our 24-hour one-way cab service has you covered. Whether it's an early morning flight, a late-night emergency, or a quick trip across town, we're here to get you to your destination safely and comfortably. Book your ride now for a hassle-free journey!",
    linkTo: "/therapy-tools/neurosuit",
  },

  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Event Management in Chhattisgarh",
    description:
      "Planning an event in Chhattisgarh? Let us take the responsibility! From weddings and corporate events to family gatherings and cultural programs, we organize everything with precision and creativity. No matter where in Chhattisgarh, we ensure your event is unforgettable. Book with us, and we'll handle the rest!",
    linkTo: "/therapy-tools/spidercage",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "24-Hour Nationwide Parcel Service Across India",
    description:
      "Planning an event in Chhattisgarh? Let us take the responsibility! From weddings and corporate events to family gatherings and cultural programs, we organize everything with precision and creativity. No matter where in Chhattisgarh, we ensure your event is unforgettable. Book with us, and we'll handle the rest!",
    linkTo: "/therapy-tools/dmi",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Your Dream Destination Wedding Awaits",
    description:
      "Planning an event in Chhattisgarh? Let us take the responsibility! From weddings and corporate events to family gatherings and cultural programs, we organize everything with precision and creativity. No matter where in Chhattisgarh, we ensure your event is unforgettable. Book with us, and we'll handle the rest!",

    linkTo: "/therapy-tools/functional-estim",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Hassle-Free Visa & Passport Services",
    description:
      "Simplify your travel preparations with our comprehensive visa and passport services. Whether you're planning an international getaway, a business trip, or a study abroad program, we take care of all your documentation needs. Trust us to get you travel-ready in no time!",
    linkTo: "/therapy-tools/galileo",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: " Expert Trip Advisor for Any Destination",
    description:
      "Embark on your next adventure with confidence, guided by our expert trip advisory services. Whether you're planning a serene getaway to a tropical paradise, an action-packed city tour, or an off-the-beaten-path exploration, we provide personalized recommendations tailored to your interests and budget.",
    linkTo: "/therapy-tools/theratogs",
  },
];

// const videoData = [
//   {
//     id: "4_k6OOqrCRQ?si=UR4XmsDGqjKVAqKx",
//     title: "Video 1",
//   },
//   {
//     id: "HEIj_1XG4Hg?si=E2cNetj-w1kUKhuy",
//     title: "Video 2",
//   },
//   {
//     id: "04-e3yhQ9k8?si=qa2hgWdC9yCLSeyf",
//     title: "Video 3",
//   },

//   // Add more video data objects as needed
// ];
const cardData = [
  {
    imageSrc: "/images1/pitapsh.jpg",
    title: "Pitarpaksh Mela Gaya 2024 (Bihar)",
    text: "The Pitarpaksh Mela is a religious event where people honor and pay respects to their ancestors. During this festival, attendees participate in rituals like offering pinddaan, tarpan, and other traditional ceremonies.",
    linkTo: "/conditions/stroke-recovery",
  },
  {
    imageSrc: "/images1/ayodhya.jpg",
    title: "Ayodhya Ji Dham, (U.P)",
    text: "Ayodhya, a city steeped in ancient history and spirituality, holds immense significance in Hindu mythology as the birthplace of Lord Rama. It is a revered pilgrimage site, attracting devotees from across the world.",
    linkTo: "/spinal",
  },
  {
    imageSrc: "/images1/rameshwaram.jpg",
    title: "Rameshwaram, Tamil Nadu",
    text: "Rameshwaram, a sacred town in Tamil Nadu, is one of the holiest places in India. It is renowned for the Ramanathaswamy Temple, dedicated to Lord Shiva, and is a key pilgrimage destination in the Char Dham Yatra. The town is also associated with the Ramayana, as the place where Lord Rama built a bridge to Lanka.",
    linkTo: "/brain",
  },
  {
    imageSrc: "/images1/hardiwar.jpg",
    title: "Haridwar",
    text: "Haridwar, a gateway to the gods, is another sacred city on the banks of the Ganges. It is famous for the Kumbh Mela, one of the largest religious gatherings in the world, and the Har Ki Pauri ghat, where pilgrims gather to take a holy dip.",
    linkTo: "/conditions/multiple-sclerosis",
  },

  {
    imageSrc: "/images1/tirupati.jpg",
    title: "Tirupati, Andra Pradesh",
    text: "Tirupati, located in Andhra Pradesh, is home to the revered Venkateswara Temple, one of the richest and most visited temples in the world. Devotees flock here to seek the blessings of Lord Venkateswara, an incarnation of Vishnu.",
    linkTo: "/conditions/parkinsons",
  },
  {
    imageSrc: "/images1/Kedarnath.jpg",
    title: "Kedarnath Dham, Uttrakhand",
    text: "Kedarnath, nestled in the Himalayas, is one of the holiest shrines dedicated to Lord Shiva. It is part of the Char Dham Yatra and is renowned for its remote and serene location, offering a deeply spiritual experience.",
    linkTo: "/conditions/cerebral-palsy",
  },
  // {
  //   imageSrc: "/images/cs-image8.jpeg",
  //   title: "Pain Management",
  //   text: "We address pain in two distinct ways: Chronic pain cases for conditions like sciatic nerve pain, amputation or long-term back pain are treated at our Pain Management Center. Cases of acute or short-term pain are seen by our expert DayRehab® and outpatient clinicians.",
  //   linkTo: "/conditions/pain-management",
  // },
  // {
  //   imageSrc: "/images/cs-img5.webp",
  //   title: "Limb Loss & Impairment",
  //   text: "Amputation or limb impairment can affect ability, but doesn’ can affect ability, but doesn’t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies have to affect the quality of your life.",
  //   // text: "Amputation or limb impairment can affect ability, but doesn’ can affect ability, but doesn’t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies.t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies.",
  //   linkTo: "/conditions/difficulty-in-walking",
  // },
  // {
  //   imageSrc: "/images/home-card.JPG",
  //   title: "View All",
  //   text: "We go beyond traditional physical,occupational, and speech therapy by using innovative tools and techniques that change lives.",
  //   linkTo: "/service",
  // },
];
