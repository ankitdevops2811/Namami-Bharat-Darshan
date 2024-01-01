import { Link } from "react-router-dom";
import "./therapy-2.css";

const Spidercage = () => {

  return (
    <div className="pb-5">
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              {" "}
              Dynamic Movement Intervention
            </h1>
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
                    Dynamic Movement Intervention allows our team to incorporate
                    more techniques and tools into the framework of a session.
                    Also, DMI allows us to customize each plan based on your
                    child’s needs and goals.
                    {/* DMI is the perfect complement
                    to our intensive model of therapy, which focuses on
                    incorporating multiple therapeutic techniques. */}
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
                        src="/images/dmi-2.jpeg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      What is {""}
                      <span style={{ color: "darkgoldenrod" }}>DMI </span>
                      Therapy?
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      Dynamic Movement Intervention (DMI) is a comprehensive
                      intervention that incorporates current research on
                      neurorehabilitation, technologies, and methodologies. This
                      therapeutic technique is used by physical (PT) and
                      occupational therapists to treat children with gross motor
                      impairments by improving and/or provoking a desired action
                      with great emphasis on alignment, sensory integration, and
                      function. The goal is to promote progress toward
                      developmental milestones.
                    </p>
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Why We Love {""}
                      <span style={{ color: "darkgoldenrod" }}>DMI </span>
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                      DMI expands and complements our intensive program due to
                      its focus on clinical reasoning, current research, the
                      whole child, and its multi-disciplinary/multi-modality
                      approach. DMI allows our team to not only incorporate more
                      techniques and tools into the framework of a session, but
                      at the same time, allows us to customize each plan based
                      on your child’s needs and parents’ goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
              {""}
              <span style={{ color: "darkgoldenrod" }}>DMI </span>
              Makes Our Team Stronger
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
              The mission of Dynamic Movement Intervention is to provide an
              abundance of training opportunities for therapists passionate
              about learning DMI and to create a community of therapists who are
              open to collaboration. With training being readily available to
              therapists around the world, DMI will have the opportunity to
              serve more children!
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
      </div>
      {
   <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
          <h1 className="wow zoomIn pb-3" data-aos-offset="200" style={{ fontSize: "38px" }}>
                Join the {''}
                <span style={{ color: "darkgoldenrod" }}>
                 DMI {" "}
                </span>
                Movement!
              </h1>
              <ul
                className=" wow zoomIn ps-1"
                data-wow-delay="0.11s"
                style={{ fontSize: "22px" }}
              >
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2 "></i>
                Develop the technique
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>
                Collaborate with other practitioners and access training and mentorship
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                  Treat more patients (by providing certification, training, and education)
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                  Optimize results by customizing therapy
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>Incorporate more techniques and tools into the framework of a session</span>
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
        </div>
      </div> 
}
    </div>
  );
};

export default Spidercage;



