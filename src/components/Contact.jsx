import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {/* *******Here we are using map routes******* */}
            <div className="col-12">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3295806607243!2d78.36818517396875!3d17.395963983492685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96a18f02be67%3A0x18b3d4c6fc977f46!2sMission%20WALK%20-%20Physiotherapy%20and%20Rehabilitation%20Center!5e0!3m2!1sen!2sin!4v1699984734806!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                //  style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
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
                    <Link to="/locations"><h5 className="mb-0">Head Offices</h5>
                    <span>Raipur, 430, 4th floor, golden trade center, Sector 2, Priyadarshini Nagar Colony, New Rajendra Nagar, Raipur, Tikrapara, Chhattisgarh 492001</span></Link>
                    <br></br>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
               
                  <div className="text-start">
                    <Link to="/locations"><h5 className="mb-0">Branch Offices</h5>
                    <span>New Delhi, Kashmiri Gate Terminal shop no 5</span></Link>
                    <br></br>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                  <div className="text-start">
                    <Link to="/locations"><h5 className="mb-0">Branch Offices</h5>
                    <span>Gaya Bihar, sherghati road</span></Link>
                    <br></br>
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
                          FOR REFERRALS
                        </h1>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <div className="text-start">
                          <h5 className="mb-2 text-white">
                            Refer your freind?
                          </h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="text-start">
                         
                            <button className="btn btn-primary mb-5">
                              REFER A CLIENT
                            </button>
                          {/* </Link> */}
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-envelope-open fs-1 text-white me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0 text-white">Email Us</h5>
                    <h6 className="text-white">namaamibharatdarshan@gmail.com</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-phone-vibrate fs-1 text-white me-3"></i>
                  <div className="text-start">
                    <h5 className="mb-0 text-white">Call Us</h5>
                    <h6 className="text-white">+91 7979825395, +91 6284005945</h6>
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
