
const ServiceCard = ({ title, description, bgColor, textColor }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 col-12">
      <div
        className={`card ${bgColor ? `bg-${bgColor} text-${textColor}` : ""}`}
        style={{ paddingBlock: "10%" }}
      >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
