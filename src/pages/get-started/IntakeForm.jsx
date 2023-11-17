import { useState } from "react";
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';
const IntakeForm = () => {

  const [user,setUser] = useState() 
   const VITE_SERVICE_id = import.meta.env.VITE_SERVICE_ID;
   const VITE_TEMPLATE_id = import.meta.env.VITE_TEMPLATE_ID;
   const VITE_PUBLIC_key = import.meta.env.VITE_PUBLIC_Key;
  //initialise use Navigate
  // const navigate = useNavigate();
  
      const onValueChange = (e)=> {
        //  console.log(e.target.name,e.target.value)
          setUser({
            ...user,
            [e.target.name]:e.target.value
          })
      }

      const addUserdetails = async() => {
        localStorage.setItem("addingData", JSON.stringify(user));
        // console.log(user);
        // console.log("success");
        //  await addUser(user)
        //  navigate('/alluser')
        
     const result =   await emailjs.send(VITE_SERVICE_id,VITE_TEMPLATE_id,{
          first_name_1: user.first_name_1,
          last_name_1: user.first_name_1,
          first_name_2: user.first_name_2,
          last_name_2: user.last_name_2,
          age: user.age,
          address: user.street_address,
          city: user.city,
          state: user.state,
          pincode: user.pincode,
          primary_number: user.primary_number,
          secondary_number: user.secondary_number,
          email: user.email,
          clinic: user.clinic,
          hear_about_us: user.hear_about_us,
          },VITE_PUBLIC_key)  
          if (result) {
            alert("E-mail send successfully!")
          }
          console.log("success-1");
      }
  return (
    <>
      <div className="row">
        <div className="col-md-3 border-right d-flex flex-column mt-5 pt-auto">
          {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5"> */}
          {/* <img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span>
                    </div> */}

          {/* </div> */}
          <div className="d-flex flex-column align-items-center text-center p-3 py-5 mt-5">
          {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5 mt-5"> */}
            <img
              className="rounded mt-5"
              src="https://i.ibb.co/Nj6ch8F/logo-1.jpg"
              alt="Profile"
              width="90"
            />
            <span className="font-weight-bold">Mission Walk</span>
            <span className="text-black-50">rehab@missionwalk.in</span>
            <span>India</span>
          </div>
        </div>
        <div className="col-lg border-right pe-5">
          <div className="p-3 py-5">
            {/* <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="text-right">Patient</h6>
            </div> */}
             <div className="align-items-center mb-3">
              <h4 className="text-center">Client&apos;s Enquiry Form</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                {/* <label className="labels">Clinic of Choice</label> */}
                <h6 className="col-sm pt-3 mb-2 mt-2">Select Clinic*</h6>

                <select
                  value={user}
                  className="form-select"
                  aria-label="Default select example"
                  name="clinic"
                  onChange={(e) => onValueChange(e)}
                  // defaultValue={'Greater Noida'}
                >
                  <option>Select Clinic</option>
                  <option value="Greater Noida">Greater Noida</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
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
            
            </div>
            <div className="row mt-3">
              <div>
                <h6 className="col-sm">Client&apos;s Name*</h6>
            </div>
              <div className="col-sm">
              {/* <div className="col-md-6"> */}
                  {/* <label className="labels">First Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => onValueChange(e)}
                    name="first_name_1"
                    // value="John"
                  />
                </div>
                <div className="col-sm">
                  {/* <label className="labels">Last Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => onValueChange(e)}
                    name="last_name_1"
                  />
                </div>
                <div className="row mt-3">
              <h5 className="py-2 mb-3" >Parent & Caregiver Details</h5>
              <div>
                <h6 className="col-sm">Parent&apos;s Name*</h6>
            </div>
              <div className="col-sm">
              {/* <div className="col-md-6"> */}
                  {/* <label className="labels">First Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={(e) => onValueChange(e)}
                    name="first_name_2"
                    // value="John"
                  />
                </div>
                <div className="col-sm">
                  {/* <label className="labels">Last Name</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={(e) => onValueChange(e)}
                    name="last_name_2"
                  />
                </div>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                {/* <label className="labels">Age</label> */}
                <h6 className="col-sm">Age*</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Age"
                  onChange={(e) => onValueChange(e)}
                  name="age"
                />
              </div>
              <div className="col-md-6">
              <div>
                <h6 className="col-sm pt-3 mb-2">Address*</h6>
            </div>
                {/* <label className="labels">Street Address*</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  onChange={(e) => onValueChange(e)}
                    name="street_address"
                />
              </div>
              {/* <div className="col-md-12">
                <label className="labels">Street Address Line 2</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Address Line 2"
                  // value="UI/UX Developer at Boston"
                />
              </div> */}
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
            <div className="row ">
              <div className="col-md-6">
                {/* <label className="labels font-weight-bold">City</label> */}
                <h6 className="col-sm  mb-2 mt-2">City*</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  onChange={(e) => onValueChange(e)}
                  name="city"
                />
              </div>
              <div className="col-md-6">
                {/* <label className="labels">State</label> */}
                <h6 className="col-sm  mb-2 mt-2">State*</h6>
                <input
                  type="text"
                  className="form-control"
                  // value="Boston"
                  placeholder="State"
                  onChange={(e) => onValueChange(e)}
                  name="state"
                />
              </div>
              <div className="col-md-6 ">
                {/* <label className="labels">E-mail Address*</label> */}
                <h6 className="col-sm mt-2 mb-2">E-mail Address*</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder=" E-mail Address"
                  onChange={(e) => onValueChange(e)}
                  name="email"
                />
              </div>
              <div className="col-md-6">
                {/* <label className="labels">Pincode</label> */}
                <h6 className="col-sm mt-2 mb-2">Pincode*</h6>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Pincode"
                  onChange={(e) => onValueChange(e)}
                  name="pincode"
                />
              </div>
             
           
              <div className="col-md-6">
                {/* <label className="labels">Primary Phone Number*</label> */}
                <h6 className="col-sm m-2">Primary Phone Number*</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primary Phone Number"
                  onChange={(e) => onValueChange(e)}
                  name="primary_number"
                />
              </div>
              <div className="col-md-6 ">
                {/* <label className="labels">Secondary Phone Number*</label> */}
                <h6 className="col-sm mt-2 mb-2">Secondary Phone Number*</h6>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Secondary Phone Number"
                  onChange={(e) => onValueChange(e)}
                  name="secondary_number"
                />
              </div>
              
              <div className="col-md-12 mt-2">
                <h6 className="col-sm mt-2 mb-2 ">How did you hear about Mission Walk?*</h6>
                {/* <label className="labels">How did you hear about Mission Walk?</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="we glad to serve you"
                  // value="UI/UX Developer at Boston"
                  onChange={(e) => onValueChange(e)}
                  name="hear_about_us"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary" type="button" onClick={ ()=> addUserdetails()}>
              {/* <button className="btn btn-primary profile-button" type="button" onClick={ ()=> addUserdetails()}> */}
                Submit Form
              </button>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="p-3 py-5">
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
        {/* </div> */}
      </div>
      <br />
      <br />
    </>
  );
};

export default IntakeForm;
