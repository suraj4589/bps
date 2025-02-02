import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Header Section */}
      <header id="Header">
        
          <h5>
            <span className="college-name">INDERPRASTHA ENGINEERING COLLEGE, GHAZIABAD (U.P)</span>
          </h5>
        

        <div className="search-login">
          <form className="search-form">
            <input
              className="search-input"
              type="search"
              placeholder="Search...."
              aria-label="Search"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div className="dropdown-h">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Login
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/userlogin">
                  User
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/empylogin">
                  Employee
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/busilogin">
                  MSME account
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </header>

      {/* Project Name Section */}
      <div className="name">
        <h3><span className="project">CO AIDED BUSINESS SOLUTION</span>
        </h3>
        <h4><span className="project">& SKILL DEVELOPMENT</span>
        </h4>
        <h5><span className="project">To provide the guidance</span>
        </h5>
      </div>
    </>
  );
}

export default Header;
