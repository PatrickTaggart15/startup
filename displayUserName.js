// displayUserName.js

document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the user's name from local storage
  const userName = localStorage.getItem("userName");

  // Display the user's name on the page
  const userNameEl = document.getElementById("userName");
  if (userName) {
    userNameEl.textContent = userName;
  } else {
    console.error("User name not found in local storage.");
  }
});
