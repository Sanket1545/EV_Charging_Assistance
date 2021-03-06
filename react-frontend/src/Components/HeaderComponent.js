import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {

  let user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  function logOut()
  {
    localStorage.clear();
    navigate("/home");
  }
  return (
    <div>
    <header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
          <a class="navbar-brand" href="#"><i class="bi bi-plug-fill"></i><i class="fa-regular fa-charging-station"></i>EV Charging Assistance</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
        </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/home" style={{marginLeft:'30px'}}>Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/stationlist">Charging Stations</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Appointment</a>
        </li> */}
        <li class="nav-item">
          <a class="nav-link" href="/aboutus">About Us</a>
        </li>
        
      </ul>
        <ul class="navbar-nav">
          { localStorage.getItem('user') ?
          <li>
             <a class="nav-link" style={{marginRight:'30px'}} onClick={logOut}><i class="bi bi-box-arrow-left" style={{marginRight:'10px'}}></i>Logout</a>
          </li>
          :
          <li>
            <a class="nav-link" href="/login" style={{marginRight:'30px'}}><i class="bi bi-person-circle" style={{marginRight:'10px'}}></i>Login</a>
          </li>
          }
        </ul>
    </div>
  </div>
</nav>

</header>

</div>
    )
}

export default HeaderComponent