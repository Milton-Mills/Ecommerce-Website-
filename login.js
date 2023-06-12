const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = form.username.value;
  const password = form.password.value;

  if (username === "Milton" && password === "12345") {
    window.location.href = "index.html";
  } else {
    errorMessage.innerText = "Invalid username or password";
  }
});
