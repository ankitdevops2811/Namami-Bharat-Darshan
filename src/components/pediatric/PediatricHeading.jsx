/* eslint-disable react/prop-types */

const PediatricHeading = ({heading, content}) => {
  return (
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
               {heading}
              </h1>
            </div>
          </div>

          <p className="mb-4 animated zoomIn" style={{ fontSize: "22px" }}>
            {content}
          </p>
        </span>
      </div>
    </div>
  </section>
  )
}

export default PediatricHeading