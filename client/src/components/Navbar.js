import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontFamily: 'cursive', fontSize : '25px', color : 'white'}}>InnRooms</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link" href="/" style={{color : 'white',fontSize : '13px'}}>Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{color : 'white',fontSize : '13px'}}>Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
