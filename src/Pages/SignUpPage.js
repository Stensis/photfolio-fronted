import React from "react";
// import CreateAccountForm from "../Components/createAccountComponent";
import SignUpUser from "../Components/signUpcomponent";
import Navbar from "../Components/navbarComponent";

// sign-up page
function SignUp() {
  return (
    <div>
      <Navbar />
      {/* card box */}
      <div className="d-flex justify-content-center mt-5">
        <div className="card border-primary mb-3">
          <div className="card-body">
            {/* login form for either users or admins */}
            {/* <CreateAccountForm role="User" /> */}
            <SignUpUser />
            {/* sign-in and sign-up */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
