const Courousel = () => {
    return (
      <>
        {/* <!-- Carousel Start --> */}
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade header-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100 h-10"
                  src="img/18a1ff5a-3b2d-42fd-94fa-b2af0db95c48.JPG"
                  alt="Image"
                  // height="300px"
                  style={{ height: "700px" }}
                />
                <div
                  className="
                       carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown style={{ fontSize: '32px'  }}">
                      Keep Your Health Healthy
                    </h5>
                    <h3
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "47px" }}
                    >
                     Our Patients are Our Priority
                    
                    </h3>
                    <p style={{fontSize:"34"}}></p>
                    <h1
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "27px", color: "yellow" }}
                    >
                     We have varied departments and resources specializing in addressing all levels of pain for patients. Check out a few of these groups and individual success stories.
                    </h1>
                    <a
                      href="intake-forms"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-10"
                  // src="img/0a207ba2-d222-4cc8-9b88-906a29d7fcf1.JPG"
                  src="img/44e8f869-bf91-4d6c-a734-08d17fdbb518.JPG"
                  alt="Image"
                  style={{ height: "700px" }}

                />
                <div
                  className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5
                      className="text-white text-uppercase mb-3 animated slideInDown"
                      style={{ fontSize: "32px" }}
                    >
                     Stroke Recovery
                    </h5>
                    <h1
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "27px", color: "yellow" }}
                    >
                    Our pioneering work reveals that patients with stroke benefit greatly from early, high-intensity therapy … regardless of the type or severity of the stroke. We are the world’s choice for stroke care, research and outcomes.
                    </h1>
                    <a
                      href="intake-forms"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-10"
                  src="img-mission/IMG-20231115-WA0027.jpg"
                  alt="Image"
                  style={{ height: "700px" }}
                  
                />
                <div
                  className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5
                      className="text-white text-uppercase mb-3 animated slideInDown"
                      style={{ fontSize: "32px" }}
                    >
                      Pediatric Physical Therapy
                    </h5>
                    <h1
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "27px", color: "yellow" }}
                    >
                      Mission-Walk takes an intensive approach to physical therapy
                      using the NeuroSuit and Multifunctional Therapy Units
                    </h1>
                    <a
                      href="intake-forms"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-10"
                  src="mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.49 PM.jpeg"
                  alt="Image"
                  style={{ height: "700px" }}
                />
                <div
                  className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5
                      className="text-white text-uppercase mb-3 animated slideInDown"
                      style={{ fontSize: "32px" }}
                    >
                      Brain Injury Recovery
                    </h5>
                    <h1
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "27px", color: "yellow" }}  
                    >
                     People from all over the world seek our 70 years’ experience in treating the most complex traumatic brain injuries and illnesses
                    </h1>
                    <a
                      href="intake-forms"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="w-100 h-10"
                  src="mission-walk-images/WhatsApp Image 2023-11-16 at 11.42.53 PM.jpeg"
                  alt="Image"
                  style={{ height: "700px" }}
                />
                <div
                  className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
                >
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5
                      className="text-white text-uppercase mb-3 animated slideInDown"
                      style={{ fontSize: "32px" }}
                    >
                     Spinal Cord Injury
                    </h5>
                    <h1
                      className="display-1 text-white mb-md-4 animated zoomIn"
                      style={{ fontSize: "27px", color: "yellow" }}
                    >
                     Our goal is to help you achieve your best outcome with cutting-edge treatments. As the world’s #1 referral choice for spinal cord injury, you benefit from our integration of medicine, research and technology
                    </h1>
                    <a
                      href="intake-forms"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="/contact"
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- Carousel End --> */}
      </>
    );
  };
  
  export default Courousel;