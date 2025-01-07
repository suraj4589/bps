import React from 'react'
import './Empylogin.css';
function Empylogin() {
  return (
    <>
      <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card mt-5">
        <div class="card-header bg-primary text-white">
          <h3 class="text-center">Employee Login</h3>
        </div>
        <div class="card-body">
          <form id="loginForm">
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" name="username" required/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" name="password" required/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<script src="script.js"></script>
    </>
  )
}

export default Empylogin
