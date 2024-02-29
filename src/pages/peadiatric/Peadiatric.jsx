import ContactPagesCard from "../../components/contactPagesCard";
import PederiticImage from "../../components/pediatric/PederiticImage";
import PediatricHeading from "../../components/pediatric/PediatricHeading";
import PediatricPic from "../../components/pediatric/PediatricPic";
import TitleBar from "../../components/therapy-tools/TitleBar";
import { pediatricContent } from "../../data/PeadtricConstant";
import PediatricCards from "../../components/pediatric/PediatricCards";
import "./paediatry.css";

export default function Pediatric() {
  return (
    <>
      <div>
        <TitleBar name= ' Pediatric Innovation Center' />
        <PediatricHeading 
        heading= 'Elevate Wellness Innovation'
        content = {pediatricContent.PaediatricOccupational} 
        />
        <PediatricCards />

        <div className="container-xxl">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp mt-5 "
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1 className="mb-1" style={{ fontSize: "60px" }}>
                What we Do?
              </h1>
            </div>
          </div>

          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <p
                  className="mb-4 animated zoomIn"
                  style={{ fontSize: "20px", textAlign: "justify" }}
                >
                  At Mission Walk AbilityLab, we continue to lead in our
                  comprehensive care for children and adolescents with traumatic
                  injuries, congenital and developmental disorders. We also
                  continue our leadership in providing the best — and sometimes
                  only — hope of recovery for infants, toddlers and teens
                  surviving tragic circumstances such as gunshot wounds or
                  abuse..
                </p>
                <br />
                <p
                  className="mb-4 animated zoomIn"
                  style={{ fontSize: "20px", textAlign: "justify" }}
                >
                  The Pediatric Innovation Center provides state-of-the-art care
                  and features a comfortable, colorful and uplifting atmosphere
                  for young patients, their families and caregivers. Clinicians
                  and scientists associated with the Center include
                  exceptionally qualified practitioners in specific areas of
                  care — particularly in the special competencies required to
                  treat children. To drive the best possible outcomes for their
                  young patients, these pediatric specialists also leverage the
                  leading knowledge and discoveries evolving in other Innovation
                  Centers.
                </p>
              </div>
              <div
                className="col-lg-5 animated zoomIn"
                style={{ minHeight: "500px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src="images/pediatric-img.JPG"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PederiticImage />
        <PediatricPic />
      </div>
      <div>
        <ContactPagesCard />
      </div>
    </>
  );
}
