import React from "react";
import "../index.css";

// navigation bar content
function Navbar() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* if user is logged in , show the loggedin data */}
          {isLoggedIn ? (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">
                    Galleries
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/booking">
                    Booking
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact us
                  </a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link" href="/signIn">
                    Login
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/signUp">
                    Create Account
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
