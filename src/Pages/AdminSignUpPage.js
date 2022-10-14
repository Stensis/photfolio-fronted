import React from "react";
import AdminSignUpComponent from "../Components/adminSignUpComponent";
import Navbar from "../Components/navbarComponent";

// sign-up page
function AdminSignUp() {
  return (
    <div>
      <Navbar />
      {/* card box */}
      <div className="d-flex justify-content-center mt-5">
        <div className="card border-primary mb-3">
          <div className="card-body">
            {/* login form for either users or admins */}
            <AdminSignUpComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
