// logout out and delete local storage data
function Logout() {
  fetch("https://pure-anchorage-05380.herokuapp.com/user_logout", {
    method: "DELETE"
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.clear();
      window.location = "/";
    });
}

export default Logout;
