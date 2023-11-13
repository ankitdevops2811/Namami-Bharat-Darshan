
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import strokeCards from "./Cards/Stroke-Card";

const Stroke = () => {

    return (
        <>
            {/* <div>About</div> */}
            {/* <!-- Hero Start --> */}
            <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Stroke Recovery</h1>
                        {/* <a href="" className="h4 text-white">Home</a> */}
                        <i className="far fa-circle text-white px-2"></i>
                        <p className="h4 text-white">The sooner you start rehabilitation, the greater potential for recovery. Our pioneering work reveals that patients with stroke benefit greatly from early, high-intensity therapy … regardless of the type or severity of the stroke. We are the world’s choice for stroke care, research and outcomes.</p>
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
                                Programs, Services & Patients

                            </h1>

                            <p className="text-body mb-4">You want to recover what’s most important in your life — be it mobility,
                                independence, walking, swallowing or speaking again. Together we reach for those goals.</p>

                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/img/price-1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Stroke Recovery— What sets us apart?</Card.Title>
                                            <Card.Text>
                                                See what sets us apart from other rehabilitation hospitals and
                                                why our outcomes for stroke patients are exceptional.
                                            </Card.Text>
                                            <Button variant="primary">read more..</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/img/price-1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Stroke Specialty Services</Card.Title>
                                            <Card.Text>
                                                Our wide array of services for stroke patients will help you and your
                                                family navigate your recovery.
                                            </Card.Text>
                                            <Button variant="primary">read more..</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/img/price-1.jpg" />
                                        <Card.Body>
                                            <Card.Title>Ryan's Story: Surviving a Stroke at 20</Card.Title>
                                            <Card.Text>
                                                Ryan suffered a stroke when he was just 20. After months of therapy, he has made an incredible recovery.
                                                He has learned to walk and improved hand function.
                                            </Card.Text>
                                            <Button variant="primary">read more..</Button>
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
                                    src="/img/strokerecovery.jpg"

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
                                        src="/mission-walk-images/neuro.JPG"
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
                                        Our integrated team of physicians, nurses, therapists, researchers and case managers understand the most complex injuries. They create programs for
                                        each patient – tailored to your individual goals.
                                        Therapy may take place in one or several ability labs.
                                    </p>

                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <Card style={{ width: '18rem' }}>
                                            {/* <Card.Img variant="top" src="/img/price-1.jpg" /> */}
                                            <Card.Body>
                                                <Card.Title>Legs + Walking Lab</Card.Title>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <Card style={{ width: '18rem' }}>
                                            {/* <Card.Img variant="top" src="/img/testimonial-1.jpg" /> */}
                                            <Card.Body>
                                                <Card.Title>Arms + Hands Lab</Card.Title>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <Card style={{ width: '18rem' }}>
                                            {/* <Card.Img variant="top" src="/img/testimonial-1.jpg" /> */}
                                            <Card.Body>
                                                <Card.Title>Strength + Endurance Lab</Card.Title>
                                            </Card.Body>
                                        </Card>

                                    </div>
                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <Card style={{ width: '18rem' }}>
                                            {/* <Card.Img variant="top" src="/img/testimonial-1.jpg" /> */}
                                            <Card.Body>
                                                <Card.Title>Think + Speak Lab</Card.Title>
                                            </Card.Body>
                                        </Card>

                                    </div>



                                   
                                    <h3>Science-Driven Care</h3>
                                    <p>
                                    With nearly 200 clinical trials and research studies specifically dedicated to improving function and recovery from stroke (including treatment for aphasia) 
                                    — we offer you access to the world’s most advanced research, which can directly impact your recovery.
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
                
    </div>
                                <div className="our_programs_details_list">
                                    <div className="programs_details_list_txt">
                                        <b>Benefits of NeuroSuit</b>
                                    </div>
                                    <ul>
                                        <li>
                                            <h3>
                                                <span>01. </span>Create New Pathways
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Re-trains the central nervous system and creates NEW
                                                    pathways to/from the brain allowing new or improved
                                                    motor skills to be formed
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>02. </span>Muscle Tone
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Provide resistance to strong muscles to further
                                                    enhance strengthening while supporting weak muscles
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>03. </span>Dynamic Correction
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Provides dynamic correction of movements reinforcing
                                                    proper movement during skills such as walking, balance
                                                    and coordination
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>04. </span>Better Alignment
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Bring the body into correct alignment. Improves hip
                                                    alignment through vertical loading over the hip joint
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>05. </span>Increased Awareness
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Provides compression (tactile stimulation) distributed
                                                    throughout the body and increases spacial awareness of
                                                    the body&lt;/span
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>06. </span>Improved Motor Skills
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Promotes development of both fine and gross motor
                                                    skills
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>07. </span>Stronger Bones
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Improves bone density
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>08. </span>Strengthen Speech
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Improves speech production and its fluency through
                                                    head control and trunk support
                                                </span>
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <span>09. </span>Controlled Movement
                                            </h3>
                                            <p>
                                                <span style={{ fontWeight: "400" }}>
                                                    Decreases uncontrolled movement in ataxia and
                                                    athetosis. Helps to decrease contracture
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    );
};

export default Stroke;
