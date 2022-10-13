import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbarComponent";
import ShowBookingComponent from "../Components/showBookingComponent";

function ShowBooking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // get all bookingDate
  useEffect(() => {
    fetch("https://pure-anchorage-05380.herokuapp.com/bookings", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        res.json().then((data) => {
          setLoading(false);
          setBookings(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Navbar />
          {loading === true ? (
            "Loading..."
          ) : (
            <div className="mt-5">
              {/* ITERATING THE BOOKINGS */}
              {bookings.map((booking) => {
                return (
                  <ShowBookingComponent
                    id={booking.id}
                    category={booking.session_type}
                    date={booking.booking_date}
                    key={booking.id}
                    username={booking.username}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ShowBooking;
