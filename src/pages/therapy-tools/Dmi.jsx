import { Link } from "react-router-dom";
import "./therapy-2.css";
import TitleBar from "../../components/therapy-tools/TitleBar";
import PageHeading from "../../components/therapy-tools/PageHeading";
import { therapytools } from "../../data/Constant";

const Spidercage = () => {

  return (
    <div className="pb-5">
      <TitleBar name = 'Celebrate Your Dream Wedding in the Heart of Spiritual Splendor' />

      <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
          <PageHeading heading = {therapytools.Destination_weding}/>
            <div className="container-xxl">
              <div className="container py-5">
                <div className="row g-5">
                  <div
                    className="col-lg-5 animated zoomIn"
                    style={{ minHeight: "500px" }}
                  >
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute w-100 h-100 rounded wow zoomIn"
                        data-wow-delay="0.9s"
                        src="/images1/destinationwedding.jpg"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3">
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Destinity Towards {""}
                      <span style={{ color: "darkgoldenrod" }}>NBD </span>
                      Culture Marraige?
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                    From the tranquil temples of South India to the opulent palaces of North India and the picturesque settings of Assam, we offer bespoke wedding solutions that blend your personal style with the spiritual essence of these sacred places. Let us handle every detail, ensuring a seamless and enchanting experience that celebrates your love story in the most divine and culturally significant settings.
                    </p>
                    <h2
                      className="wow zoomIn py-2"
                      style={{ fontSize: "30px" }}
                    >
                      Why We Love {""}
                      <span style={{ color: "darkgoldenrod" }}>Culture Destination Marriage </span>
                    </h2>
                    <p
                      className="mb-4 animated zoomIn"
                      style={{ fontSize: "22px", textAlign: "justify" }}
                    >
                    Customizable and Authentic: At Namaami Bharat Darshan, we offer personalized services to tailor every aspect of your wedding to match your dreams and cultural preferences. From traditional rituals and historical decor to contemporary amenities and modern comforts, we handle every detail with care and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="wow zoomIn pb-3" style={{ fontSize: "30px" }}>
              {""}
              <span style={{ color: "darkgoldenrod" }}>NBD </span>
              Makes Moment More Memorable
            </h2>
            <p
              className=" wow zoomIn our_programs_details pt-2"
              data-wow-delay="0.12s"
              style={{ fontSize: "22px", textAlign: "justify" }}
            >
            Transform your special occasions into unforgettable experiences with Namaami Bharat Darshan. We specialize in creating bespoke travel and event services that turn your moments into lasting memories. Whether it's a dream wedding in a historic temple, a serene spiritual retreat, or a celebratory event at a picturesque destination, we ensure every detail is crafted to perfection.
              <strong>
                {" "}
                <Link to="/contact">contacting us &nbsp;</Link>
              </strong>
              to learn more.
            </p>
          </div>
        </div>
      </div>
      {
   <div className=" our_programs_details pb-5">
        <div className="container">
          <div className="row">
          <h1 className="wow zoomIn pb-3" data-aos-offset="200" style={{ fontSize: "38px" }}>
                Why Choose {''}
                <span style={{ color: "darkgoldenrod" }}>
                 NBD {" "}
                </span>
              
              </h1>
              <ul
                className=" wow zoomIn ps-1"
                data-wow-delay="0.11s"
                style={{ fontSize: "22px" }}
              >
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2 "></i>
                Unique Cultural Experiences
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>
                Expertise in Destination Weddings
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                  Personalized Planning
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                  Seamless Event Execution
                  </span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}> Rich Cultural Integration</span>
                </li>
                <li style={{ fontWeight: "500" }}>
                <i className="bi bi-check-circle text-success fs-3 me-2"></i>

                  <span style={{ fontWeight: "500" }}>
                  Choose Namaami Bharat Darshan for a wedding that is not just memorable but truly extraordinary. With our dedication to cultural richness, personalized planning, and flawless execution, we make your marriage a celebration of love and tradition that will be remembered for years to come.
                  </span>
                </li>
              </ul>
          </div>
        </div>
      </div> 
}
    </div>
  );
};

export default Spidercage;



