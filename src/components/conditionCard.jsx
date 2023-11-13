import React from 'react'
import { Link } from 'react-router-dom';

const ConditionCard = ({ imageSrc, title, text, linkTo }) => {
    return (
      <div
        className="card"
        style={{ width: "350px", backgroundColor: "aliceblue", border: "none" }}
      >
        <div
          className="mb-4"
          style={{
            overflow: "hidden",
            borderRadius: "50%",
            width: "200px",
            margin: "0 auto",
          }}
        >
          <img
            src={imageSrc}
            className="card-img-top"
            alt={title}
            style={{ borderRadius: "50%", width: "100%", height: "auto" }}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title mb-4">{title}</h5>
          <p className="card-text mb-4">{text}</p>
          <Link
            to={linkTo}
            className=""
            // style={{ backgroundColor: "aliceblue", border: "none" }}
          >
            Read More
          </Link>
        </div>
      </div>
    );
  };

export default ConditionCard