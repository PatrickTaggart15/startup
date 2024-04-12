function login() {
    const nameEl = document.querySelector("#name");
    const emailEl = document.querySelector("#email");
    
    // Retrieve the values entered into the "name" and "email" input fields
    const name = nameEl.value;
    const email = emailEl.value;
  
    // Check if both name and email are provided
    if (name && email) {
      // Store the values in local storage under the keys "userName" and "userEmail"
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
  
      // Redirect the user to the "sales.html" page
      window.location.href = "sales.html";
    } else {
      // Display an error message if either name or email is missing
      alert("Please enter your name and email.");
    }
  }