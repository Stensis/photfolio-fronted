import React from "react";

// components
import Navbar from "../Components/navbarComponent";

// css
import "../assets/css/homebg.css";

// home page
function Home() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <div className="row" style={{backgroundColor:"plum"}}>
          <div className="col-md-6 px-5 mt-5">
            <h1 className="mt-5 px-5">
              If it excites me, <br></br>
              there is a good chance it will make a good photograph.
            </h1>
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
