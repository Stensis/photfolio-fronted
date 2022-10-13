import React, { useState, useEffect } from "react";

function Review({ userId, imgId }) {
  // declare initial states
  const [photo, setPhoto] = useState({});
  
  

  useEffect(() => {
    // get single images
    fetch(`https://pure-anchorage-05380.herokuapp.com/galleries/${imgId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        res.json().then((data) => setPhoto(data));
      })
      .catch((err) => {
        alert(err);
      });
  }, [imgId]);

  return (
    <div className="container w-50 mb-5">
      <div className="card m-4" style={{ maxWidth: "40rem" }}>
        <h3 className="card-header">{photo.title}</h3>
        <img
          src={photo.image}
          className="d-block user-select-none"
          alt={photo.title}
          width="100%"
          height="100%"
        />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{photo.category}</li>
        </ul>

        <div className="card-footer text-muted">{photo.date}</div>
      </div>
   
    </div>
  );
}

export default Review;
