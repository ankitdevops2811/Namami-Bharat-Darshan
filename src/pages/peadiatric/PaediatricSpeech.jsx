import React from "react";
import "./paediatric.css";

const PaediatricSpeech = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Paediatric Speech Therapy
            </h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
              About
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
      <section className="bg-light p-5">
        <div className="container-xxl">
          <div className="page-header__content clearfix">
            <span className="page-subheader">
              <div className="container">
                <div
                  className="text-center mx-auto mb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                  style={{ maxWidth: "600px" }}
                >
                  <h1 style={{ fontSize: "38px" }}>
                    Paediatric Speech Therapy
                  </h1>
                </div>
              </div>
              <p className="mb-4" style={{ fontSize: "22px" }}>
                Our paediatric speech therapists use a variety of therapy
                techniques to address oral motor dysfunction, apraxia, fluency,
                receptive and expressive language, social pragmatics, and
                feeding and swallowing difficulties, to help your child improve
                overall communication and/or feeding development.We provide
                individualized speech therapy for kids with complex
                communication needs. Our speech language pathologists are
                experienced with a variety of Augmentative and Alternative
                Communication (AAC) devices while keeping a child’s individual
                strengths, difficulties, language skills, positioning, vision,
                and motor skills in mind. Speech therapists approach any
                alternative augmentative communication system with assuming
                absolute child competence and ability.
              </p>
            </span>
          </div>
        </div>
      </section>

      {/* //next */}
      <section className="about my-5" id="about">
        <div className="container ">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-12 "
              data-aos="zoom-in"
              data-aos-offset="200"
            >
              <h1 data-aos="fade-up" data-aos-offset="200">
                <span
                  style={{ color: "darkgoldenrod" }}
                >
                  Speech Therapy
                </span>{" "}
                for Kids
              </h1>
              <p className="p-2" style={{ fontSize: "18px" }}>
                It is crucial that a child who is limited with communication
                receives ongoing speech therapy so that they can learn to
                communicate their daily basic needs and wants to others in their
                environment. Paediatric speech therapy helps kids with
                communication, social skills, reading, enhances alternative
                communication methods, and more. At times, speech therapy may
                incorporate feeding or swallowing therapy.
              </p>
              <p className="mb-5" style={{ fontSize: "18px" }}>
                Mission Walk paediatric speech therapists treat a diverse range
                of diagnoses including but not limited to:
              </p>
              <div>
                <ul className="list-unstyled" style={{ fontSize: "18px" }}>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Autism Spectrum Disorder
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Cerebral Palsy
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Genetic, chromosomal, and metabolic disorders/syndromes
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Speech Sound Disorders
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Childhood Apraxia of Speech
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Complex Communication Needs/AAC
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Stroke
                  </li>{" "}
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Pragmatic Language Disorder
                  </li>{" "}
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Developmental Delay
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Fluency Disorders
                  </li>
                  <li>
                    <i className="bi bi-check-circle text-success me-2"></i>
                    Receptive/Expressive Language Impairment
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-end"
              data-aos="fade-right"
              data-aos-offset="200"
            >
              <img
                src="/img/hq720.jpg"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
              <img
                src="/img/hq720.jpg"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* next 1*/}
      <section className="services py-5 bg-light" id="services">
        <div className="container">
          <div className="text-center my-5">
            <h2>
              Therapy programs and techniques used by our speech language
              pathologists include, but are not limited to:
            </h2>
          </div>
          <div className="row" data-aos="zoom-in-up" data-aos-offset="200">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-3">PROMPT</h5>
                  <p className="card-text">
                    A multidimensional approach that integrates the
                    physical-sensory aspects of motor production with the
                    cognitive-linguistic and social-emotional aspects of
                    language to develop motor skill within the context of
                    meaningful language interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                {/* <div className="card bg-primary text-white"> */}
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-3">Hanen Program</h5>
                  <p className="card-text mb-4">
                    A practical therapy approach that incorporates
                    parent-training for building language, interaction, and
                    communication skills naturally through everyday routines and
                    activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-3">Beckman Oral Motor Approach</h5>
                  <p className="card-text mb-4" >
                    Intervention program that provides assisted movement to
                    activate muscle contraction and increase functional strength
                    and control of articulatory musculature for speech
                    production
                  </p>
                </div>
              </div>
            </div>

            {/* check */}
            {/* <div className="col-sm-12 col-md-4 col-lg-4 col-12">
            <div className="card" style={{width: "18rem"}}>

                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title">Beckman Oral Motor Approach</h5>
                  <p className="card-text">
                    Intervention program that provides assisted movement to
                    activate muscle contraction and increase functional strength
                    and control of articulatory musculature for speech
                    production
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="row mt-5"
            data-aos="zoom-in-down"
            data-aos-offset="200"
          >
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Social Thinking</h5>
                  <p className="card-text mb-5">
                    Treatment frameworks and strategies for developing
                    competency in both social cognitive thinking and social
                    skills in order to respond appropriately to social
                    information and participate in situational expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-3">AAC and Other Methods</h5>
                  <p className="card-text">
                    Low Tech Communication Boards/Books, Auto and Step-Scanning,
                    Eye Gaze Devices, Partner-assisted auditory or visual
                    scanning, Switches and switch placement (single or
                    two-switch), AAC programs on iPads and dedicated devices
                    (Proloquo2Go, TouchChat, GoTalk), Prentke Romich Company
                    programs (e.g., Language Acquisition through Motor Planning
                    [LAMP]; Unity), TobiiDynavox programs (e.g., Compass, PODD),
                    Pragmatic Organization Dynamic Display (PODD), Alternative
                    Access products and methods
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="card border-0">
                <div className="card-body">
                  <i className="bi bi-check-circle fs-4 text-success me-2"></i>
                  <h5 className="card-title mb-4">Integrative Approach</h5>
                  <p className="card-text mb-5">
                    Our trained paediatric speech therapists use a variety of
                    techniques and approaches tailored to fit each child’s
                    individual needs while emphasizing a total language approach
                    to help foster communicative success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last */}
      <section className="ftco-section py-5 mb-4">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-12 heading-section ftco-animate text-center">
              <h2 className="mb-1" style={{ fontSize: "40px" }}>
                Latest Picture From Gallery
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3"
                  src="/img/hq720.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
      <section style={{ backgroundColor: "aliceblue" }}>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <img
                src="/img/hq720.jpg"
                alt="Contact Us"
                className="img-fluid"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-lg-6 mt-5">
              <h2
                className="mb-5"
                style={{
                  marginBlock: "60px",
                  fontSize: "40px",
                  textAlign: "initial",
                }}
              >
                Feel free to Connect Mission Walk is always there for you.
              </h2>
              {/* <p className="mb-3">
                Mission Walk is always there for you.
              </p> */}
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaediatricSpeech;
