import React from "react";
import CustomCard from "../../components/Card";
import { Link } from "react-router-dom";
import "./paediatry.css";

const PediatricCards = () => {
  return (
    <section
      className="services py-5"
      id="services"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="container-fluid py-5" >
        {/* <div
        className="container-xxl py-5"
        style={{ backgroundColor: "aliceblue" }}
      > */}
        {/* <div className="container"> */}
        {/* <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1>Our Programs</h1>
          </div> */}

        <div className="container">
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <CustomCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
    // <section className="services py-5"
    // style={{ backgroundColor: "aliceblue" }}
    // >
    //   <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    //     <div className="container">
    //       <div className="row g-5">
    //   <div className="row justify-content-center">
    //     <div className="col-md-4">
    //       <div
    //         className="card"
    //         style={{ backgroundColor: "aliceblue", border: "none" }}
    //       >
    //         <div
    //           className="mb-4"
    //           style={{
    //             overflow: "hidden",
    //             borderRadius: "50%",
    //             width: "200px",
    //             margin: "0 auto",
    //           }}
    //         >
    //           <img
    //             src="mission-walk-images/f2858078-9380-4fa2-97ed-ef760d7bb869.JPG"
    //             className="card-img-top"
    //             alt="pediatric"
    //             style={{ borderRadius: "50%", width: "100%", height: "auto" }}
    //           />
    //         </div>
    //         <div className="card-body text-center">
    //           <h5 className="card-title mb-4">
    //             Paediatric Occupational Therapy
    //           </h5>
    //           <p className="card-text mb-4">
    //             Our paediatric occupational therapists assist children in
    //             performing “occupations” with the greatest level of independence
    //             possible. Childhood occupations include learning in school and
    //             playing with friends.
    //           </p>
    //           <Link to="/pediatric-occupational" className="">
    //             Read More
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <div
    //         className="card"
    //         style={{ backgroundColor: "aliceblue", border: "none" }}
    //       >
    //         <div
    //           className="mb-4"
    //           style={{
    //             overflow: "hidden",
    //             borderRadius: "50%",
    //             width: "200px",
    //             margin: "0 auto",
    //           }}
    //         >
    //           <img
    //             src="mission-walk-images/13caae38-820f-4a5a-a4b1-982386f1fd17.JPG"
    //             className="card-img-top"
    //             alt="pediatric"
    //             style={{ borderRadius: "50%", width: "100%", height: "auto" }}
    //           />
    //         </div>
    //         <div className="card-body text-center">
    //           <h5 className="card-title mb-4">
    //             Paediatric Occupational Therapy
    //           </h5>
    //           <p className="card-text mb-4">
    //             Our Centre takes an intensive approach to paediatric
    //             physiotherapy using the NeuroSuit and Multifunctional Therapy
    //             Units. We offer paediatric physiotherapy in both weekly and
    //             intensive settings.
    //           </p>
    //           <Link to="/pediatric-occupational" className="">
    //             Read More
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <div
    //         className="card"
    //         style={{ backgroundColor: "aliceblue", border: "none" }}
    //       >
    //         <div
    //           className="mb-4"
    //           style={{
    //             overflow: "hidden",
    //             borderRadius: "50%",
    //             width: "200px",
    //             margin: "0 auto",
    //           }}
    //         >
    //           <img
    //             src="mission-walk-images/7d5ad1c2-5e7e-4e18-bab6-98a14e40e603.JPG"
    //             className="card-img-top"
    //             alt="pediatric"
    //             style={{ borderRadius: "50%", width: "100%", height: "auto" }}
    //           />
    //         </div>
    //         <div className="card-body text-center">
    //           <h5 className="card-title mb-4">
    //             Paediatric Occupational Therapy
    //           </h5>
    //           <p className="card-text mb-4">
    //             Paediatric speech therapists use a variety of therapy techniques
    //             to address oral motor dysfunction, apraxia, fluency, receptive
    //             and expressive language to help your child improve overall
    //             communication and feeding development.
    //           </p>
    //           <Link to="/pediatric-occupational" className="">
    //             Read More
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    //   </div>
    //   </div>
    // </section>
  );
};

export default PediatricCards;
const cardData = [
  {
    imageSrc: "mission-walk-images/f2858078-9380-4fa2-97ed-ef760d7bb869.JPG",
    title: "Paediatric Occupational Therapy",
    text: "Our paediatric occupational therapists assist children in performing “occupations” with the greatest level of independence possible. Childhood occupations include learning in school and playing with friends.",
    linkTo: "/pediatric-occupational",
  },
  {
    imageSrc: "mission-walk-images/13caae38-820f-4a5a-a4b1-982386f1fd17.JPG",
    title: "Paediatric Physiotherapy",
    text: "Our Centre takes an intensive approach to paediatric physiotherapy using the NeuroSuit and Multifunctional Therapy Units. We offer paediatric physiotherapy in both weekly and intensive settings.",
    linkTo: "/pediatric-physiotherapy",
  },
  {
    imageSrc: "mission-walk-images/7d5ad1c2-5e7e-4e18-bab6-98a14e40e603.JPG",
    title: "Paediatric Speech Therapy",
    text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
    linkTo: "/pediatric-speech",
  },
  // {
  //   imageSrc: "img/mission-walk-hyderabad-5cf92914afb61.jpeg",
  //   title: "Paediatric Speech Therapy",
  //   text: "Paediatric speech therapists use a variety of therapy techniques to address oral motor dysfunction, apraxia, fluency, receptive and expressive language to help your child improve overall communication and feeding development.",
  //   linkTo: "/page1",
  // },//css for adding 4 cards <div key={index} className="col-lg-3 col-md-6 mb-4">
];
