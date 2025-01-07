import React from 'react';
import './MsmeLogin.css';

function MsmeLogin() {
  return (
    <>
      <div className="container-fluid msme-login-container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-4 col-lg-4">
            <div className="card shadow-lg">
              <div className="card-header text-white text-center bg-success">
                <h3>MSME Login</h3>
              </div>
              <div className="card-body p-4">
                <form id="msmeLoginForm">
                  <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember Me
                      </label>
                    </div>
                    <a href="#" className="text-success">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Login
                  </button>
                </form>
              </div>
              <div className="card-footer text-center">
                <p className="mb-0">
                  Don't have an account?{' '}
                  <a href="#" className="text-success">
                    Register Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MsmeLogin;
