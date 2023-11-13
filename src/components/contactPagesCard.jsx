import React from 'react'

const ContactPagesCard = () => {
  return (
    <div>
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
                Feel free to Connect, Mission Walk is always there for you.
              </h2>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPagesCard