import React from "react";
// import "../index.css";
import photograph from "../assets/64.png"

// components
import Navbar from "../Components/navbarComponent";
// import Booking from "../Components/bookUsComponent";

// css
import "../assets/css/homebg.css";

// home page
function Home() {
  return (
    <div>
      <div className="container-fluid">
      <Navbar/>
      <div className="row">
        <div className="col-md-6 px-5 mt-5">
          <h1 className="mt-5 px-5">“If the photographer is interested in the people in front of his lens,
             and if he is compassionate, it’s already a lot. 
             The instrument is not the camera but the photographer.”</h1>
        </div>
        <div className="col-md-6">
          <div className="backgroundimg"></div>
        </div>
       
      </div>
    </div>

    </div>
    
  );
}

export default Home;
