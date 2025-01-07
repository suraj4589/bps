import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Header from '../header/Header';

function Navbar() {
  return (
    <>
     <Header/>
      {/*---------- navbar-------------*/}

    <div className='container-project'>
        <nav class="navbar navbar-expand-lg navbar-light">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/service">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>

       
        </div>
    </>
  )
}

export default Navbar
