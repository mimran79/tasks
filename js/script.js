// Responsive Menu Code Starts Here
const menuButton = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");
menuButton.addEventListener("click", function () {
  menuButton.style.display = "none";
  menu.style.display = "block";
});
//Logout
const logout = document.getElementById("logout");

logout.addEventListener("click", function () {
  localStorage.removeItem("name");
  window.Location.href = "index.html";
});
