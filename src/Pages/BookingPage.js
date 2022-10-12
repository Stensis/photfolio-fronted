import React from "react";
import Navbar from "../Components/navbarComponent";
import BookUs from "../Components/bookUsComponent";

// booking page
function Booking() {
  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <BookUs />
      </div>
    </div>
  );
}

export default Booking;
