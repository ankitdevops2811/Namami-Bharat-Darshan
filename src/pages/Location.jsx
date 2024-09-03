import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Location = (linkTo) => {
  return (
    <>
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "90000px" }}
            >
              <h1>Our Spiritual Bharat Darshan</h1>
            </div>
            <div className="row g-4">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow fadeInUp  `}
                  data-wow-delay={service.delay}
                >
                  <div className="service-item bg-light rounded h-100 p-5">
                    <div className="service-content text-center">
                      <div
                        className="service-content-icon  d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                        // style={{ width: "65px", height: "65px" }}
                      >
                        {/* <i
                          className={`fa ${service.icon} text-primary fs-4`}
                        ></i> */}
                        <img
                          src={service.location}
                          alt="abc"
                          style={{ width: "270px", height: "165px" }}
                          
                        />
                        
                      </div>
                      <h4 className="card-2 mb-3 service-content-icon">
                        {service.title}
                      </h4>
                      <p className="mb-4 service-content-icon">
                        {service.description} <br />
                        Contact Us :<a href="tel:6284005945">{service.number}</a>
                        <p>
                        <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <p>
                  <Link
            to={linkTo}
            className=""
            style={{ textDecoration: "underline", color: "cornflowerblue" }}
          >
             Explore More...
                      </Link>
                  </p>
                  </p>
                      </p>
                      <div>
                      </div>
                      <section className="mb-4 service-content-icon">
                      </section>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" spin />
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Location;

const servicesData = [
  {
    icon: "fa-brain",
    title: "Dev Bhumi Uttrakhand",
    description:
    "Uttarakhand, often referred to as Dev Bhoomi or the Land of Gods, is a spiritual haven nestled in the Himalayas. This sacred region is renowned for its ancient temples, revered pilgrimage sites, and serene natural beauty.",
    delay: "0.3s",
    to: "/about",
    location: "images1/uttrakhand.jpg",
    number: "+91 6284005945",
  },
  {
    icon: "fa-brain",
    title: "Bihar",
    description:
    "The state is also significant in Hinduism, with Gaya serving as a major pilgrimage destination where devotees perform Pind Daan rituals for their ancestors. The Brahmayoni Temple in Gaya plays a crucial role in these sacred rites.",
    delay: "0.3s",
    to: "/about",
    location: "images1/bihar-tourism.jpg",
    number: "+91 6284005945",
  },
  {
    icon: "fa-brain",
    title: "Chhattisgarh",
    description:
      "Chhattisgarh, a state nestled in central India, is a region with a profound spiritual and cultural heritage. Known for its lush forests, ancient temples, and vibrant tribal traditions, Chhattisgarh offers a unique blend of spirituality and natural beauty.",
    delay: "0.1s",
    to: "/test",
    location: "images1/Chhattisgarh.jpg",
    number: "+91 6284005945",
  },


  {
    icon: "fa-brain",
    title: "Andra Pradesh",
    description:
      "Andhra Pradesh, a state rich in cultural and spiritual heritage, offers a variety of destinations for those seeking spiritual tourism. The state is renowned for its ancient temples, sacred sites, and religious festivals that draw devotees from across the country and beyond.",
    delay: "0.1s",
    to: "/",
    location: "images1/andra-pradesh.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },

  {
    icon: "fa-brain",
    title: "Tamil Nadu",
    description:
      "Tamil Nadu, often referred to as the Land of Temples is a treasure trove of spiritual and cultural heritage in southern India. The state is renowned for its magnificent temples, each with unique architectural splendor, deep historical significance, and profound religious importance.",
    delay: "0.1s",
    to: "/",
    location: "images1/tamilnadu.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Gujarat",
    description:
      "Gujarat, a state known for its rich cultural heritage and vibrant traditions, is also a prominent destination for spiritual tourism in India. The state is home to numerous sacred sites, ancient temples, and pilgrimage centers that draw devotees and spiritual seekers from across the country and beyond.",
    delay: "0.1s",
    to: "/",
    location: "images1/gujrat.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Karnataka",
    description:
      "Karnataka, a state in southern India, is a land of diverse landscapes and rich spiritual heritage, making it a significant destination for spiritual tourism. The state is dotted with ancient temples, sacred rivers, and pilgrimage centers that reflect its deep-rooted religious traditions and architectural splendor.",
    delay: "0.1s",
    to: "/",
    location: "images1/karnataka.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Assam",
    description:
      "Gujarat, a state known for its rich cultural heritage and vibrant traditions, is also a prominent destination for spiritual tourism in India. The state is home to numerous sacred sites, ancient temples, and pilgrimage centers that draw devotees and spiritual seekers from across the country and beyond.",
    delay: "0.1s",
    to: "/",
    location: "images1/assam.jpeg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Uttar Pradesh",
    description:
      "Uttar Pradesh, often called the heartland of India is a state steeped in spiritual and religious heritage. As one of the most culturally rich and historically significant regions in India, Uttar Pradesh is a major destination for spiritual tourism, attracting millions of pilgrims and seekers from around the world.",
    delay: "0.1s",
    to: "/",
    location: "images1/uttarpradesh.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Arunachal Pradesh",
    description:
      "Arunachal Pradesh, located in the northeastern tip of India, is a land of breathtaking natural beauty and deep spiritual significance. Known for its serene landscapes, dense forests, and vibrant tribal culture, Arunachal Pradesh offers a unique blend of spirituality that is closely intertwined with nature and indigenous traditions.",
    delay: "0.1s",
    to: "/",
    location: "images1/arunachal.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Himachal Pradesh",
    description:
      "Himachal Pradesh, often referred to as Dev Bhoomi or the Land of the Gods is a state in northern India renowned for its spiritual tourism. Nestled in the majestic Himalayas, Himachal Pradesh is home to ancient temples, sacred rivers, and monasteries that have drawn pilgrims, seekers, and travelers for centuries.",
    delay: "0.1s",
    to: "/",
    location: "images1/himachal.jpg",
    number: "+91 6284005945",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "West Bengal",
    description:
      "West Bengal, a state in eastern India, is a land of profound spiritual and cultural richness. Known for its deep-rooted traditions, vibrant festivals, and sacred sites, West Bengal offers a unique blend of spirituality that draws devotees, seekers, and travelers from across the globe. ",
    delay: "0.1s",
    to: "/",
    location: "images1/west-bengal.jpg",
    number: "+91 6284005945",
    
    // location: "/pune.jpg",
  },
];

