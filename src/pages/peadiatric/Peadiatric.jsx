import PediatricCards from "./PediatricCards";
import "./therapy.css";

export default function Pediatric() {
  return (
    <>
      {/* <div className="programs_details_list_txt"> */}
<div>
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Pediatric Innovation Center
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

      <div className="programs_details_list_txt">
        <div className="page-header__content clearfix">
          <span className="page-subheader">
            <p>
              <strong>
                Elevate Wellness Innovation<sup>™</sup>
              </strong>
            </p>

            <p>
              Pediatric primary care is uniquely qualified to serve as a key
              test bed for translating 21st-century biology and new measures
              into more effective strategies for strengthening the foundations
              of early learning, adaptive behavior, and both physical and mental
              health. Mission Walk AbilityLab is the research rehabilitation
              hospital to dedicate an entire floor to treating pediatric
              patients. Our Pediatric Innovation Center provides
              state-of-the-art care and features a comfortable, colorful and
              uplifting atmosphere for young patients and their families.
            </p>
          </span>
          <hr className="hr mb-0 mt-5" />
        </div>
      </div>
      {/* mm */}
      {/* <div
          className="container-fluid py-1 wow fadeInUp"
          data-wow-delay="0.1s"
        > */}
      <div className="container-xxl">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1>Our Mission</h1>
          </div>
        </div>

        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <p className="mb-4" style={{ fontSize: "20px" }}>
                At Mission Walk AbilityLab, we continue to lead in our
                comprehensive care for children and adolescents with traumatic
                injuries, congenital and developmental disorders. We also
                continue our leadership in providing the best — and sometimes
                only — hope of recovery for infants, toddlers and teens
                surviving tragic circumstances such as gunshot wounds or abuse..</p>
                <br />
                <p  className="mb-4" style={{ fontSize: "20px" }}>
                The Pediatric Innovation Center provides state-of-the-art care
                and features a comfortable, colorful and uplifting atmosphere
                for young patients, their families and caregivers. Clinicians
                and scientists associated with the Center include exceptionally
                qualified practitioners in specific areas of care — particularly
                in the special competencies required to treat children. To drive
                the best possible outcomes for their young patients, these
                pediatric specialists also leverage the leading knowledge and
                discoveries evolving in other Innovation Centers.
              </p>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="img/img_150457_drravi9x6.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr mb-0 mt-5" />

      </div>
      
      {/* </div> */}
      <PediatricCards />
      </div>

    </>
  );
}
