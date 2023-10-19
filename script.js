const button = document.querySelector("#loginbtn");
button.addEventListener("click", function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  if (username && password) {
    window.location.href = "feed.html";
  } else {
    alert("Please Fill both fields!");
  }
});
