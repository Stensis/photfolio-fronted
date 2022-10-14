import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Contact from "./Pages/ContactPage";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Login from "./Pages/LoginPage";
import AdminLogin from "./Pages/AdminLoginPage";
import SignUp from "./Pages/SignUpPage";
import AdminSignUp from "./Pages/AdminSignUpPage";
import Gallery from "./Pages/GalleryPage";
import Booking from "./Pages/BookingPage";
import ReviewingPhoto from "./Pages/ReviewingPhotoPage";
import ShowBooking from "./Pages/ShowBookingPage";
import Logout from "./Components/logoutComponent";

// all routes to all pages present
function App() {
  // set initials
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("https://pure-anchorage-05380.herokuapp.com/user_me").then(
  //     (response) => {
  //       if (response.ok) {
  //         response.json().then((user) => setUser(user));
  //       }
  //     }
  //   );
  // }, []);

  // check if the user  is already logged in
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signIn" element={<Login />}></Route>
          <Route exact path="/adminSignIn" element={<AdminLogin />}></Route>
          <Route exact path="/signUp" element={<SignUp />}></Route>
          <Route exact path="/adminSignUp" element={<AdminSignUp />}></Route>
          {/* <Route exact path="/about" element={<About />}></Route> */}
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    );
  } else {
    // return <Login onLogin={setUser} />;
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/booking" element={<Booking />}></Route>
          <Route exact path="/showbooking" element={<ShowBooking />}></Route>
          <Route
            exact
            path="/gallery/:galleryId"
            element={<ReviewingPhoto />}
          ></Route>
          {/* <Route exact path="/about" element={<About />}></Route> */}
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
