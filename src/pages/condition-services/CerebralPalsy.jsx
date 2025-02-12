import Card from 'react-bootstrap/Card';
import CpCard from './Cards/CP-Card';
import ContactPagesCard from '../../components/contactPagesCard';

const CerebralPalsy = () => {
  return (
    <>
      {/* <div>About</div> */}
      {/* <!-- Hero Start --> */}
      <div className='card container-fluid bg-primary py-5 hero-header mb-5 '>
        <div className='row py-3'>
          <div className='col-12 text-center'>
            <h1 className='display-3 text-white animated zoomIn'>
              Cerebral Palsy
            </h1>
            <i className='far fa-circle text-white px-2'></i>
            <p className='h4 text-white'>
              Each person with cerebral palsy (CP) has unique functional and
              therapeutic needs. We treat patients with CP of any age, at any
              point in their lives with the latest therapies for CP
              rehabilitation.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

      {/* <!-- About Start --> */}

      <div className='container-fluid py-5 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-7'>
              <h1 className='display-5 mb-0' style={{ fontSize: '26px' }}>
                Our Patients are Our Priority
              </h1>

              <p className='text-body mb-4'>
                You want to recover what’s most important in your life. Meet
                some of our patients and innovative programs that make it
                possible.
              </p>

              <div className='row g-3'>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.3s'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src='/images/cs-image4.jpg' />
                    <Card.Body>
                      <Card.Title>
                        An Active Life with Cerebral Palsy
                      </Card.Title>
                      <Card.Text>
                        Born with CP, Michelle started receiving rehabilitation
                        when she was only 6. Since then, she has made amazing
                        changes and now leads a full, active teenage life.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className='col-sm-6 wow zoomIn' data-wow-delay='0.6s'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant='top' src='/images/cs-image5.jpg' />
                    <Card.Body>
                      <Card.Title>Spasticity Clinic</Card.Title>
                      <Card.Text>
                        Spasticity rehabilitation aids children and adults who
                        experience functional loss, contracture and pain due to
                        CP, MS, brain/spinal cord injuries or stroke.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className='col-lg-5' style={{ minHeight: '300px' }}>
              <div className='position-relative h-100'>
                <img
                  className='position-absolute w-100 h-100 rounded wow zoomIn'
                  data-wow-delay='0.9s'
                  src='/images/pediatric-5.JPG'
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid py-5 wow fadeInUp' data-wow-delay='0.1s'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='our_programs_details_inner'>
                <div className='our_programs_details_left'>
                  <img
                    decoding='async'
                    width='600'
                    height='600'
                    className='size-full wp-image-31823 aligncenter'
                    src='/images/cs-image6.JPG'
                    alt=''
                  />
                </div>
                <div className='our_programs_details_right'>
                  <h3></h3>

                  <h3>How We Heel</h3>
                  <p>
                    With patients with CP, we focus on mobility, communication,
                    self-care and education. Throughout our Innovation Centers
                    and Ability Labs, doctors, therapists and scientists work
                    together, toward your best outcomes.
                  </p>

                  <div className='col-sm-6 wow zoomIn' data-wow-delay='0.6s'>
                    <ul className='list-unstyled' style={{ fontSize: '18px' }}>
                      <li>
                        <i className='bi bi-check-circle text-success me-2 fs-4'></i>
                        Gait Training Lab
                      </li>
                      <li>
                        <i className='bi bi-check-circle text-success me-2 fs-4'></i>
                        Arms + Hands Lab
                      </li>
                      <li>
                        <i className='bi bi-check-circle text-success me-2 fs-4'></i>
                        Strength + Endurance Lab
                      </li>
                      <li>
                        <i className='bi bi-check-circle text-success me-2 fs-4'></i>
                        Think + Speach Lab
                      </li>
                    </ul>
                  </div>

                  <h3>Science-Driven Care</h3>
                  <p>
                    We have hundreds of clinical studies under way — some
                    specifically CP-related. For example, we’re testing novel
                    stretching and assistive devices (software, toys, splints),
                    as well as exploring CP at the cell level. We offer you
                    access to the world’s most advanced research that can
                    directly impact your outcome.
                    <a href='http://www.napacenter.org/contact/'>
                      contacting us
                    </a>
                    to learn more.
                  </p>
                </div>
                <div className='clearfix'></div>
              </div>
              <div className='our_programs_details_list'>
                <div className='programs_details_list_txt'>
                  <b>Clinical Trials & Research Studies</b>
                </div>
                <div className='program_details_outer_div'>
                  <div className='program_details_outer_div'>
                    <CpCard />
                  </div>
                </div>
                <div className='our_programs_details_list'>
                  <div className='programs_details_list_txt'>
                    <b>Benefits of NeuroSuit</b>
                  </div>
                  <ul>
                    <li>
                      <h3>
                        <span>01. </span>Create New Pathways
                      </h3>
                      <p>
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
                          Improves bone density
                        </span>
                      </p>
                    </li>
                    <li>
                      <h3>
                        <span>08. </span>Strengthen Speech
                      </h3>
                      <p>
                        <span style={{ fontWeight: '400' }}>
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
                        <span style={{ fontWeight: '400' }}>
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
          <div className='video-iframe-container'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/9BVwDDbpOcI?si=Anvy4tShLs7hMobY'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* Contact Page Dynamic Called */}
      <ContactPagesCard />
    </>
  );
};

export default CerebralPalsy;
