import React from 'react'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{fontFamily: 'cursive', fontSize : '25px', color : 'white'}}>InnRooms</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link" href="/" style={{color : 'white',fontSize : '13px'}}>Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/" style={{color : 'white',fontSize : '13px'}}>Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
