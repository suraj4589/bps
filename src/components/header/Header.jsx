import React from 'react'
import "./Header.css"

import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      {/* -------header part-------- */}
      <header id='Header'>

        <div className='college-name'>
          <h5><span> INDERPRASTHA ENGINEERING COLLEGE, GHAZIABAD (U.P)</span></h5>
        </div>

        <div className="search-login">
          <form className="search-form">
            <input
              className="search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div class="dropdown-h">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </a>

            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/userlogin">User </Link></li>
              <li><Link class="dropdown-item" to="/empylogin">Empolyee</Link></li>
              <li><Link class="dropdown-item" to="/busilogin">MSME account</Link></li>
            </ul>
          </div>
        </div>


      </header>
      {/*-----name of project------*/}
      <div className='name'>
        <h3><spam>CO AIDED BUSINESS SOLUTION</spam></h3>
        <h4><spam>& SKILL DEVELOPMENT</spam></h4>
        <div><h5><spam>To provide the guidence</spam></h5></div>
      </div>


    </>
  )
}

export default Header
