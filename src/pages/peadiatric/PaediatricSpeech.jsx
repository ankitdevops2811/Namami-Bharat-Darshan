import ContactPagesCard from "../../components/contactPagesCard";
import PediatricHeading from "../../components/pediatric/PediatricHeading";
import TitleBar from "../../components/therapy-tools/TitleBar";
import { pediatricContent } from "../../data/PeadtricConstant";

import "./paediatric.css";

const PaediatricSpeech = () => {
  return (
    <> 
    <TitleBar name= 'Pediatric Speech Therapy' /> 
     <PediatricHeading 
     heading= 'Pediatric Speech Therapy'
     content = {pediatricContent.PediatricSpeech} 
     />
      <section className="about my-5" id="about">
        <div className="container ">
          <div className="row">
            <div
              className="col-sm-12 col-md-6 col-lg-6 col-12 "
              data-aos="zoom-in"
              data-aos-offset="200"
            >
              <h1 data-aos="fade-up" data-aos-offset="200">
                <span style={{ color: "darkgoldenrod" }}>Speech Therapy</span>{" "}
                for Kids
              </h1>
              <p
                className="p-2  animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                It is crucial that a child who is limited with communication
                receives ongoing speech therapy so that they can learn to
                communicate their daily basic needs and wants to others in their
                environment. Paediatric speech therapy helps kids with
                communication, social skills, reading, enhances alternative
                communication methods, and more. At times, speech therapy may
                incorporate feeding or swallowing therapy.
              </p>
              <p
                className="mb-4  animated zoomIn"
                style={{ fontSize: "22px", textAlign: "justify" }}
              >
                Mission Walk paediatric speech therapists treat a diverse range
                of diagnoses including but not limited to:
              </p>
              <div>
                <ul
                  className="list-unstyled  animated zoomIn"
                  style={{ fontSize: "20px" }}
                >
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
                src="/images/neuro.JPG"
                width="300px"
                height="600px"
                className="img-fluid img-thumbnail"
                style={{ width: "80%" }}
              />
              <img
                src="/images/paediatric10.jpg"
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
          <div className="text-center my-5  animated zoomIn">
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
                  <p
                    className="card-text  animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
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
                  <h5 className="card-title mb-3  animated zoomIn">
                    Hanen Program
                  </h5>
                  <p
                    className="card-text mb-4  animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
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
                  <h5 className="card-title mb-3  animated zoomIn">
                    Beckman Oral Motor Approach
                  </h5>
                  <p
                    className="card-text mb-4  animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
                    Intervention program that provides assisted movement to
                    activate muscle contraction and increase functional strength
                    and control of articulatory musculature for speech
                    production
                  </p>
                </div>
              </div>
            </div>

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
                  <p
                    className="card-text mb-5  animated zoomIn "
                    style={{ textAlign: "justify" }}
                  >
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
                  <p
                    className="card-text  animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
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
                  <p
                    className="card-text mb-5  animated zoomIn"
                    style={{ textAlign: "justify" }}
                  >
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
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/rehab-center-image.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4  animated zoomIn">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/paediatric9.jpg"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/cs-image3.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/paediatric1.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/p-img.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes w-100 ftco-animate">
                <img
                  className="img w-100 mb-3  animated zoomIn"
                  src="/images/pediatric-4.JPG"
                  alt="img"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End */}
      <ContactPagesCard />
    </>
  );
};

export default PaediatricSpeech;
