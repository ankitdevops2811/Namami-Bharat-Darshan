import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import LimbCard from "./Cards/LimbLossCard";
import ContactPagesCard from "../../components/contactPagesCard";

const DifficultyInWalking = () => {
  return (
    
    <>
    {/* <div>About</div> */}
    {/* <!-- Hero Start --> */}
    <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
        <div className="row py-3">
            <div className="col-12 text-center">
                <h1 className="display-3 text-white animated zoomIn">Limb Loss & Impairment</h1>
                {/* <a href="" className="h4 text-white">Home</a> */}
                <i className="far fa-circle text-white px-2"></i>
                <p className="h4 text-white">Amputation or limb impairment can affect ability, but doesn’t have to affect the quality of your life. We meet patients’ unique needs by integrating medical expertise, technology, engineering (prosthetics, orthotics, bionics, robotic devices) and a range of therapies.</p>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}

    {/* <!-- About Start --> */}

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7">


                    {/* <p className="mb-4" style={{ fontSize: '18px' }}>
        The sooner you start rehabilitation, the greater potential for recovery. Our pioneering work reveals that patients with stroke benefit greatly from early, high-intensity therapy … regardless of the type or severity of the stroke. We are the world’s choice for stroke care, research and outcomes.
        </p> */}
                    <h1 className="display-5 mb-0" style={{ fontSize: '26px' }}>
                    How We Can Help
                    </h1>

                    <p className="text-body mb-4">You want to recover what’s most important in your life. We challenge ourselves to innovate ways to make that possible.</p>

                    <div className="row g-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/mission-walk-images/3e82004b-1f7b-43d1-aa1a-6703185f9355.JPG" />
                                <Card.Body>
                                    <Card.Title>Renewed Vigor Following a Quadruple Amputation</Card.Title>
                                    <Card.Text>
                                    Ethan was enjoying his work as a healthcare consultant after graduating from Northwestern. In January 2015 an infection led to a life-changing outcome..
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9 2.JPG" />
                                <Card.Body>
                                    <Card.Title>Former Miss America Contestant Tries Out Mind-Controlled Bionic Arm</Card.Title>
                                    <Card.Text>
                                    Born without a left forearm, Nicole competed in pageants and became Miss Iowa. She gained a large social following and now shows off a custom-made bionic arm.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9 2.JPG" />
                                <Card.Body>
                                    <Card.Title>Prosthetics & Orthotics</Card.Title>
                                    <Card.Text>
                                    Certified prosthetics and orthotics clinicians, working collaboratively with your doctors and therapists to deliver your customized device needs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                 
                    </div>
                    <a
                        href="appointment.html"
                        className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                        data-wow-delay="0.6s"
                    >
                        Make Appointment
                    </a>
                </div>
                <div className="col-lg-5" style={{ minHeight: "300px" }}>
                    <div className="position-relative h-100">
                        <img
                            className="position-absolute w-100 h-100 rounded wow zoomIn"
                            data-wow-delay="0.9s"
                            src="/mission-walk-images/656e4782-2f1e-4672-b384-d4db2f053360.JPG"

                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="our_programs_details_inner">
                        <div className="our_programs_details_left">
                            {/* <p>
            The NeuroSuit frames the body providing support and
            resistance simultaneously. It facilitates proper movement
            and provides additional weight bearing distributed
            strategically throughout the body.
          </p> */}
                            <img
                                decoding="async"
                                // fetchpriority="high"
                                width="300"
                                height="300"
                                className="size-full wp-image-31823 aligncenter"
                                src="/mission-walk-images/cb9acd9e-9ab3-4bdc-b996-f53a5957cd87.JPG"
                                // src="https://napacenter.org/wp-content/uploads/2021/09/Registered-Practitioner-logo.png"
                                alt=""
                            />
                        </div>
                        <div className="our_programs_details_right">
                            {/* <p>
            The NeuroSuit is one of the pillars of our three-week
            <a
              href="https://napacenter.org/our-programs/intensive-therapy/"
              target="_blank"
              // rel="noopener"
              rel="noreferrer"
            >
              intensive therapy program
            </a>
            . The NeuroSuit is worn for two-hour periods under the
            supervision of our highly trained physical and occupational
            therapists. It is made of a vest, shorts, knee and elbow
            pads, gloves, shoe attachments, and a hat if necessary. All
            these pieces are interlocked by bungee type cords. These
            cords assist with proper alignment of the body and
            essentially frame the body from the outside (external
            skeleton).
          </p> */}
                            <h3></h3>

                            <h3>How We Heel</h3>
                            <p>
                            At the cutting edge of prosthetics, bionics, and care, our specialized Innovation Center and Ability Lab set patients up for the best possible outcomes.
                            </p>

                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
            <ul  className="list-unstyled" style={{fontSize:"18px"}}>
              <li>
                <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                Legs + Walking Lab
              </li>
              <li>
                <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                Arms + Hands Lab
              </li>
              <li>
                <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                Strength + Endurance Lab
              </li>
              <li>
                <i className="bi bi-check-circle text-success me-2 fs-4"></i>
                Think + Speak Lab
              </li>
            </ul>
          </div>



                           
                            <h3>Science-Driven Care</h3>
                            <p>
                            With hundreds of clinical studies under way — some dedicated to the needs of patients with limb loss or impairment — we offer you access to the world’s most advanced research, which can directly impact your outcome. Our prosthetics — including thought-controlled bionic limbs — are revolutionary.
                                <a href="http://www.napacenter.org/contact/">
                                    contacting us
                                </a>
                                to learn more.
                            </p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="our_programs_details_list">
                    <div className="programs_details_list_txt">

                    <b>Clinical Trials & Research Studies</b>
                    </div>
                    <div className="program_details_outer_div">
                    <div className="program_details_outer_div">
            <LimbCard />
          </div>
</div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}
    <ContactPagesCard />

</>

  )
}

export default DifficultyInWalking