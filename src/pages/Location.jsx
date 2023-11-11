// import { Link } from "react-router-dom";
import "../style.css";
// import { FontAwesomeIcon } from "fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Location = () => {
  return (
    <>
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Our Locations</h1>
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
                        style={{ width: "65px", height: "65px" }}
                      >
                        {/* <i
                          className={`fa ${service.icon} text-primary fs-4`}
                        ></i> */}
                        <img
                          src={service.location}
                          alt="abc"
                          style={{ width: "70px", height: "65px" }}
                        />
                      </div>
                      <h4 className="card-2 mb-3 service-content-icon">
                        {service.title}
                      </h4>
                      <p className="mb-4 service-content-icon">
                        {service.description} <br />
                        Contact Us :<a href="tel:12345">{service.number}</a>
                      </p>
                      {/* <a className="btn service-content-icon" href="#">
                        <i className="service-content-icon fa fa-plus text-primary me-3"></i>
                        Read More
                      </a> */}
                      <div>
                        {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" spin /> */}
                      </div>
                      <section className="mb-4 service-content-icon">
                        {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" spin /> */}
                        {/* <FontAwesomeIcon
                          icon="fa-solid fa-cart-shopping"
                          spin
                        /> */}
                        {/* <Link
                          to={service.to}
                          className=" btn btn-primary me-3 rounded-pill"
                        >
                          Read More
                        </Link> */}
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
    title: "Greater Noida",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.1s",
    to: "/test",
    location: "/delhi-4.png",
    number: "12345",
  },
  {
    icon: "fa-brain",
    title: "Hyderabad",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.3s",
    to: "/about",
    location: "/hyderabad.png",
  },

  {
    icon: "fa-brain",
    title: "Pune",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.1s",
    to: "/",
    location: "/pune-3.jpeg",
    // location: "/pune.jpg",
  },
  {
    icon: "fa-brain",
    title: "Chennai",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.3s",
    to: "/",
  },
  {
    icon: "fa-brain",
    title: "Kolkata",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.5s",
    to: "/",
  },
  {
    icon: "fa-brain",
    title: "Mumbai",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam  diam sed .",
    delay: "0.5s",
    to: "/",
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
