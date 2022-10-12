import React, { useState, useEffect } from "react";

function Review({ userId, imgId }) {
  // declare initial states
  const [photo, setPhoto] = useState({});
  const [textReview, setTextReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    // get single images
    fetch(`http://127.0.0.1:3000/galleries/${imgId}`, {
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

  // show all reviews
  const getAllReviews = async () => {
    // get reviews
    let res = await fetch(`http://127.0.0.1:3000/reviews/${imgId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
    // res.json().then((data) => setReviews(data));
    let data = await res.json()
    console.log(data)
    return data
    // alert(reviews);
  };

  // for clicking button
  const handleGetAllReviews = () => {
    setShowReviews(true);
    getAllReviews().then((res)=>setReviews(res));
  };

  // post review
  const submitReview = () => {
    // push data
    fetch("https://pure-anchorage-05380.herokuapp.com/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gallery_id: imgId,
        user_id: 2, // TODO
        review: textReview,
      }),
    })
      .then((res) => {
        alert("review sent successfully");
      })
      .catch((err) => alert(err));
  };
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
      <form onSubmit={submitReview}>
        <div className="form-group">
          <label htmlFor="ReviewTextarea" className="form-label mt-4">
            Type your Review here...
          </label>
          <textarea
            className="form-control"
            id="ReviewTextarea"
            value={textReview}
            onChange={(e) => setTextReview(e.target.value)}
            rows="2"
          ></textarea>
          <div className="d-flex justify-content-center mb-2">
            <button type="submit" className="btn btn-primary btn-sm mt-2">
              Submit
            </button>
          </div>

          {showReviews === true ? (
            reviews.map(({review}) => (
              <div className="d-flex justify-content-center mb-2 list-group">
                <p className="list-group-item list-group-item-action">
                  {review}
                </p>
              </div>
            ))
          ) : (
            <div className="d-grid gap-2">
              <button
                className="btn btn-lg btn-primary"
                type="button"
                onClick={handleGetAllReviews}
              >
                Show Reviews
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Review;
