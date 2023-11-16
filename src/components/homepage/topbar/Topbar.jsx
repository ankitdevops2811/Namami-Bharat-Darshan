
const Topbar = () => {
    return (
      <>
      {/* <div>Topbar</div> */}
          {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-warning ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
              <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                  <div className="d-inline-flex align-items-center">
                      <small className="py-2"><i className="far fa-clock text-primary me-2" ></i>
                      <strong style={{ fontSize: "18px" }}>
                      Opening Hours: Mon - Sat : 8.00 am - 8.00 pm, Sunday Closed
                      </strong>
                       </small>
                  </div>
              </div>
              <div className="col-md-6 text-center text-lg-end">
                  <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                      <div className="me-3 pe-3 border-end py-2">
                          <p className="m-0"><i className="fa fa-envelope-open me-2"></i>rehab@missionwalk.in</p>
                      </div>
                      <div className="py-2">
                          <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+91 9177300194</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- Topbar End --> */}
      </>
    )
  }
  
  export default Topbar