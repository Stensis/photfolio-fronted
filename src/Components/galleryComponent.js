// import React from "react";
// import { useNavigate } from "react-router-dom";

// function GalleryCard({ imgId, imgName, imgUrl, category, updatedAt }) {
//   // declare navigate
//   const navigate = useNavigate();
//   // redirect to photo page for review
//   const ReviewPage = () => {
//     navigate(`https://pure-anchorage-05380.herokuapp.com/gallery/${imgId}`);
//   };
//   return (
//     <div>
//       <div className="card m-4" style={{ maxWidth: "20rem" }}>
//         <h3 className="card-header">{imgName}</h3>
//         <img
//           src={imgUrl}
//           className="d-block user-select-none"
//           alt={imgName}
//           width="100%"
//           height="200"
//         />

//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">{category}</li>
//         </ul>

//         <div className="card-footer text-muted">{updatedAt}</div>
//         <button
//           type="button"
//           className="btn btn-primary btn-sm mt-2"
//           onClick={ReviewPage}
//         >
//           Review
//         </button>
//       </div>
//     </div>
//   );
// }

// export default GalleryCard;
