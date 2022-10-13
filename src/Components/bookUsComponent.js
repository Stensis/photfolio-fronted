// imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./bookingFormComponent";

// booking button
function BookUs() {
  const [visibleForm, setVisibleForm] = useState(false);
  const showForm = () => {
    setVisibleForm(true);
  };

  // navigation
  const navigate = useNavigate();
  const goToBooking = () => {
    navigate("/showbooking");
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      {visibleForm === true ? (
        <BookingForm />
      ) : (
        <>
          <div className="d-grid gap-2 mx-5">
            <button
              className="btn btn-outline-success text-nowrap"
              type="button"
              onClick={showForm}
            >
              Book Us
            </button>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-outline-success text-nowrap"
              type="button"
              onClick={goToBooking}
            >
              ShowBooking
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BookUs;
