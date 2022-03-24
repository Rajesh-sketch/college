import React from "react";
import SideNav from "./SideNav";

const Transportation = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
          <SideNav/>
          <div className="row">
              <div className="col-sm-6 p-3 "><h2>Parents Information <img className="user-img" src="https://cdn.dribbble.com/users/688785/screenshots/3040720/family_animation.gif"></img></h2>
              
              <div> 
                  <input className="form-control my-3" placeholder="Enter your Name"></input>
                  <input className="form-control my-3" placeholder="Enter your Email-id"></input>
                  <input className="form-control my-3" placeholder="Enter your Phone Number"></input>
                  <input className="form-control my-3" placeholder="Guardian Name (optional)"></input>
                  <textarea className="form-control my-3" placeholder="Guardian Details"></textarea>
              </div>
              </div>
              
              <div className="col-sm-6 p-3"><h2>Pick up details <img className="user-img" src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif"></img></h2>
              
              <div> 
                  <textarea className="form-control my-3 " placeholder="Your pick-up Address"></textarea>
                  <input className="form-control my-3" placeholder="Your dropping point"></input>
                  <input className="form-control my-3" placeholder="Landmark (if any)"></input>
                  <input className="form-control my-3" placeholder="Area pin-code"></input>
                  <input className="form-control my-3" placeholder="District"></input>
              </div>
              </div>
              <div>
               
              <button className="btn btn-warning">Submit</button>
              <hr></hr>
          </div>
          </div>
         
      </div>
    </div>
  );
};
export default Transportation;
