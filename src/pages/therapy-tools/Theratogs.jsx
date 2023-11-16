const Theratogs = () => {
  return (
    <>
      {/* <!--Inner Banner starts--> */}

      <div
        className="inner_banner testimonial_banner"
        style={{
          backgroundImage: `url(https://napacenter.org/wp-content/uploads/2021/09/Theratogs-2.jpg)`,
        }}
      >
      <div className="container-fluid bg-primary py-5 hero-header mb-5">

        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="innerbanner_height">
                <div className="innerbanner_middle">
                  <h1>
                    {" "}
                    <br /> Theratogs
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* <!--Inner Banner end--> */}

      {/* <!--Inner Content--> */}
      <div className="inner_content our_programs_details">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="our_programs_details_inner">
                <div className="our_programs_details_left">
                  <p style={{ fontSize: "22px", textAlign:"justify" }}>
                    TheraTogs are an orthotic undergarment and strapping product
                    recommended for children who may benefit from increased
                    proprioception as well as improved postural alignment,
                    stability, and/or prolonged muscle stretch to improve
                    developmental and functional outcomes.
                  </p>
                </div>
                <div className="our_programs_details_right">
                  <p style={{ fontSize: "22px", textAlign:"justify" }}>
                    TheraTogs are an orthotic undergarment and strapping product
                    recommended for children who may benefit from increased
                    proprioception as well as improved postural alignment,
                    stability, and/or prolonged muscle stretch to improve
                    developmental and functional outcomes.
                  </p>
                  <p style={{ fontSize: "22px", textAlign:"justify" }}>
                    TheraTogs may be useful for kiddos with: hypotonia, ataxia,
                    gait deviations, cerebral palsy, brain injury, ASD, postural
                    alignment issues, athetosis, weakness and balance problems,
                    joint laxity to name a few.
                    <br />
                    Benefits of TheraTog wear:
                  </p>
                  <ul>
                    <li style={{ fontSize: "22px", textAlign:"justify" }}>Improved functional alignment</li>
                    <li style={{ fontSize: "22px", textAlign:"justify" }}>Gentle and prolonged stretch in an aligned position</li>
                    <li style={{ fontSize: "22px", textAlign:"justify" }}>
                      Normalized bone and joint development due to improved
                      alignment
                    </li>
                    <li style={{ fontSize: "22px", textAlign:"justify" }}>Increased body awareness</li>
                    <li style={{ fontSize: "22px", textAlign:"justify" }}>Postural stabilization</li>
                  </ul>
                  <h3></h3>
                  <p style={{ fontSize: "22px", textAlign:"justify" }}>
                    Your therapist may trial a TheraTogs with your child in
                    clinic before recommending one for purchase. As a FDA
                    registered medical device, TheraTogs are often covered by
                    insurance and may be procured through your child’s orthotist
                    or DME provider.
                  </p>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="program_details_outer_div"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Inner Content--> */}
    </>
  );
};

export default Theratogs;
