import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



function Navbar(props) {
return (
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   {/* home */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
       {/* About */}
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">About</a> */}
          <Link className="nav-link active" to="/about">About</Link>
        </li>
{/* Contact */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact As</a>
        </li>
        
      
      </ul>
      <form className="d-flex mx-2" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>

      <div className={`form-check form-switch mx-2 text-${props.text}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label></div>
</div>
  </div>

 





</nav>
   
  )
}

export default Navbar;


// we use proptyp. we will not do mistake like if we give send 
// number then they give error  
Navbar.propTypes={
// if we set ".isRequired" then if we set deault value then they also give error

// title: PropTypes.string.isRequired,

title: PropTypes.string,
home : PropTypes.string

}


// we also can use by defult prop and also set property of bydefult
Navbar.defaultProps={

title : 'set title here'

}