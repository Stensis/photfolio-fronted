// import React, { useState } from "react";
// import Navbar from "../Components/navbarComponent";
// import GalleryCard from "../Components/galleryComponent";
// // gallery page
// function Gallery() {

//   // declare initial states
//   const [photos, setPhotos] = useState([]);

//   // get all images
//   const getAllImages = () => {
//     fetch("/galleries", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         res.json().then((data) => setPhotos(data));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // call function
//   getAllImages();

//   return (
//     <div>
//       <Navbar />

//       {/* iterate over each and show in grid system */}
//       <div className="row">
//         {photos.map(({ id, title, image, category, date }) => {
//           return (
//             <div key={id} className="col-md-4">
//               <GalleryCard
//                 key={id}
//                 imgId={id}
//                 imgName={title}
//                 imgUrl={image}
//                 category={category}
//                 updatedAt={date}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Gallery;
