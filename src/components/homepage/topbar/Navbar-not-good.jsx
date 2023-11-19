import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div><nav
    className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom"
    style={{ height: "109px"}}
  >
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        {/* Use Bootstrap utility classes to control image size */}
        <img
          src="/img/logo.png"
          alt="Mission-walk Logo"
          className="img-fluid h-100"
          style={{ maxWidth: "100px" }}
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ zIndex: "1000", backgroundColor: "white", }}
      >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
          <li className="nav-item">
            <Link className="nav-link active text-primary" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/service"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Problem We Treat
            </Link>
            <ul className="dropdown-menu" 
            aria-labelledby="navbarDropdown"
            >
              <li>
                <Link
                  className="dropdown-item"
                  to="/conditions/stroke-recovery"
                >
                  Stroke Recovery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/spinal">
                  Spinal Cord Injury
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/brain">
                  Brain Injury Recovery
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/conditions/multiple-sclerosis"
                >
                  Multiple Sclerosis
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/conditions/parkinsons">
                  Parkinson&apos;s disease
                </Link>
              </li>
              {/* <li>
                <hr className="dropdown-divider" />
              </li> */}
              {/* <Link to="/conditions/transverse-myelitis" className="dropdown-item">
        Transverse Myelitis
      </Link> */}
              {/* <Link to="/conditions/balance-mobility" className="dropdown-item">
        Balance and Mobility Issues
      </Link> */}
              <li>
                <Link
                  className="dropdown-item"
                  to="/conditions/cerebral-palsy"
                >
                  Cerebral Palsy
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/conditions/pain-management"
                >
                  Pain Management
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/conditions/difficulty-in-walking"
                >
                  Limb Loss & Impairment
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/service">
                  View All
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pediatric">
              Pediatric Physiontherapy
            </Link>
          </li>
          {/* Therapy Tools */}
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/therapy-tools"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Therapy Tools
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item"
                  to="/therapy-tools/neurosuit"
                >
                  Neurosuit
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/therapy-tools/spidercage"
                >
                  Spidercage
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/therapy-tools/dmi">
                  DMI
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/therapy-tools/functional-estim"
                >
                  Functional Estim
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/therapy-tools/galileo">
                  Galileo
                </Link>
              </li>

              <li>
                <Link
                  className="dropdown-item"
                  to="/therapy-tools/theratogs"
                >
                  Theratogs
                </Link>
              </li>
            </ul>
          </li>
          {/* End */}
          <li className="nav-item">
            <Link className="nav-link" to="/locations">
              Locations
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              // to="/service"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Get Started
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/registration-process">
                  Intensive Registration
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/intake-forms">
                  Intake Form
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/Frequently-asked-questions"
                >
                  Frequently Asked
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/intake-forms"
              // style={{backgroundColor:"lightblue"}}
            >
              <button className="btn btn-primary">Appointment</button>
            </Link>
          </li>
        </ul>
        {/* <li className="nav-item">
            <Link
              className="nav-link"
              to="/intake-forms"
              style={{backgroundColor:"lightblue"}}
            >
              Appointment
            </Link>
          </li> */}
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar2