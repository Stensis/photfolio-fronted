import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/navbarComponent";
import Review from "../Components/reviewComponent";

// about page
function ReviewingPhoto() {
  // get url parameter
  let { galleryId } = useParams();

  return (
    <div>
      <Navbar />
      <Review imgId={galleryId} />
    </div>
  );
}

export default ReviewingPhoto;
