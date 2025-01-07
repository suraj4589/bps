import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <>
       <div class="container my-5">
    <div class="row">
      
      <div class="col-lg-6 mb-4">
        <div class="contact-form">
          <h3 class="mb-4">Send Us a Message</h3>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-submit w-100">Submit</button>
          </form>
        </div>
      </div>
      
      <div class="col-lg-6">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> 123 Modern Street, Tech City</p>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <div class="social-icons mt-4">
            <a href="#" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Contact
