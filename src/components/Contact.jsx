import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* *******Here we are using map routes******* */}
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3295806607243!2d78.36818517396875!3d17.395963983492685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96a18f02be67%3A0x18b3d4c6fc977f46!2sMission%20WALK%20-%20Physiotherapy%20and%20Rehabilitation%20Center!5e0!3m2!1sen!2sin!4v1699984734806!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                //  style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <h3
              className="contact-title mb-3 mt-5"
              style={{ fontSize: "35px", paddingLeft: "30px" }}
            >
              Get in touch with us
            </h3>
          </div>
        </div>
      </div>
      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="bg-warning rounded h-100 p-5">
                <div className="section-title">
                  <h5 className="position-relative d-inline-block text-primary text-uppercase">
                    Contact Us
                  </h5>
                  <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Hyderabad</h5>
                    <span>
                      Aryamitra Qube, 3rd Floor, Rd Number 9, Alkapoor Township,
                      Raghavendra Colony, Manikonda Jagir, Telangana 500089
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Greater Noida, Uttar Pradesh</h5>
                    <span>
                      Ecotech-II, Knowledge Park III, Greater Noida, Uttar
                      Pradesh 201308
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Pune, Maharastra</h5>
                    <span>
                      Physiotherapy and Rehabilitation Center Sun Gloria, mouje
                      Ambegaon Budruk, Narhe Ambegaon Rd, Dalavi Nagar, Katraj,
                      Pune, Maharashtra 411046
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Email Us</h5>
                    <span>rehab@missionwalk.in</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0">Call Us</h5>
                    <span>+91 9177300194</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 w-h-25"><div className="bg-dark rounded h-100 p-5">
                      <div className="section-title">
                        <h5 className="position-relative d-inline-block text-white text-uppercase">
                          Contact Us
                        </h5>
                        <h1 className="display-6 mb-4 text-white">
                          FOR REFERRALS + Physiotherapist
                        </h1>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        {/* <i className="bi bi-geo-alt fs-1 text-primary me-3"></i> */}
                        <div className="text-start">
                          <h5 className="mb-2 text-white">
                            Refer your patient?
                          </h5>
                          {/* <span>Banjara Hills, Hyderabad, Telangana</span> */}
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="text-start">
                          <Link to="/refer-patient">
                            {" "}
                            <button className="btn btn-primary mb-5">
                              REFER A PATIENT
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
