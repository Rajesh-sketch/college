import React from "react";
import SideNav from "./SideNav";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <SideNav />

        <div>
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://transcultcom.univie.ac.at/fileadmin/user_upload/p_transcult_com/Header/transcult-1300x340.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.prove.se/wp-content/uploads/2019/09/prove_10-1300x340.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.divinacostierainteragency.com/wp-content/uploads/2018/01/pompei-1300x340.jpg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
            <hr></hr>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};
export default Home;
