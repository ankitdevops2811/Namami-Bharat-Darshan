import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'

const ContactPagesCard = () => {
  return (
    <section>
      <div
        className="container-fluid mb-5"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="row">
          <div className="col-lg-6 mb-4">
            <img
              src="/images/contact-img.JPG"
              alt="Contact Us"
              className="img w-100 mb-4"
              style={{ aspectRatio: "1.6/1" }}
            />
          </div>

          <div className="col-lg-6 mt-5" style={{ aspectRatio: "2/1" }}>
            <h2
              className="mb-5"
              style={{
                fontSize: "40px",
                textAlign: "initial",
              }}
            >
              Feel free to Connect
              {/* Mission Walk is always there for you. */}
            </h2>
            <h4>Hyderabad (Kukatpally)</h4>
            <p className="mb-3">
            4 TH FLOOR, Pragathi Nagar Rd, opp. NEXA SERVICE, near LAKE, Jawaharlal Nehru Technological University, Tulasi Nagar, Chenchu Guda, Kukatpally, Hyderabad, Telangana 500090
            </p>
            <h4>Hyderabad (Manikonda)</h4>
            <p className="mb-3">
            Aryamitra Qube, 3rd Floor, Rd Number 9, Alkapoor Township, Raghavendra Colony, Manikonda Jagir, Telangana 500089
            </p>
            <h4>Delhi NCR (Greater Noida)</h4>
            <p className="mb-3">
            Wegman's Business Park Plot no 3, Ground Floor Decathlon, Ecotech-II, Knowledge Park III, Greater Noida, Uttar Pradesh 201308
             
            </p>
            <h4>Pune (Maharastra)</h4>
            <p className="mb-4">
            Plot No 9, Platinum Techno Park, 2nd Floor, Pashan Sus Road, Baner Survey No 52/5/3, Mohan Nagar Co-Op Society, Baner, Pune, 411021, Maharashtra
            </p>
            <Link to="/contact">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPagesCard;
