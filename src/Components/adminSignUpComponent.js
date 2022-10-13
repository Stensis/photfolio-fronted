import React from "react";
import { useState } from "react";

function SignUpAdmin({ setAdmin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleSubmit() {
    fetch("http://127.0.0.1:3000/admin_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password_digest: password
        // password_confirmation: passwordConfirm
      })
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setAdmin(user));
        alert("user saved successfully");
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <h4 className="card-title">{heading}</h4> */}
        <h1>Sign Up</h1>
        <fieldset>
          <div className="form-group">
            <label htmlFor="userEmail" className="form-label mt-4">
              Emailaddress:
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
              type="text"
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
            <button
              className="btn btn-lg btn-primary text-nowrap"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpAdmin;
