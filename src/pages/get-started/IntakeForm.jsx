const IntakeForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 border-right">
          {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5"> */}
          {/* <img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span>
                    </div> */}

          {/* </div> */}
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="https://i.imgur.com/O1RmJXT.jpg"
              alt="Profile"
              width="90"
            />
            <span className="font-weight-bold">John Doe</span>
            <span className="text-black-50">john_doe12@bbb.com</span>
            <span>United States</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">Edit your profile</h6>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Clinic of Choice</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Clinic</option>
                  <option value="1">Greater Noida</option>
                  <option value="2">Pune</option>
                  <option value="3">Hyderabad</option>
                </select>
              </div>
             
              {/* <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="first name"
                    // value="John"
                  />
                </div> */}
              <div className="col-md-6">
                <label className="labels">Program of Interest:*</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>select Program</option>
                  <option value="1">Weekly</option>
                  <option value="2">Intensive</option>
                  <option value="3">unsure</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="labels">Submission Date*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Submission Date"
                />
              </div>
            </div>
            <div className="row mt-3">
              <h5 className="py-2 mb-3" >Parent & Caregiver Details</h5>
              <div>
                <h6 className="col-sm">Parents Name*</h6>
            </div>
              <div className="col-sm">
              {/* <div className="col-md-6"> */}
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    // value="John"
                  />
                </div>
                <div className="col-sm">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              <div className="col-md-12">
              <div>
                <h6 className="col-sm pt-3 mb-2">Address*</h6>
            </div>
                <label className="labels">Street Address*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address Line 2"
                  // value="UI/UX Developer at Boston"
                />
              </div>
              {/* <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="education"
                  value="Boston University"
                />
              </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  // value="USA"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State</label>
                <input
                  type="text"
                  className="form-control"
                  // value="Boston"
                  placeholder="State"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Postal / Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal / Zip Code"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                />
              </div>
           
              <div className="col-md-6">
                <label className="labels">Primary Phone Number*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primary Phone Number"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Secondary Phone Number*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Secondary Phone Number"
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Primary E-mail Address*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primary E-mail Address"
                />
              </div>
              <div className="col-md-12">
                <label className="labels">How did you hear about Mission Walk?</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="we glad to serve you"
                  // value="UI/UX Developer at Boston"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Submit Form
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span>
            </div>
            <div className="d-flex flex-row mt-3 exp-container">
              <img src="https://i.imgur.com/azSfBM3.png" width="45" height="45" alt="hjgj"/>
              <div className="work-experience ml-1">
                <span className="font-weight-bold d-block">
                  Senior UI/UX Designer
                </span>
                <span className="d-block text-black-50 labels">
                  Twitter Inc.
                </span>
                <span className="d-block text-black-50 labels">
                  March,2017 - May 2020
                </span>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row mt-3 exp-container">
               <img src="https://img.icons8.com/color/100/000000/facebook.png" width="45" height="45"/ alt="ghhjgj"> 
              <div className="work-experience ml-1">
                <span className="font-weight-bold d-block">
                  Senior UI/UX Designer
                </span>
                <span className="d-block text-black-50 labels">
                  Facebook Inc.
                </span>
                <span className="d-block text-black-50 labels">
                  March,2017 - May 2020
                </span>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-row mt-3 exp-container">
              <img src="https://img.icons8.com/color/50/000000/google-logo.png" width="45" height="45" alt="jhbj/> 
              <div className="work-experience ml-1">
                <span className="font-weight-bold d-block">UI/UX Designer</span>
                <span className="d-block text-black-50 labels">
                  Google Inc.
                </span>
                <span className="d-block text-black-50 labels">
                  March,2017 - May 2020
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default IntakeForm;

// const IntakeForm = () => {
//   return (
//     <div className="row">
//       <div className="col-md-3 border-end">
//         <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//           {/* <img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span>
//                   </div> */}
//         </div>
//       </div>
//       <div className="col-md-5 border-end">
//         <div className="p-3 py-5">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <h6 className="text-end">Edit your profile</h6>
//           </div>
//           <div className="row mt-2">
//             <div className="col-md-6">
//               <label htmlFor="firstName" className="form-label">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="firstName"
//                 placeholder="First name"
//                 value="John"
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="surname" className="form-label">
//                 Surname
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="surname"
//                 value="Doe"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>
//           <div className="row mt-3">
//             <div className="col-md-12">
//               <label htmlFor="headline" className="form-label">
//                 Headline
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="headline"
//                 placeholder="Headline"
//                 value="UI/UX Developer"
//               />
//             </div>
//             <div className="col-md-12">
//               <label htmlFor="currentPosition" className="form-label">
//                 Current position
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="currentPosition"
//                 placeholder="Current position"
//                 value="UI/UX Developer at Boston"
//               />
//             </div>
//             <div className="col-md-12">
//               <label htmlFor="education" className="form-label">
//                 Education
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="education"
//                 placeholder="Education"
//                 value="Boston University"
//               />
//             </div>
//           </div>
//           <div className="row mt-3">
//             <div className="col-md-6">
//               <label htmlFor="country" className="form-label">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="country"
//                 placeholder="Country"
//                 value="USA"
//               />
//             </div>
//             <div className="col-md-6">
//               <label htmlFor="state" className="form-label">
//                 State/Region
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="state"
//                 value="Boston"
//                 placeholder="State"
//               />
//             </div>
//           </div>
//           <div className="mt-5 text-center">
//             <button className="btn btn-primary profile-button" type="button">
//               Save Profile
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-4">
//         <div className="p-3 py-5">
//           <div className="d-flex justify-content-between align-items-center experience">
//             <span>Edit Experience</span>
//             <span className="border px-3 p-1 add-experience">
//               <i className="fa fa-plus"></i>&nbsp;Experience
//             </span>
//           </div>
//           <div className="d-flex flex-row mt-3 exp-container">
//             {/* <img src="https://i.imgur.com/azSfBM3.png" width="45" height="45"> */}
//             <div className="work-experience ms-1">
//               <span className="font-weight-bold d-block">
//                 Senior UI/UX Designer
//               </span>
//               <span className="d-block text-black-50">Twitter Inc.</span>
//               <span className="d-block text-black-50">
//                 March, 2017 - May 2020
//               </span>
//             </div>
//           </div>
//           <hr />
//           <div className="d-flex flex-row mt-3 exp-container">
//             {/* <img src="https://img.icons8.com/color/100/000000/facebook.png" width="45" height="45"> */}
//             <div className="work-experience ms-1">
//               <span className="font-weight-bold d-block">
//                 Senior UI/UX Designer
//               </span>
//               <span className="d-block text-black-50">Facebook Inc.</span>
//               <span className="d-block text-black-50">
//                 March, 2017 - May 2020
//               </span>
//             </div>
//           </div>
//           <hr />
//           <div className="d-flex flex-row mt-3 exp-container">
//             {/* <img src="https://img.icons8.com/color/50/000000/google-logo.png" width="45" height="45"> */}
//             <div className="work-experience ms-1">
//               <span className="font-weight-bold d-block">UI/UX Designer</span>
//               <span className="d-block text-black-50">Google Inc.</span>
//               <span className="d-block text-black-50">
//                 March, 2017 - May 2020
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntakeForm;
