import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        {/* <Link to="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>Mission-walk</h1>
        </Link> */}
        <Link to="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <img
              src="/img/logo.png"
              alt="Mission-walk Logo"
              style={{ maxHeight: "100px", maxWidth: "150px" }}
            />
          </h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              <strong> Home</strong>
             
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="/service"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Problem We Treat
              </Link>

              <div className="dropdown-menu m-0">
                <Link to="/conditions/stroke-recovery"  className="dropdown-item">
                  Stroke Recovery
                </Link>
                <Link to="/spinal" className="dropdown-item">
                  Spinal Cord Injury
                </Link>
                <Link to="/brain" className="dropdown-item">
                  Brain Injury Recovery
                </Link>
                <Link to="/conditions/multiple-sclerosis" className="dropdown-item">
                  Multiple Sclerosis
                </Link>
                <Link to="/conditions/parkinsons" className="dropdown-item">
                Parkinson&apos;s disease
                </Link>
                <Link to="/conditions/transverse-myelitis" className="dropdown-item">
                  Transverse Myelitis
                </Link>
                <Link to="/conditions/cerebral-palsy" className="dropdown-item">
                  Cerebral Palsy
                </Link>
              
                <Link to="/conditions/balance-mobility" className="dropdown-item">
                  Balance and Mobility Issues
                </Link>
                <Link to="/conditions/pain-management" className="dropdown-item">
                  Pain Management
                </Link>
                <Link to="/conditions/difficulty-in-walking" className="dropdown-item">
                Limb Loss & Impairment
                </Link>
                <Link to="/service" className="dropdown-item">
                  View All
                </Link>
              </div>
            </div>
            <Link to="/pediatric" className="nav-item nav-link">
            Pediatric Physiontherapy
            </Link>
            {/* Therapy Tools */}
            <div className="nav-item dropdown">
              <Link
                to="/therapy-tools"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Therapy Tools
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/therapy-tools/neurosuit" className="dropdown-item">
                  Neurosuit
                </Link>
                <Link to="/therapy-tools/spidercage" className="dropdown-item">
                  Spidercage
                </Link>
                <Link to="/therapy-tools/dmi" className="dropdown-item">
                  DMI
                </Link>
                <Link
                  to="/therapy-tools/functional-estim"
                  className="dropdown-item"
                >
                  Functional Estim
                </Link>
                <Link to="/therapy-tools/galileo" className="dropdown-item">
                  Galileo
                </Link>
                <Link to="/therapy-tools/theratogs" className="dropdown-item">
                  Theratogs
                </Link>
              </div>
            </div>
            {/* <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Locations
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="price.html" className="dropdown-item">
                  Hyderabad
                </Link>
                <Link to="team.html" className="dropdown-item">
                  Greater Noida
                </Link>
                <Link to="testimonial.html" className="dropdown-item">
                  Pune
                </Link>
              </div>
            </div> */}
            <Link to="/locations" className="nav-item nav-link">
              Locations
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Get Started
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/registration-process" className="dropdown-item">
                  Intensive Registration
                </Link>
                <Link to="/intake-forms" className="dropdown-item">
                  Intake Form
                </Link>
                {/* <Link to="appointment.html" className="dropdown-item">
                  Billing and insurance
                </Link> */}
                {/* <Link to="appointment.html" className="dropdown-item">
                  Grant options
                </Link> */}
                <Link to="/Frequently-asked-questions" className="dropdown-item">
                  Frequently Asked
                </Link>
                {/* <Link to="appointment.html" className="dropdown-item">
                  Clinic policies
                </Link> */}
              </div>
            </div>

            {/* <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Join Our Team
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="price.html" className="dropdown-item">
                  Carrers
                </Link>
                <Link to="team.html" className="dropdown-item">
                  Students
                </Link>
                <Link to="testimonial.html" className="dropdown-item">
                  Volunteer
                </Link>
                <Link to="appointment.html" className="dropdown-item">
                  Continuing Education
                </Link>
              </div>
            </div> */}

            {/* <Link to="/" className="nav-item nav-link">Locations</Link>
                <Link to="/" className="nav-item nav-link">Get Started</Link>
                <Link to="/" className="nav-item nav-link">Join Our Team</Link> */}
            <Link to="/contact" className="nav-item nav-link">
              Contact us
            </Link>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </button>
          <Link
            to="/intake-forms"
            className="btn btn-primary py-2 px-4 ms-3"
          >
            Appointment
          </Link>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Navbar;
