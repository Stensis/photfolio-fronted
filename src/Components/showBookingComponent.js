// imports
import React from "react";
import Swal from "sweetalert2";

// booking button
function ShowBooking({ id, date, username, category }) {
  const showAlert = (alertType, title, Message) => {
    let cl = "alert alert-dismissible alert-" + alertType;
    return (
      <div className={cl}>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>{title}</strong>
        {Message}
      </div>
    );
  };
  // removing the booking
  const removeBooking = () => {
    fetch(`https://pure-anchorage-05380.herokuapp.com/bookings/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        res.json().then((data) =>
          data.status === "ok"
            ? Swal.fire(
                "Good job!",
                " You successfully deleted the Booking!",
                "success"
              )
            : // message for error message when delete id is invalid

              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
              })
        );
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <div className="card mt-3 border-danger">
        <div className="card-body">
          <div className="row">
            <div className="col-6">Date:</div>
            <div className="col-6">{date || "No Date Selected"}</div>
            <div className="col-6">Category:</div>
            <div className="col-6">{category || "No Category Selected"}</div>
            <div className="col-6">Username:</div>
            <div className="col-6">{username || "No Username Selected"}</div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-danger text-nowrap"
                type="button"
                onClick={removeBooking}
              >
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBooking;
