import React from "react";
import Navbar from "../Components/navbarComponent";
import ContactUs from "../Components/contactUsComponent";

// contact page
function Contact() {
  return (
    <div style={{backgroundColor:"pink",backgroundSize:"cover"}}>
      <Navbar />
      <ContactUs />
    </div>
  );
}

export default Contact;
