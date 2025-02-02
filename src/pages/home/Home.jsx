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
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <>
      <div>
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
        <section>
          <div className="scheme">
            <div className="short">
              <h2><span className="short">Some features to make this project important</span></h2></div>

            <div className="responsive-img">
            <div className='direct'>
              <div className="gallery-img">
                <img src={IMG4} className='cover' alt="Feature 1" />
               </div>
              <div className="gallery-img">
                <img src={IMG5} className='cover' alt="Feature 2" />
               </div>
               </div>
            </div>
          </div>
        </section>


        {/* MSME Section */}

        <div id="memes" >
        <div className="MMSME">
          <h5><span className="new">Introduce New Mini + MSME</span></h5></div>
          <div className="msme">
            <div className="row">
              <div className="col-sm-6">
                <img src={MINI} className='cover' alt="Mini MSME" />
              </div>
              <div className="col-sm-6">
                <img src={MICRO} className='cover' alt="Micro MSME" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <img src={BOND} className='cover' alt="Bond" />
              </div>
              <div className="col-sm-6">
                <img src={MERGE} className='cover' alt="Merge" />
              </div>
            </div>
          </div>
        </div>

        {/* House and Building Section */}
        <div className=" house">
        <div >
          <h2 className='person'><span>House, building, project or any design we are providing persons</span></h2></div>
          <div className="houses">
            <div className="row">
              <div className="col-md-6">
                <img src={APP}className='cover' alt="Application" />
              </div>
              <div className="col-md-6">
                <img src={CULTURE} className='cover' alt="Culture" />
              </div>
            </div>
          </div>
        </div>

        {/* Engineers and Others Section */}
        <div className="engineer">
          <div className="row">
            <div className="col-sm-6">
              <h4 className='offer'>Offer you</h4>
              <img src={AA1} className='cover' alt="Offer 1" />
            </div>
            <div className="col-sm-6">
              <h4 className='offer'>Help to controlling it</h4>
              <img src={AA2} className='cover' alt="Offer 2" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h4 className='offer'>Solve your problem</h4>
              <img src={AA3}  className='cover'alt="Offer 3" />
            </div>
            <div className="col-sm-6">
              <h4 className='offer'>Work on new business ideas</h4>
              <img src={AA4} className='cover' alt="Offer 4" />
            </div>
          </div>
        </div>

        {/* Experienced Trainers Section */}
        <div className="experience">
          <h3 className='job'><span className='job'>Very experienced, skilled & smart trainer and officers</span></h3>
          <div className="item">
            <div className="col-md-6">
              <img src={AA5} className='cover' alt="Experienced Trainers" />
            </div>
          </div>
         
        </div>
       <Footer/>
      </div>
      
    </>
  );
}

export default Home;
