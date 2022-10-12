import React, { useState } from "react";

//login form for admin
function AdminLoginForm() {
  // header for user role
  const userRole = "Admin  Login";

  // declare initial states
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  // submit data once user submits
  const handleSubmit = () => {
    fetch("https://pure-anchorage-05380.herokuapp.com/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password_digest: password })
    })
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h4 className="card-title">{userRole}</h4>
      <div className="card-text">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="userEmail" className="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="userPassword" className="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                placeholder="Password"
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
              <button className="btn btn-lg btn-warning mt-2" type="button">
                Don't Have an account? Create Account
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginForm;
