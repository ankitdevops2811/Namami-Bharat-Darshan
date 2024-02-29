/* eslint-disable react/prop-types */

const ConditionCard = ({ imageSrc, title, text, linkTo }) => {
  return (
    <div
      className="card mt-2"
      style={{ width: "350px", backgroundColor: "aliceblue", border: "none" }}
    >
      <div
        className="mb-4 mt-5"
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
          style={{
            borderRadius: "50%",
            width: "100%",
            height: "auto",
            aspectRatio: "1/1",
          }}
        />
      </div>
      <div className="card-body text-center" style={{ aspectRatio: "1/1" }}>
        <h5 className="card-title mb-4">{title}</h5>
        <p className="card-text mb-4">{text}</p>
      </div>
    </div>
  );
};

export default ConditionCard;
