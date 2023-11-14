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
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">

                {/* *******Get In Touch Card******* */}

                <div>
                  <h3 className="contact-title mb-4" style={{ fontSize: "35px" }}>Get in touch with us</h3>
                  <div>
                    <div className="bg-light rounded h-100 p-5">
                      <div className="section-title">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                        <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                        <div className="text-start">
                          <h5 className="mb-0">Our Office</h5>
                          <span>Banjara Hills, Hyderabad, Telangana</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
