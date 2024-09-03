import { Link } from "react-router-dom";

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
              className="mb-4"
              style={{
                fontSize: "40px",
                textAlign: "initial",
              }}
            >
              Feel free to Connect
              {/* Mission Walk is always there for you. */}
            </h2>
            <h4>
              Raipur (Chhattisgarh)
              </h4>
            <p className="mb-3">
            430, 4th floor, golden trade center, Sector 2, Priyadarshini Nagar Colony, New Rajendra Nagar, Raipur, Tikrapara, Chhattisgarh 492001
            </p>
            <h4>Ambikapur (Chhattisgarh)</h4>
            <p className="mb-3">
            45XV+GH3, Godhanpur Rd, Shankargarh, Ambikapur, Chhattisgarh 497001
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
