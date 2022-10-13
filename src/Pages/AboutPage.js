import React from "react";
import Navbar from "../Components/navbarComponent";

// about page
function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
