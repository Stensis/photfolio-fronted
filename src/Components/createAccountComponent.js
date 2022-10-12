import React from "react";

//login form for user/ admin
function CreateAccountForm({role}) {
  const heading = role + " Sign Up";
  return (
    <div>
      <h4 class="card-title">{heading}</h4>
      <p class="card-text">
        <form>
          <fieldset>
            <div class="form-group">
              <label for="userEmail" class="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                placeholder="Email"
              />
            </div>
            <div class="form-group">
              <label for="userName" class="form-label mt-4">
                User name
              </label>
              <input
                type="text"
                class="form-control"
                id="userName"
                placeholder="username"
              />
            </div>
            <div class="form-group">
              <label for="userPassword" class="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="userPassword"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="userConfirmPassword" class="form-label mt-4">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="userPassword"
                placeholder="re-enter Password"
              />
            </div>
          </fieldset>
        </form>
      </p>
    </div>
  );
}

export default CreateAccountForm;
