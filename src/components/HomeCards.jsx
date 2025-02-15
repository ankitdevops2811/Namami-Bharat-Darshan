/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ imageSrc, title, text, linkTo }) => {
  return (
    <div className=" service-item wow zoomIn" data-wow-delay="0.3s">
      <div
        className="card mt-2 m-4"
        style={{ width: "350px", backgroundColor: "aliceblue", border: "none" }}
      >
        <div
          className="mt-2"
          style={{
            overflow: "hidden",
            borderRadius: "10px",
            // borderRadius: "50%",
            width: "95%",
            margin: "0 auto",
          }}
        >
          <img
            src={imageSrc}
            className="card-img-top mt-2"
            alt={title}
            style={{
              // borderRadius: "10px",
              width: "100%",
              height: "auto",
              aspectRatio: "1/1",
            }}
          />
        </div>
        <div className="card-body text-center" style={{ aspectRatio: "1/1",textAlign:"justify" }}>
          <h5 className="card-title mb-4">{title}</h5>
          <p className="card-text mb-4">{text}</p>
          <Link
            to={linkTo}
            className=""
            style={{ textDecoration: "underline", color: "cornflowerblue" }}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
