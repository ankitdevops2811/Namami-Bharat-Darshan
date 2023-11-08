import Courousel from "../components/mainpage/Courousel";

const Home = () => {
  return (
    <>
      <Courousel />
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Our Programs</h1>
            </div>
            <div className="row g-4">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow fadeInUp`}
                  data-wow-delay={service.delay}
                >
                  <div className="service-item bg-light rounded h-100 p-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                      style={{ width: "65px", height: "65px" }}
                    >
                      <i className={`fa ${service.icon} text-primary fs-4`}></i>
                    </div>
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <a className="btn" href="#">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1>Our Videos</h1>
            </div>
            <div className="row g-4">
              {videoData.map((video, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-6 wow fadeInUp`}
                  data-wow-delay={`0.${index + 1}s`}
                >
                  <div className="video-item position-relative rounded overflow-hidden">
                    <div className="video-iframe-container">
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
const servicesData = [
  {
    icon: "fa-brain",
    title: "Intensive therapy",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.1s",
  },
  {
    icon: "fa-brain",
    title: "Pediatric Therapy",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.3s",
  },

  {
    icon: "fa-brain",
    title: "Therapy",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.1s",
  },
  {
    icon: "fa-brain",
    title: "Pediatric Ocupational Therapy",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.3s",
  },
  {
    icon: "fa-brain",
    title: "Intensive Feeding",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.5s",
  },
  {
    icon: "fa-brain",
    title: "Telehealth",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    delay: "0.5s",
  },
];

const videoData = [
  {
    id: "4_k6OOqrCRQ?si=UR4XmsDGqjKVAqKx",
    title: "Video 1",
  },
  {
    id: "HEIj_1XG4Hg?si=E2cNetj-w1kUKhuy",
    title: "Video 2",
  },
  {
    id: "04-e3yhQ9k8?si=qa2hgWdC9yCLSeyf",
    title: "Video 3",
  },
  // Add more video data objects as needed
];

