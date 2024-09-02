const Courousel = () => {
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100 h-10"
                src="/images1/pitri-paksha2.jpg"
                alt="Image"
                // height="300px"
                style={{ height: "700px" }}
              />
              <div
                className="
                       carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown style={{ fontSize: '32px'  }}">
                  पितरपक्ष मेला गया
                  </h5>
                  <h3
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "40px" }}
                  >
                   पितरपक्ष मेला का हिस्सा बनें और अपने दिल की गहराइयों से जुड़े भावनात्मक अनुभव का आनंद लें 17sept 2024! Rs5100
                  </h3>
                  <p style={{ fontSize: "34" }}></p>
                  <h1
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "27px", color: "yellow" }}
                  >
                   {/* पितरपक्ष मेला में आकर पारंपरिक आशीर्वाद और सुखद अनुभूति प्राप्त करें! */}
                  </h1>
                  <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-10"
                src="/images1/hardiwar.jpg"
                alt="Image"
                style={{ height: "700px" }}
              />
              <div
                className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className="text-white text-uppercase mb-3 animated slideInDown"
                    style={{ fontSize: "32px" }}
                  >
                    हरिद्वार चारधाम यात्रा उत्तराखंड
                  </h5>
                  <h1
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "27px", color: "yellow" }}
                  >
                  उत्तराखंड की चारधाम यात्रा: हिमालय की गोद में ईश्वर के चरणों की खोज और आत्मा की पवित्र यात्रा!
                  </h1>
                  <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-10"
                src="/images1/ayodhya.jpg"
                alt="Image"
                style={{ height: "700px" }}
              />
              <div
                className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className="text-white text-uppercase mb-3 animated slideInDown"
                    style={{ fontSize: "32px" }}
                  >
                   अयोध्या
                  </h5>
                  <h1
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "27px", color: "yellow" }}
                  >
                   रामजन्म भूमि अयोध्या में आध्यात्मिक अनुभव और सद्गति का अनमोल मौका!
                  </h1>
                  <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-10"
                src="/images1/tirupati.jpg"
                alt="Image"
                style={{ height: "700px" }}
              />
              <div
                className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className="text-white text-uppercase mb-3 animated slideInDown"
                    style={{ fontSize: "32px" }}
                  >
                  तिरुपति
                  </h5>
                  <h1
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "27px", color: "yellow" }}
                  >
                   वेंकटेश्वर स्वामी की पावन धरती तिरुपति में आत्मा को संतोष और शांति की अनुभूति!
                  </h1>
                  <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-10"
                src="/images1/trambkeshwar.jpg"
                alt="Image"
                style={{ height: "700px" }}
              />
              <div
                className="
                      // carousel-caption 
                      d-flex flex-column align-items-center justify-content-center"
              >
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5
                    className="text-white text-uppercase mb-3 animated slideInDown"
                    style={{ fontSize: "32px" }}
                  >
                    त्र्यंबकेश्वर महाकाल
                  </h5>
                  <h1
                    className="display-1 text-white mb-md-4 animated zoomIn"
                    style={{ fontSize: "27px", color: "yellow" }}
                  >
                    Our goal is to help you achieve your best outcome with
                    cutting-edge treatments. As the world’s #1 referral choice
                    for spinal cord injury, you benefit from our integration of
                    medicine, research and technology
                  </h1>
                  <a
                    href="intake-forms"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Book Now
                  </a>
                  <a
                    href="/contact"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </>
  );
};

export default Courousel;
