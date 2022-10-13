import React, { useState, useEffect } from "react";
import Navbar from "../Components/navbarComponent";
import GalleryCard from "../Components/galleryComponent";

// gallery page
function Gallery() {
  const [textReview, setTextReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  // declare initial states
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState({});

  const onOpenModal = (imageId) => {
    fetch(`https://pure-anchorage-05380.herokuapp.com/galleries/${imageId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        res.json().then((data) => {
          console.log("MODAL DATA ", data);
          setPhoto(data);
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  // submitting the review form
  const submitReview = (e) => {
    fetch(`https://pure-anchorage-05380.herokuapp.com/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        review:textReview,
        gallery_id: photo.id,
        user_id:3
      }
    }).then(function(response) {
      console.log(response);
    });
  };

  // get all images
  useEffect(() => {
    fetch("https://pure-anchorage-05380.herokuapp.com/galleries", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => {
        res.json().then((data) => {
          setPhotos(data);
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {/* iterate over each and show in grid system */}
      {/* <button type="button" class="btn btn-primary">
        Review
      </button>{" "} */}
      <div className="row">
        {photos.map((photo) => {
          return (
            <div className="col-md-4">
              <GalleryCard
                key={photo.id}
                photo={photo}
                onOpenModal={onOpenModal}
              />
            </div>
          );
        })}

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Add review
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {photo.id}
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
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
