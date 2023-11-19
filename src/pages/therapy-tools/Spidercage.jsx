import { Link } from "react-router-dom";
import "./therapy-2.css";

// import { useEffect } from "react";
// import Swiper from "swiper";

// import "./therapy.css";
const Spidercage = () => {
  // useEffect(() => {
  //   // Initialize Swiper when the component mounts
  //   var swiper = new Swiper(".blog-slider", {
  //     spaceBetween: 30,
  //     effect: "fade",
  //     loop: true,
  //     mousewheel: {
  //       invert: false,
  //     },
  //     // autoHeight: true,
  //     pagination: {
  //       el: ".blog-slider__pagination",
  //       clickable: true,
  //     },
  //   });

  //   // Clean up Swiper instance when the component unmounts
  //   return () => {
  //     swiper.destroy();
  //   };
  // }, []);

  return (
    <div className="pb-5">
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Spidercage</h1>
          </div>
        </div>
      </div>
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <div className="container-xxl">
              <div className="page-header__content clearfix">
                <span className="page-subheader">
                  <p
                    className="mb-4 animated zoomIn  text-center"
                    style={{
                      fontSize: "36px",
                      fontWeight: "bolder",
                      textAlign: "justify",
                      color: "#808B96",
                    }}
                  >
                    The SpiderCage is a three-sided wire device that uses a belt
                    and bungee cords to enable the patient to perform balance
                    and strengthening exercise with proper positioning
                    alignment.
                  </p>
                </span>
              </div>
            </div>
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
                        src="/images/spidercage-1.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <p
                      className="mb-2 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      The SpiderCage is a three-sided wire device that uses a
                      belt and eight bungee cords to enable the child to perform
                      balance and strengthening exercises with proper
                      positioning and alignment. The SpiderCage assists the
                      child in standing without a therapist’s assistance while
                      allowing freedom of movement and facilitating balance.
                    </p>
                    <br />
                    <h2
                      className="wow zoomIn pb-2"
                      style={{ fontSize: "30px" }}
                    >
                      SpiderCage Physical Therapy at Mission {""}
                      <span style={{ color: "darkgoldenrod" }}>Walk </span>
                      Center
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Duringphysical therapy sessions, our patients participate
                      in a variety of dynamic balance activities in the
                      Universal Exercise Unit/Multifunctional Therapy Unit, also
                      called the SpiderCage. These include transitioning from
                      sitting to quadruped, quadruped to kneeling, and
                      transition all the way to standing with the assistance of
                      bungee cords attached to the patient from four angles.
                      This equipment is referred to as the “SpiderCage” due to
                      the eight bungees used to assist the patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
              Welcome to the Mission {""}
              <span style={{ color: "darkgoldenrod" }}>Walk </span>
              Family
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              At Mission Walk Center, we take an individualized approach to
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
                Spider Cage Therapy:
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
                        src="/mission-walk-images/spidercage-2.png"
                        // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 pb-0">
                  {/* <div className="col-lg-6 pb-0"> */}
                  {/* <div className="card-details"> */}
                  <h3 className="title text-center py-3">Dynamic Balancing</h3>
                  {/* <div className="row"> */}
                  <p
                      className=" text-center zoomIn pt-5"
                      style={{ textAlign: "justify",fontWeight:500 }}
                    >
                      The SpiderCage is a three-sided wire device that uses a
                      belt and eight bungee cords to enable the child to perform
                      balance and strengthening exercises with proper
                      positioning and alignment. The SpiderCage assists the
                      child in standing without a therapist’s assistance while
                      allowing freedom of movement and facilitating balance.
                    </p>
                   {/* </div> */}
                   {/* </div> */}
                    {/* <form>
                      <div className="card-details">
                        <h3 className="title">Dynamic Balancing</h3>
                        <div className="row">
                          <div className="form-group col-sm-7">
                            <div className="inner-addon right-addon">
                              <label htmlFor="card-holder">Card Holder</label>
                              <i className="far fa-user"></i>
                              <input id="card-holder" type="text" className="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                            </div>
                          </div>
                          <div className="form-group col-sm-5">
                            <label htmlFor="">Expiration Date</label>
                            <div className="input-group expiration-date">
                              <input type="text" className="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1"/>
                              <span className="date-separator">/</span>
                              <input type="text" className="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1"/>
                            </div>
                          </div>
                          <div className="form-group col-sm-8">
                            <div className="inner-addon right-addon">
                              <label htmlFor="card-number">Card Number</label>
                              <i className="far fa-credit-card"></i>
                              <input id="card-number" type="text" className="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                            </div>
                          </div>
                          <div className="form-group col-sm-4">
                            <label htmlFor="cvc">CVC</label>
                            <input id="cvc" type="text" className="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1"/>
                          </div>
                          <div className="form-group col-sm-12">
                            <button
                              type="button"
                              className="btn btn-primary btn-block"
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </form> */}
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
    title: "Improved Movement",
    description:
      "Helps the child compensate their movements when performing exercises by using other parts of the body.",
    //   linkTo: "/therapy-tools/neurosuit",
  },

  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Autonomous Exercise",
    description:
      "Encourages the child to participate in body-weight-supported functional and strengthening exercises with added security, thereby decreasing physical contact from therapists. ",
    linkTo: "/therapy-tools/spidercage",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Confidence",
    description:
      "The Spider Cage builds strength, increases balance, and more importantly, increases self-confidence and independence so that they can do more challenging activities",
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
              At Mission Walk Center, we take an individualized approach to
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
