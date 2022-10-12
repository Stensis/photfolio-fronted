import React from "react";
import Navbar from "../Components/navbarComponent";
import LoginForm from "../Components/loginFormComponent";

// login page
function Login() {
  return (
    <div>
      {/* navigation bar */}
      <Navbar />

      {/* card box */}
      <div class="d-flex justify-content-center mt-5">
        <div class="card border-primary mb-3" style={{ maxWidth: "40rem" }}>
          <div class="card-body">
            {/* login form for either users */}
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
