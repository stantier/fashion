import React from 'react'

import { Outlet,NavLink ,Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="index.html">
      <strong><span>Little</span> Fashion</strong>
    </a>
    <div className="d-lg-none">
     
    
      <a href="product-detail.html" className="bi-bag custom-icon" />
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
        
          <NavLink to="/" style={({isActive})=>{ return {backgroundColor:isActive?"#FF0000":"#C0C0C0",color:"black"}}} className="nav-link active">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about" style={({isActive})=>{ return {backgroundColor:isActive?"#FF0000":"#C0C0C0",color:"black"}}} className="nav-link">About Us</NavLink>
        
        </li>
        <li className="nav-item">
        <NavLink to="/product" className="nav-link" style={({isActive})=>{ return {backgroundColor:isActive?"#FF0000":"#C0C0C0",color:"black"}}}>Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact" className="nav-link" style={({isActive})=>{ return {backgroundColor:isActive?"#FF0000":"#C0C0C0",color:"black"}}} >Contact</NavLink>
        </li>
      
      </ul>
      <div className="d-none d-lg-block">
        <Link to="login" className="bi-person custom-icon me-3" ></Link>
        <Link to="register" className="bi-bag custom-icon" ></Link>
      </div>
    </div>
  </div>
</nav>
<Outlet />


    </div>
  )
}
