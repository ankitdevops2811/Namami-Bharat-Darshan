import { Link } from "react-router-dom";
import "./therapy-2.css";
import TitleBar from "../../components/therapy-tools/TitleBar";
import PageHeading from "../../components/therapy-tools/PageHeading";
import { therapytools } from "../../data/Constant";

const Spidercage = () => {
  return (
    <div className="pb-5">
      <TitleBar name = '24 hrs One way cab service (All over chhattisgarh)' />
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <PageHeading heading={therapytools.CabService} />
            <div className="container-xxl">
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className="col-lg-5 animated zoomIn"
                    style={{ minHeight: "500px" }}
                  >
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute w-100 h-100 rounded wow zoomIn"
                        data-wow-delay="0.9s"
                        src="/images1/taxi1.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <p
                      className="mb-2 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                     Namami Bharat Darshan offers a comprehensive cab and taxi service throughout Chhattisgarh, ensuring reliable and convenient transportation for all your travel needs. We provide the best fare options and a one-way travel facility, allowing you to journey seamlessly to any destination across India. Whether you need local transportation within Chhattisgarh or wish to explore distant locations throughout the country, our service guarantees comfort, affordability, and flexibility, making your travel experience smooth and hassle-free.
                    </p>
                    <br />
                    <h2
                      className="wow zoomIn pb-2"
                      style={{ fontSize: "30px" }}
                    >
                      Special Service like business trip, marraige ceremony {""}
                      <span style={{ color: "darkgoldenrod" }}>NBD </span>
                      Center
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                     Namami Bharat Darshan is dedicated to providing specialized services tailored to meet your unique travel needs. For business trips, we offer seamless transportation solutions, ensuring punctuality and comfort so you can focus on your professional commitments without any travel-related concerns. Additionally, we cater to wedding ceremonies, providing elegant and reliable transport options to enhance your special day. Our dedicated NBD Center is equipped to handle all your requirements with precision, from managing logistics to arranging bespoke travel services, ensuring every aspect of your journey is meticulously planned and executed to perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
              Welcome to the Namaami Bharat Darshan{""}
              <span style={{ color: "darkgoldenrod" }}>NBD </span>
              Family
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
             Welcome to the Namaami Bharat Darshan (NBD) Family! We are delighted to have you with us, where we are committed to offering exceptional travel and transportation services tailored to your needs. Whether you're embarking on a business trip, celebrating a special occasion, or simply exploring new destinations, our dedicated team ensures that your experience with us is smooth, comfortable, and unforgettable. Thank you for choosing NBD – where every journey is crafted with care and excellence.
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
        <div className="program_details_outer_div">
          <div className="our_programs_details_list pt-2 "></div>
        </div>
        <div className="container-xxl ">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1
                className="wow zoomIn pb-3"
                data-aos-offset="200"
                style={{ fontSize: "38px" }}
              >
                <span style={{ color: "darkgoldenrod" }}>Benefits of </span>
                NBD cabs:
              </h1>
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
                    {/* <Link className="btn" to={service.linkTo}>
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </Link> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <div className="card-holder">
              <div className="card-box bg-news-p">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img-box " >
                      <img
                        src="/images/spidercage-2.png"
                        // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 pb-0">
                  {/* <div className="col-lg-6 pb-0"> */}
                  {/* <div className="card-details"> */}
                  <h3 className="title text-center py-3">Dynamic Routes with NBD Cabs</h3>
                  {/* <div className="row"> */}
                  <p
                      className=" text-center zoomIn pt-5"
                      style={{ textAlign: "justify",fontWeight:500 }}
                    >
                      Namaami Bharat Darshan (NBD) offers a dynamic routing service with our cabs, designed to provide flexibility and efficiency in your travel plans. Whether you need to navigate through bustling city streets, explore remote destinations, or optimize your route for time and convenience, our dynamic routing system ensures a seamless journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spidercage;

const TherapyData = [
  {
    imageSrc: "/img/neurosuit.jpg",
    title: "Comprehensive Coverage, Customer Support,Personalized Experience",
    
    description:
      "NBD provides extensive cab and taxi services throughout Chhattisgarh and across India, ensuring you have reliable transportation no matter where you need to go.",
    //   linkTo: "/therapy-tools/neurosuit",
  },

  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Affordable Rates, Specialized Services, Professional Drivers, Easy Booking",
    description:
      "We offer competitive fares and transparent pricing with no hidden costs, making travel budget-friendly and straightforward. ",
    // linkTo: "/therapy-tools/spidercage",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "One-Way Travel Facility, Comfort and Safety, 24/7 Availability",
    description:
      " Enjoy the convenience of one-way trips to any destination across India, allowing you to plan your journeys with greater flexibility.",
    linkTo: "/therapy-tools/dmi",
  },
  // {
  //   imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
  //   title: "Dynamic Balancing",
  //   description:
  //     "Allows patients to experience dynamic balance activities such as transitioning from sitting to quadruped, quadruped to kneeling, and eventually standing with the assistance of bungee cords attached to the patient from four angles.",
  //   linkTo: "/therapy-tools/functional-estim",
  // },
];

// separate container
{
  /* <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              At Namaami Bharat Darshan Center, we take an individualized approach to
              therapy because we understand that each child is unique with very
              specific needs. We embrace differences with an understanding that
              individualized programs work better. htmlFor this reason, no two
              therapeutic programs are alike. If your child needs our services,
              we will work closely with you to select the best therapies htmlFor
              them, creating a customized program specific to your child’s needs
              and your family’s goals. Let your child’s journey begin today by
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
      </div> */
}
