import React from "react";
import SideNav from "./SideNav";
import { useHistory } from "react-router-dom";

const Admissions = () => {
    const history=useHistory();
    const handlePreuniversityRoute=()=>{
        history.push("/Preuniversity");
    }
    const handleBachelorsRoute=()=>{
        history.push("/Bachelors")
    }
    const handleMastersRoute=()=>{
        history.push("/Masters")
    }
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <SideNav />
        <div className="row">
          <img
            className="admit-img"
            src="https://i.pinimg.com/originals/c2/4b/e8/c24be8b914079df7aad2e3fb267d40f7.jpg"
          ></img>
          <hr />
          <h2 className="topic">COURSES YOU WANT</h2>
          <hr />{" "}
          <div className="col-sm-4 bg-warning" onClick={handlePreuniversityRoute}>
            <h3>Pre-University</h3>
            <img className="clip" src="https://icon.uclipart.com/20210326/rwi/book-bijonzu-irasutoretazu-bukku-2021-reading-for-holidays-605d4f7a9bc009.41753315.png"></img>
          </div>
          <div className="col-sm-4 bg-info" onClick={handleBachelorsRoute}>
            <h3>Bachelors</h3>
            <img className="clip" src="https://icon.uclipart.com/20210326/rwi/book-bijonzu-irasutoretazu-bukku-2021-reading-for-holidays-605d4f7a9bc009.41753315.png"></img>
          </div>
          <div className="col-sm-4 bg-warning" onClick={handleMastersRoute}>
            <h3>Masters</h3>
            <img className="clip" src="https://icon.uclipart.com/20210326/rwi/book-bijonzu-irasutoretazu-bukku-2021-reading-for-holidays-605d4f7a9bc009.41753315.png"></img>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
export default Admissions;
