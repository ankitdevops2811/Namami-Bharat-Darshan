const About = () => {
  return (
    <>
      {/* <div>About</div> */}
        {/* <!-- Hero Start --> */}
    <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                <a href="" className="h4 text-white">Home</a>
                <i className="far fa-circle text-white px-2"></i>
                <a href="" className="h4 text-white">About</a>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}
    
      {/* <!-- About Start --> */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">
                  About Us
                </h5>
                <h1 className="display-5 mb-0" style={{ fontSize: '26px' }}>
                Mission Walk : The story of my Entrepreneurship Journey
                </h1>
              </div>
              <h4 className="text-body fst-italic mb-4"style={{ fontSize: '22px' }}>
                Dr. Ravi Badavath
              <br/>(Neuro physiotherapist, Founder of “Mission Walk”)
              </h4>
              <p className="mb-4" style={{ fontSize: '18px' }}>
              Did you know that  India ranks second worldwide with the highest number of people needing rehabilitation at least once during their lifetime? However, rehabilitation centers in India are few and unequipped to meet this raging demand. According to Glassdoor: the national average salary for a physiotherapist in India is Rs. 25547. In association with IAP, Medvarsity brings together a webinar series that chalks out a pathway to upskill and start your own practice. Come become your own boss today! Key takeaways:  Upskill and learn from leading industry experts on how to start your own business in physiotherapy and physiatry Acquire career guidance for doctors interested in Physiatry/orthopedic and Physiotherapy. Learn how modern cutting-edge technology enables physiotherapy sessions and holistic rehabilitation.
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Award Winning
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>
                    Professional Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>24/7
                    Opened
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check-circle text-primary me-3"></i>Fair
                    Prices
                  </h5>
                </div>
              </div>
              <a
                href="appointment.html"
                className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                data-wow-delay="0.6s"
              >
                Make Appointment
              </a>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/img_150457_drravi9x6.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
};

export default About;
