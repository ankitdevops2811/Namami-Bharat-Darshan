/* eslint-disable react/prop-types */

const PageHeading = ({heading}) => {
  return (
    <div className="container-xxl">
    <div className="page-header__content clearfix">
      <span className="page-subheader">
        <p
          className="mb-4 animated zoomIn text-center"
          // className="mb-4 animated zoomIn  text-center"
          style={{
            fontSize: "36px",
            fontWeight: "bolder",
            textAlign: "justify", // not working
            color: "#808B96",
          }}
        >
            {heading}
          {/* Dynamic Movement Intervention allows our team to incorporate
          more techniques and tools into the framework of a session.
          Also, DMI allows us to customize each plan based on your
          child’s needs and goals. */}
        </p>
      </span>
    </div>
  </div>
  )
}

export default PageHeading

// eslint-disable-next-line react/prop-types


{/* DMI is the perfect complement
          to our intensive model of therapy, which focuses on
          incorporating multiple therapeutic techniques. */}