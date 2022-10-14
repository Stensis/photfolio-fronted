import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

// creating a new user
function SignUpUser() {
  // declare initials
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // handle user registration
  function handleSubmit(e) {
    e.preventDefault();
    // check matching password
    if (password !== passwordConfirm) {
      // if  sign up failed
      let misMatchAlert = Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Passwords don't match"
      });
      // after alert reload page
      misMatchAlert.then(function () {
        window.location = "/signUp";
      });
      return;
    }

    // send data to server
    fetch("https://pure-anchorage-05380.herokuapp.com/user_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if account created successfully
        let successAlert = new Swal({
          title: "Success!",
          text: "User saved successfully!",
          type: "success"
        });
        // after successful sign up then login
        successAlert.then(function () {
          window.location = "/signIn";
        });
      })
      .catch((err) => {
        console.log(err);
        // if  sign up failed
        let failAlert = new Swal({
          title: "Oops!",
          text: "User not saved!",
          type: "error"
        });
        // after alert reload page
        failAlert.then(function () {
          window.location = "/signUp";
        });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <h4 className="card-title">{heading}</h4> */}
      <h1>Sign Up</h1>
      <fieldset>
        <div className="form-group">
          <label htmlFor="userEmail" className="form-label mt-4">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="userName" className="form-label mt-4">
            Username:
          </label>
          <input
            type="name"
            className="form-control"
            id="userName"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword" className="form-label mt-4">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userConfirmPassword" className="form-label mt-4">
            Confirm-Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="userPassword"
            value={passwordConfirm}
            placeholder="re-enter Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3 w-25">
          <button className="btn btn-lg btn-primary text-nowrap" type="submit">
            Sign Up
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default SignUpUser;
