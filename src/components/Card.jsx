import React from 'react';
import { Link } from 'react-router-dom';

const CustomCard = ({ imageSrc, title, text, linkTo }) => {
  return (
    <div className="card">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to={linkTo} className="btn btn-primary">
          Button
        </Link>
      </div>
    </div>
  );
};

export default CustomCard;
