import React from "react";

function GalleryCard({photo, onOpenModal }) {
  // declare navigate

  return (
    <div>
      <div className="card m-4" style={{ maxWidth: "20rem" }}>
        <h3 className="card-header">{photo.imgName}</h3>
        <img
          src={photo.image}
          className="d-block user-select-none"
          alt={photo.imgName}
          width="100%"
          height="200"
        />

        <ul className="list-group list-group-flush">
          <li className="list-group-item">{photo.category}</li>
        </ul>

        <div className="card-footer text-muted">Updated - {photo.date}</div>
        <div>
        <button type="button" class="btn btn-secondary btn-sm">
              Reviews <span class="badge badge-primary">{photo.reviews.length}</span></button>
          {
            photo.reviews.map((review) => (
              <div classrName="card p-1 m-1" key={review.id}>
                {review.review}
                <div className="text-right">
                  {/* {review.user.id} */} - user
                  </div>
              </div>
            )
            )
          }
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm mt-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
          onClick={()=>onOpenModal(photo.imgId)}
        >
          Review
        </button> 
      </div>
    </div>
  );
}

export default GalleryCard;
