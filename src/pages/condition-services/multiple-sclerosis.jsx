import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MsCard from "./Cards/brain-Card";
import ContactPagesCard from "../../components/contactPagesCard";

const MultipleSclerosis = () => {
    return (
        <>
            {/* <div>About</div> */}
            {/* <!-- Hero Start --> */}
            <div className="card container-fluid bg-primary py-5 hero-header mb-5 ">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Multiple Sclerosis</h1>
                        <i className="far fa-circle text-white px-2"></i>
                        <p className="h4 text-white">People with multiple sclerosis (MS) come to us for inpatient, outpatient or day rehabilitation. We focus on medical treatments and therapies for building strength, motor function and communication. We also offer guidance on diet, support groups and assistive devices. </p>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}

            {/* <!-- About Start --> */}

            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">


                            <h1 className="display-5 mb-0" style={{ fontSize: '26px' }}>
                                Our Patients Are Our Priority

                            </h1>

                            <p className="text-body mb-4">Living with MS requires physical, emotional and psychological endurance. Read our patients' journeys, and learn about our differentiating services.</p>

                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/mission-walk-images/3e82004b-1f7b-43d1-aa1a-6703185f9355.JPG" />
                                        <Card.Body>
                                            <Card.Title>Living Fully with Multiple Sclerosis</Card.Title>
                                            <Card.Text>
                                                At a poetry reading, a fellow attendee noticed Deborah’s gait and asked, "MS?” A later week-long hospital stay and battery of tests confirmed she did have MS.
                                            </Card.Text>
                                            <Button variant="primary">read more..</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="/mission-walk-images/547c7022-dc4d-4636-9a12-4b25c9b69de9 2.JPG" />
                                        <Card.Body>
                                            <Card.Title>Spasticity Clinic</Card.Title>
                                            <Card.Text>
                                                Spasticity rehabilitation aids children and adults who experience functional loss, contracture and pain due to CP, MS, brain/spinal cord injuries or stroke.
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
                                    <img
                                        decoding="async"
                                        // fetchpriority="high"
                                        width="300"
                                        height="300"
                                        className="size-full wp-image-31823 aligncenter"
                                        src="/mission-walk-images/cb9acd9e-9ab3-4bdc-b996-f53a5957cd87.JPG"
                                        alt=""
                                    />
                                </div>
                                <div className="our_programs_details_right">
                                    <h3></h3>

                                    <h3>How We Heel</h3>
                                    <p>
                                        Every person with MS has unique medical and therapeutic needs. We find ways to bring you relief with therapy, pain management, customized mobility or communication devices, and by applying advances in neuromuscular science.
                                    </p>

                                    <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                        <ul className="list-unstyled" style={{ fontSize: "18px" }}>
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

                                    {/* Points */}
                                    <h3>Science-Driven Care</h3>
                                    <p>
                                        With hundreds of clinical studies under way — some dedicated to understanding and treating neuromuscular conditions such as MS — we offer you access to the world’s most advanced research, which can directly impact your outcome.
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
                                    <MsCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* Contact Page Dynamic Called */}
            <ContactPagesCard />

        </>
    )
}

export default MultipleSclerosis