import React from "react";
import { useHistory } from "react-router-dom";


const Header=()=>{
  const history=useHistory();
  const handleHomeRoute=()=>{
    history.push("/");
  }
  const handleRegisterRoute=()=>{
    history.push("/register");
  }
  const handleEnquiryRoute=()=>{
    history.push("/enquiry");
  }
  const handleLoginRoute=()=>{
    history.push("/login")
  }
  const handleAdmissionsRoute=()=>{
    history.push("/admissions")
  }
  const handleTransportationRoute=()=>{
    history.push("/Transportation")
  }
  const handleFacultyRoute=()=>{
    history.push("/faculty")
  }
  const handleMastersRoute=()=>{
    history.push("/Masters")
  }
  const handleBachelorsRoute=()=>{
    history.push("/Bachelors")
  }
  const handlePreuniversityRoute=()=>{
    history.push("/Preuniversity")
  }
 

   return(
     
       <div>
<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">COLLEGE MANAGEMENT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={handleHomeRoute}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={handleRegisterRoute}>Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={handleTransportationRoute}>Transportation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={handleFacultyRoute}>Faculty</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" onClick={handleAdmissionsRoute}>Admissions</a>
        </li>
        
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#"onClick={handlePreuniversityRoute}>Pre-University</a></li>
            <li><a class="dropdown-item" href="#"onClick={handleBachelorsRoute}>Bachelors</a></li>
            <li><a class="dropdown-item" href="#"onClick={handleMastersRoute}>Masters</a></li>
          </ul>
        </li>
      </ul>
</div>
 <div class="dropdown">
  <button class="btn btn-info dropdown-toggle" onClick ={handleLoginRoute} type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  <img className="login-image" src="https://gallery.kissclipart.com/20180922/kae/kissclipart-icon-full-name-clipart-computer-icons-avatar-icon-1fca0eb786916d5e.jpg "/>  Login
  </button>
 
  
</div>


  </div>
</nav>

       </div>
   )

}
export default Header;