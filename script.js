//your JS code here. If required.

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Check whether saved credentials exist
function checkSavedUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername !== null && savedPassword !== null) {
    existing.hidden = false;
  } else {
    existing.hidden = true;
  }
}

// Submit login form
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const user = username.value;

  alert("Logged in as " + user);

  if (checkbox.checked) {
    localStorage.setItem("username", user);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkSavedUser();
});

// Login using saved credentials
existing.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");

  if (savedUsername !== null) {
    alert("Logged in as " + savedUsername);
  }
});

// Run when page loads
checkSavedUser();
