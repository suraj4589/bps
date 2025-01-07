import React from 'react';
import './Home.css';
import {
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  MINI,
  MICRO,
  BOND,
  MERGE,
  APP,
  CULTURE,
  AA1,
  AA2,
  AA3,
  AA4,
  AA5,
} from '../../assets/homeimg';

function Home() {
  return (
    <>
      {/* Slide/Hero Section */}
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={IMG1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={IMG2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={IMG3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Social Media Bar */}
      <div className="icon-bar">
        <a href="#" className="facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="linkedin">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#" className="youtube">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>

      {/* Scheme Section */}
      <div className="scheme">
        <h3>
          <h2 className="short"><span className="short">Some features to make this project important</span></h2>
        </h3>
        <div className="responsive">
          <div className="gallery">
            <img src={IMG4} alt="Feature 1" />
          </div>
        </div>
        <div className="responsive">
          <div className="gallery">
            <img src={IMG5} alt="Feature 2" />
          </div>
        </div>
      </div>


      {/* MSME Section */}
      <div id="MSME">
        <div className="MSME">
          <h4>
            <span className="MMSME">Introduce New Mini + MSME</span>
          </h4>
          <div className="row">
            <div className="col-md-6">
              <img src={MINI} className="img-fluid" alt="Mini MSME" />
            </div>
            <div className="col-md-6">
              <img src={MICRO} className="img-fluid" alt="Micro MSME" />
            </div>
          </div>
        </div>
        <div className="container-MSME">
          <div className="row">
            <div className="col-md-6">
              <img src={BOND} className="img-fluid" alt="Bond" />
            </div>
            <div className="col-md-6">
              <img src={MERGE} className="img-fluid" alt="Merge" />
            </div>
          </div>
        </div>
      </div>

      {/* House and Building Section */}
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <h2 className="hasi">House, building, project or any design we are providing persons</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={APP} className="img-fluid" alt="Application" />
            </div>
            <div className="col-md-6">
              <img src={CULTURE} className="img-fluid" alt="Culture" />
            </div>
          </div>
        </div>
      </div>

      {/* Engineers and Others Section */}
      <div className="container-house">
        <div className="row">
          <div className="col-sm-6">
            <h4>Offer you</h4>
            <img src={AA1} className="img-fluid" alt="Offer 1" />
          </div>
          <div className="col-sm-6">
            <h4>Help to controlling it</h4>
            <img src={AA2} className="img-fluid" alt="Offer 2" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>Solve your problem</h4>
            <img src={AA3} className="img-fluid" alt="Offer 3" />
          </div>
          <div className="col-sm-6">
            <h4>Work on new business ideas</h4>
            <img src={AA4} className="img-fluid" alt="Offer 4" />
          </div>
        </div>
      </div>

      {/* Experienced Trainers Section */}
      <div className="container-experience">
        <h3 className="exp">Very experienced, skilled & smart trainer and officers</h3>
        <div className="row">
          <div className="col-12">
            <img src={AA5} className="img-fluid" alt="Experienced Trainers" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3>Contact Us</h3>
              <p>123 Street Name, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
            <div className="col-md-2">
              <h3>Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
