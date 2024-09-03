import { Link } from "react-router-dom";
import "./get-started-page.css";

const RegistrationProcess = () => {
  return (
    <>
      {/* <!--Inner Banner starts--> */}
      <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Intensive Registration Process
            </h1>
          </div>
        </div>
      </div>

      {/* <!--Inner Banner end--> */}

      <div className="inner_content getstarted_bg1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 fix-size">
              <h2>2024-25 Registration Process</h2>
              <h3>Step 1: Complete Intake Paperwork </h3>
              <p className="para">
                If you are new to Namaami Bharat Darshan, the first step is to complete
                the Intake Form. This is very important as it is what our team
                uses to determine the appropriate intensive schedule for your
                child.&nbsp; The deadline to submit the Intake paperwork is
                &nbsp;
                <strong></strong>. Without it, you will not be able
                to continue with the registration process and will automatically
                be added to our waitlist instead.
              </p>
              <p className="para">
                If you have been to Namaami Bharat Darshan before and completed the Intake
                Form previously, you are NOT required to submit another Intake
                form. However, if there has been an update you feel our team
                should know about since your last visit, you are welcome to
                submit an update.
              </p>
              <h3>
                Step 2: Complete Registration Form between Nov 5 &#8211; Dec 10
              </h3>
              <p className="para">
                Registration for 2024 will be open to all families from Nov 5,
                2023 3pm (PDT) until October 8, 2023 11:59 (PDT).
              </p>
              <p className="para">
                Namaami Bharat Darshan employs a lottery system to allocate registration
                spots, rather than relying on time-stamped submissions. By
                giving families a window of time to submit their registration
                form, it is our hope that registration is less stressful and
                more fair for our less savvy technology users, while also
                accommodating busy family schedules.
              </p>
              <h3>Step 3: Keep an Eye on Your Email</h3>
              <p className="para">
                Please allow up to 10 business days after registration closes to
                reach out to you with your intensive schedule. If you are
                selected for an Intensive Spot, an email confirmation will be
                sent to the one on your registration. Please be patient as we
                expect a large volume of applications to be submitted.
              </p>
              <p className="para">
                If the session you requested is all booked, you will
                automatically be added to the waitlist and no further action
                will be needed at this time.
              </p>
              <h3>Step 4: Submit Deposit</h3>
              <p className="para">
                Confirmation emails will include information on how to submit
                your $1000 deposit for your session. Your spot is not confirmed
                until this deposit is received!
              </p>
              <div className="row">
                <section style={{ display: "flex", alignItems: "center" }}>
                  <h3>Looking for information about our other services?</h3>
                  <Link className="btn service-content-icon" to="/locations">
                    <i className="service-content-icon fa fa-plus text-primary me-1"></i>
                    read more
                  </Link>
                </section>
              </div>
              <div>
                <div className="button">
                  <Link to="/intake-forms" className="link-style">
                    Intake Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default RegistrationProcess;
