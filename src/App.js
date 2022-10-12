import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Contact from "./Pages/ContactPage";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Login from "./Pages/LoginPage";
import AdminLogin from "./Pages/AdminLoginPage";
import SignUp from "./Pages/SignUpPage";
import AdminSignUp from "./Pages/AdminSignUpPage"
import Gallery from "./Pages/GalleryPage";
import Booking from "./Pages/BookingPage";
import ReviewingPhoto from "./Pages/ReviewingPhotoPage";

// all routes to all pages present
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/signIn" element={<Login />}></Route>
        <Route exact path="/adminSignIn" element={<AdminLogin />}></Route>
        <Route exact path="/signUp" element={<SignUp />}></Route>
        <Route exact path="/adminSignUp" element={<AdminSignUp />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/booking" element={<Booking />}></Route>
        <Route exact path="/gallery/:galleryId" element={<ReviewingPhoto />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
