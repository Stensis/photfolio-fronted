import React, { useState } from "react";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

// login component
function LoginForm({ onLogin }) {
  // declaring attributes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  // get the pathname
  const isAdmin = location.pathname === "/adminSignIn";

  // get csrf token
  function getCSRFToken() {
    return decodeURI(document.cookie.split("=")[1]);
  }
  // send data to server
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://pure-anchorage-05380.herokuapp.com/user_login", {
      method: "POST",
      // credentials: "include",
      headers: {
        "X-CSRF-Token": getCSRFToken(),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        // set is logged in to true
        localStorage.setItem("user_id", data.id);
        if (isAdmin) {
          localStorage.setItem("role", "admin");
        } else {
          localStorage.setItem("role", "user");
        }

        localStorage.setItem("isLoggedIn", true);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
        // if  login failed
        let failAlert = new Swal({
          title: "Oops!",
          text: "User not logged in!",
          type: "error"
        });
        // after alert reload page
        failAlert.then(function () {
          window.location = "/signIn";
        });
      });
  }

  //login form for user
  // const userRole = "User Login";
  return (
    <div>
      {/* <h4 className="card-title">{userRole}</h4>
      <p className="card-text"> */}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group">
            <label htmlFor="userEmail" className="form-label mt-4">
              Email
            </label>
            <input
              className="form-control"
              placeholder="email"
              type="email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword" className="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* sign-in and sign-up */}
          <div className="d-grid gap-2 mt-3 w-25">
            <button className="btn btn-lg btn-primary" type="submit">
              Login
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              className="btn btn-lg btn-warning mt-2"
              type="button"
              onClick={() => (window.location = "/signUp")}
            >
              Don't Have an account? Create Account
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
