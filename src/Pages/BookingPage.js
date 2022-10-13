import React from "react";
import Navbar from "../Components/navbarComponent";
import BookUs from "../Components/bookUsComponent";
import CarouseLComponent from "../Components/corouselComponent";

// booking page
function Booking() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 mb-3"style={{backgroundColor:"blur",backgroundSize:"cover"}}>
        <BookUs />
      </div>
      <div className="container" style={{backgroundColor:"black",backgroundSize:"cover"}}>
        <CarouseLComponent />
      </div>
    </div>
  );
}

export default Booking;
