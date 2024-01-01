import { Link } from "react-router-dom";
import "./therapy-2.css";

const Neurosuit3 = () => {
  return (
    <div className="pb-5">
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">NeuroSuit</h1>
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
                      fontSize: "30px",
                      fontWeight: "bolder",
                      textAlign: "justify",
                      color: "#808B96",
                    }}
                  >
                    The NeuroSuit frames the body providing support and
                    resistance simultaneously. It facilitates proper movement
                    and provides additional weight bearing distributed
                    strategically throughout the body.
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
                        src="/images/neurosuit-1.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <p
                      className="mb-2 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      It assists the patient’s body to be in correct alignment,
                      while the bungee cords provide a comforting compression to
                      the joints and distribute a vertical weight bearing to the
                      patient’s entire body. This improves and changes
                      proprioception (pressure from the joints, ligaments, and
                      muscles), reduces the child’s undesired reflexes,
                      facilitates proper movement and provides additional weight
                      bearing distributed strategically throughout the body.
                    </p>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      This sends strong messages to and from the brain and
                      central nervous system bringing about an instantaneous
                      increase in body awareness, which leads to improved motor
                      planning. All the while the child has to work against the
                      effects of the additional gravity from the weight-bearing
                      component of the bungees. They build muscle at a faster
                      pace and the skills they learn are amplified to the
                      central nervous system. Performing specific exercises and
                      functional activities while in the NeuroSuit results in
                      improved motor skills, which carries over into the child’s
                      daily life when they are not in the NeuroSuit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="program_details_outer_div " style={{backgroundColor:"aliceblue"}}>
              <h1 className="wow zoomIn pb-3" data-aos-offset="200" style={{ fontSize: "38px" }}>
                <span style={{ color: "darkgoldenrod" }}>
                   NeuroSuit Therapy {" "}
                </span>
                is suitable to treat the following:
              </h1>
              
              <ul
                className=" wow zoomIn ps-1"
                data-wow-delay="0.11s"
                style={{ fontSize: "22px" }}
              >
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2 "></i>
                Cerebral Palsy
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>
                Global Developmental Delays
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Traumatic Brain Injury
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Near Drowning Accidents
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Post stroke (CVA)</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Incomplete Spinal Cord Injury
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Ataxia</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Athetosis</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Spasticity</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Hypotonia</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Parkinson Disease</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Chromosomal Disorders
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Autism Spectrum Disorder
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                    Any neurological impairment that will not make the condition
                    worse with exercise or additional weight bearing
                  </span>
                </li>
              </ul>
            </div>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              At Mission Walk Center, we take an individualized approach to
              therapy because we understand that each child is unique with very
              specific needs. We embrace differences with an understanding that
              individualized programs work better. For this reason, no two
              therapeutic programs are alike. If your child needs our services,
              we will work closely with you to select the best therapies for
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
        <div className="container-xxl pb-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Benefits of NeuroSuit</h1>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurosuit3;

const TherapyData = [
  {
    imageSrc: "/img/neurosuit.jpg",
    title: "Create New Pathways",
    description:
      "Re-trains the central nervous system and creates NEWpathways to/from the brain allowing new or improvedmotor skills to be formed",
    //   linkTo: "/therapy-tools/neurosuit",
  },

  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Dynamic Correction",
    description:
      "Provides dynamic correction of movements reinforcingproper movement during skills such as walking, balanceand coordination",
    linkTo: "/therapy-tools/spidercage",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Better Alignment",
    description:
      "Bring the body into correct alignment. Improves hip alignment through vertical loading over the hip joint",
    linkTo: "/therapy-tools/dmi",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Increased Awareness",
    description:
      " Provides compression (tactile stimulation) distributedthroughout the body and increases spacial awareness ofthe body&lt;",
    linkTo: "/therapy-tools/functional-estim",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Improved Motor Skills",
    description: "Promotes development of both fine and gross motor skills",
    linkTo: "/therapy-tools/galileo",
  },
  {
    imageSrc: "/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9.JPG",
    title: "Stronger Bones",
    description: " Improves bone density",
    linkTo: "/therapy-tools/theratogs",
  },
  {
    imageSrc: "",
    title: "Strengthen Speech",
    description:
      " Improves speech production and its fluency through head control and trunk support",
    linkTo: "",
  },
  {
    imageSrc: "",
    title: "Controlled Movement",
    description:
      " Decreases uncontrolled movement in ataxia and athetosis. Helps to decrease contracture",
    linkTo: "",
  },
  {
    imageSrc: "",
    title: "Muscle Tone",
    description:
      "  Provide resistance to strong muscles to further enhance strengthening while supporting weak muscles",
    linkTo: "",
  },
];
