import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>
      <section>
        <footer className="footer">

          <div className="row">
            <div className="col-sm-2">
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
            <div className="col-sm-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
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
            <div className="col-sm-6">
              <h5>Contact Us</h5>
              <p>123 Street Name, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
            
          </div>

        </footer>
      </section>
    </>
  )
}

export default Footer
