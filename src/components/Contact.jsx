// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
// import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
// import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      {/* <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" /> */}
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28342.581571415747!2d79.57460744091628!3d27.38125216506849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e303697d81e83%3A0x7a0dbe8e567cbf24!2sFarrukhabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678348614703!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                
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
