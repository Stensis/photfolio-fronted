// import React, { useState,useEffect } from "react";

// function BookingForm() {
//   // const [booking, setBooking] = useState('')
//   const [email,setEmail] = useState('')
//   const [username, setUsername] = useState('')
//   const [date,setDate] = useState('')
//   const [category,setCategory] = useState('')

//   // const Booking = () => {
//   //   fetch("/galleries", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //   })
//   //     .then((res) => {
//   //       res.json().then((data) => setBooking(data));
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };
//   const handleSubmit = () => {
//     fetch("https://pure-anchorage-05380.herokuapp.com/bookings", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         username:username,
//         booking_date:date,
//         session_type:category,
//         email:email,
//         user_id:2

//       }),
//     })
//       .then((res) => {
//         alert("booking date set succesfully");
//       })
//       .catch((err) => alert(err));
//   };
  
//   // useEffect(()=>{
//   //   fetch('http://127.0.0.1:3000/bookings',
//   //   )
//   //   .then((res)=> res.json())
//   //   .then((data) =>{
//   //    setbooking(data)
//   //    console.log(booking)
//   //   })
//   // },[])

  
//   return (
//     <div className="mt-4">
//       <div className="card border-primary mb-3 " style={{ maxWidth: "40rem" }}>
//         <h3 className="card-header">Booking Form</h3>
//         <div className="card-body">
//           <form onSubmit={handleSubmit}>
//             <fieldset>
//               <div className="form-group row"></div>
//               <div className="form-group">
//                 <label htmlFor="username" className="form-label mt-4">
//                   username
//                 </label>
//                 <input
//                   type="name"
//                   className="form-control"
//                   id="username"
//                   placeholder="text"
//                   onChange={(e)=>setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email" className="form-label mt-4">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                   onChange={(e)=>setEmail(e.target.value)}
//                 />
//                 <div className="form-group">
//                   <label htmlFor="category" className="form-label mt-4">
//                     Category
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="category"
//                     placeholder="Enter category"
//                     onChange={(e)=>setCategory(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="bookingDate" className="form-label mt-4">
//                     booking date
//                   </label>
//                   <input
//                     type="date"
//                     className="form-control"
//                     id="bookingDate"
//                     placeholder="Enter Date"
//                     onChange={(e)=>setDate(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="d-flex justify-content-center">
//             <button type="submit" className="btn btn-primary btn-sm mt-2">
//               Submit
//             </button>
//           </div>
//             </fieldset>
//           </form>

        
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookingForm;
