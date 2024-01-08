import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <div>Footer</div>
    <>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{ marginTop: "-75px" }}
      >
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <Link to="/" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </Link>
                <Link to="/about" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </Link>
                <Link to="/service" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </Link>
                <Link to="/pediatric" className="text-light mb-2">
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Pediatric Physiontherapy
                </Link>
                {/* <Link  to="" className="text-light mb-2" ><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link> */}
                <Link to="/contact" className="text-light">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <h3 className="text-white mb-4">Popular Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                        <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div> */}
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch With Us</h3>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>Hyderabad,
                Telangana
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>Greater
                Noida, Uttar Pradesh
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>Pune,
                Maharastra
              </p>
              <p className="mb-2">
              <a href="mailto:rehab@missionwalk.in" className="text-white ">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                rehab@missionwalk.in
                </a>
                {/* <a className="text-white" href="mailto:rehab@missionwalk.in">rehab@missionwalk.in</a> */}
              </p>
              <p className="mb-0">
              <a href="tel:+91 12345678" className="text-white ">
              <i className="bi bi-telephone text-primary me-2"></i>
                + 91 9177300194</a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="https://www.facebook.com/MissionWalkOfficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="https://www.linkedin.com/in/ravi-badavath-937b30106"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href="https://www.instagram.com/dr_badavath_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fw-normal"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light py-4"
        style={{ background: "#051225" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-white border-bottom" href="#">
                  Mission Walk
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed with ❤️ by{" "}
                <a className="text-white border-bottom" href="/about">
                  Mission Walk
                </a>{" "}
                <br />
                {/* <p className="mb-0">Designed with ❤️ by <a className="text-white border-bottom" href="https://htmlcodex.com">Mission Walk</a> <br /> */}
                {/* Distributed by <a className="text-white border-bottom" href="https://themewagon.com">ThemeWagon</a>               */}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
};

export default Footer;
