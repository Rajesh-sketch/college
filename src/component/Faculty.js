import React from "react";
import SideNav from "./SideNav";

const Faculty = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <SideNav />
        
        <div className="faculty-container bg-info d-flex">
          <div className="card bg-light">
            <div className="card-body">
              <img
                className="card-img"
                src="https://banner.uclipart.com/20200111/wqw/bird-teacher-owl-bird.png"
              />
              <button className="labels bg-warning">
                <h4>TEACHERS </h4>
                <h6></h6>
              </button>
            </div>
          </div>
          <div className="card bg-light">
            <div className="card-body">
              <img
                className="card-img mb-1"
                src="https://banner.uclipart.com/20200204/ryp/book-rectangle-line.png"
              />
              <button className="labels bg-warning ">
                <h4>REFERENCES</h4>
              </button>
            </div>
          </div>
          <div className="card bg-light">
            <div className="card-body">
              <img
                className="card-img mb-2"
                src="https://banner.uclipart.com/20200112/hap/pie-line-circle.png"
              />
              <button className="labels bg-warning ">
                <h4>STATISTICS</h4>
              </button>
            </div>
          </div>
          <div className="card bg-light">
            <div className="card-body">
              <img
                className="card-img mb-2"
                src="https://banner.uclipart.com/20200204/ezx/job-sitting-reading.png"
              />
              <button className="labels bg-warning ">
                <h4>EASY LEARNING</h4>
                <h6></h6>
              </button>
            </div>
          </div>
          <div>
              
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Faculty;
