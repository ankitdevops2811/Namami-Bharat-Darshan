
const Courousel = () => {
  return (
    <>
        {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/mission-walk-hyderabad-5cf92914afb61.jpeg" alt="Image"/>
                    <div className="
                    // carousel-caption 
                    d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown style={{ fontSize: '32px'  }}">Keep Your Health Healthy</h5>
                            <h3 className="display-1 text-white mb-md-4 animated zoomIn" style={{ fontSize: '47px'  }}>Intensive Therapy Programs,Tailored to Your Child’s Unique Needs.</h3>
                            <a href="appointment.html" className="btn btn-secondary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/mission-walk-hyderabad-5cf92e33b8a96.jpeg" alt="Image"/>
                    <div className="
                    // carousel-caption 
                    d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown" style={{ fontSize: '32px' }}>Pediatric Occupational Therapy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{ fontSize: '27px',color: 'yellow'  }}>An OT’s role is to assist individuals in performing “occupations” with the greatest level of independence possible. Childhood occupations include learning in school and playing with friends.</h1>
                            <a href="appointment.html" className="btn btn-secondary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/download.jfif" alt="Image"/>
                    <div className="
                    // carousel-caption 
                    d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown" style={{ fontSize: '32px' }}>Pediatric Physical Therapy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{ fontSize: '27px',color: 'yellow'  }}>Mission-Walk takes an intensive approach to physical therapy using the NeuroSuit and Multifunctional Therapy Units</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/4bb5c6a38dcf77f6f63c7379d964bf43.jpg" alt="Image"/>
                    <div className="
                    // carousel-caption 
                    d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown" style={{ fontSize: '32px' }}>Developmental Feeding Therapy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{ fontSize: '27px',color: 'yellow'  }}>Our occupational and speech therapists will work with your child to help them learn to feed themselves so they can become more independent.</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/1677053619998.jfif" alt="Image"/>
                    <div className="
                    // carousel-caption 
                    d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown" style={{ fontSize: '32px' }}>Intensive Therapy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn" style={{ fontSize: '27px',color: 'yellow'  }}>Our intensive programs, which may include combinations of occupational, physical, & speech therapy, are customized for each child based on their needs & goals.</h1>
                            <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* <!-- Carousel End --> */}
    </>
  )
}

export default Courousel