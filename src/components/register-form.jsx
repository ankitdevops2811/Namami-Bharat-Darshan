import { Form ,Card} from 'react-bootstrap';
import "./register.css"
const Register = () => {
  return(
    <Card style={{ width: '18rem' }}>
     <div className="col-12 grid-margin">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Horizontal Two column</h4>
      <form className="form-sample">
        <p className="card-description"> Personal info </p>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">First Name</label>
              <div className="col-sm-9">
              <Form.Control  type="text" />
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Last Name</label>
              <div className="col-sm-9">
              <Form.Control type="text" />
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Gender</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Date of Birth</label>
              <div className="col-sm-9">
              {/* <DatePicker className="form-control w-100"
                selected={this.state.startDate}
                onChange={this.handleChange}
              /> */}
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Category</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Category1</option>
                  <option>Category2</option>
                  <option>Category3</option>
                  <option>Category4</option>
                </select>
              </div>
              </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Membership</label>
              <div className="col-sm-4">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios1" defaultChecked /> Free 
                  <i className="input-helper"></i>
                </label>
              </div>
              </div>
              <div className="col-sm-5">
              <div className="form-check">
                <label className="form-check-label">
                  <input type="radio" className="form-check-input" name="ExampleRadio4" id="membershipRadios2" /> Proffessional 
                  <i className="input-helper"></i>
                </label>
              </div>
              </div>
            </Form.Group>
          </div>
        </div>
        <p className="card-description"> Address </p>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Address 1</label>
              <div className="col-sm-9">
              <Form.Control type="text"/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">State 1</label>
              <div className="col-sm-9">
              <Form.Control type="text"/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Address 2</label>
              <div className="col-sm-9">
              <Form.Control type="text"/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Postcode</label>
              <div className="col-sm-9">
              <Form.Control type="text"/>
              </div>
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="row">
              <label className="col-sm-3 col-form-label">Cirt</label>
              <div className="col-sm-9">
              <Form.Control type="text"/>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="row">  
              <label className="col-sm-3 col-form-label">Country</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>America</option>
                  <option>Italy</option>
                  <option>Russia</option>
                  <option>Britain</option>
                </select>
              </div>
            </Form.Group>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div> 
  </Card>
  )
}

export default Register


// return (
    //     <section className="h-100 h-custom gradient-custom-2">
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col-12">
    //         <div className="card card-registration card-registration-2" style={{borderradius: "15px"}}>
    //           <div className="card-body p-0">
    //             <div className="row g-0">
    //               <div className="col-lg-6">
    //                 <div className="p-5">
    //                   <h3 className="fw-normal mb-5" style={{color: "#4835d4"}}>General Infomation</h3>
    
    //                   <div className="mb-4 pb-2">
    //                     <select className="select">
    //                       <option value="1">Title</option>
    //                       <option value="2">Two</option>
    //                       <option value="3">Three</option>
    //                       <option value="4">Four</option>
    //                     </select>
    //                   </div>
    
    //                   <div className="row">
    //                     <div className="col-md-6 mb-4 pb-2">
    
    //                       <div className="form-outline">
    //                         <input type="text" id="form3Examplev2" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplev2">First name</label>
    //                       </div>
    
    //                     </div>
    //                     <div className="col-md-6 mb-4 pb-2">
    
    //                       <div className="form-outline">
    //                         <input type="text" id="form3Examplev3" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplev3">Last name</label>
    //                       </div>
    
    //                     </div>
    //                   </div>
    
    //                   <div className="mb-4 pb-2">
    //                     <select className="select">
    //                       <option value="1">Position</option>
    //                       <option value="2">Two</option>
    //                       <option value="3">Three</option>
    //                       <option value="4">Four</option>
    //                     </select>
    //                   </div>
    
    //                   <div className="mb-4 pb-2">
    //                     <div className="form-outline">
    //                       <input type="text" id="form3Examplev4" className="form-control form-control-lg" />
    //                       <label className="form-label" htmlFor="form3Examplev4">Position</label>
    //                     </div>
    //                   </div>
    
    //                   <div className="row">
    //                     <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
    
    //                       <div className="form-outline">
    //                         <input type="text" id="form3Examplev5" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplev5">Bussines Arena</label>
    //                       </div>
    
    //                     </div>
    //                     <div className="col-md-6">
    
    //                       <select className="select">
    //                         <option value="1">Employees</option>
    //                         <option value="2">Two</option>
    //                         <option value="3">Three</option>
    //                         <option value="4">Four</option>
    //                       </select>
    
    //                     </div>
    //                   </div>
    
    //                 </div>
    //               </div>
    //               <div className="col-lg-6 bg-indigo text-white">
    //                 <div className="p-5">
    //                   <h3 className="fw-normal mb-5">Contact Details</h3>
    
    //                   <div className="mb-4 pb-2">
    //                     <div className="form-outline form-white">
    //                       <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
    //                       <label className="form-label" htmlFor="form3Examplea2">Street + Nr</label>
    //                     </div>
    //                   </div>
    
    //                   <div className="mb-4 pb-2">
    //                     <div className="form-outline form-white">
    //                       <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
    //                       <label className="form-label" htmlFor="form3Examplea3">Additional Information</label>
    //                     </div>
    //                   </div>
    
    //                   <div className="row">
    //                     <div className="col-md-5 mb-4 pb-2">
    
    //                       <div className="form-outline form-white">
    //                         <input type="text" id="form3Examplea4" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplea4">Zip Code</label>
    //                       </div>
    
    //                     </div>
    //                     <div className="col-md-7 mb-4 pb-2">
    
    //                       <div className="form-outline form-white">
    //                         <input type="text" id="form3Examplea5" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplea5">Place</label>
    //                       </div>
    
    //                     </div>
    //                   </div>
    
    //                   <div className="mb-4 pb-2">
    //                     <div className="form-outline form-white">
    //                       <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
    //                       <label className="form-label" htmlFor="form3Examplea6">Country</label>
    //                     </div>
    //                   </div>
    
    //                   <div className="row">
    //                     <div className="col-md-5 mb-4 pb-2">
    
    //                       <div className="form-outline form-white">
    //                         <input type="text" id="form3Examplea7" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplea7">Code +</label>
    //                       </div>
    
    //                     </div>
    //                     <div className="col-md-7 mb-4 pb-2">
    
    //                       <div className="form-outline form-white">
    //                         <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
    //                         <label className="form-label" htmlFor="form3Examplea8">Phone Number</label>
    //                       </div>
    
    //                     </div>
    //                   </div>
    
    //                   <div className="mb-4">
    //                     <div className="form-outline form-white">
    //                       <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
    //                       <label className="form-label" htmlFor="form3Examplea9">Your Email</label>
    //                     </div>
    //                   </div>
    
    //                   <div className="form-check d-flex justify-content-start mb-4 pb-3">
    //                     <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
    //                     <label className="form-check-label text-white" htmlFor="form2Example3">
    //                       I do accept the <a href="#!" className="text-white"><u>Terms and Conditions</u></a> of your
    //                       site.
    //                     </label>
    //                   </div>
    
    //                   <button type="button" className="btn btn-light btn-lg"
    //                     data-mdb-ripple-color="dark">Register</button>
    
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    
    //   )