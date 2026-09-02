const form = document.getElementById("login");
const userName = document.getElementById("name");
const error = document.getElementById("error");

form.addEventListener("submit",function(event){
  event.preventDefault();
  if(userName.value.length < 4){
    error.textContent = "Name is required & cannot be less than 4 characters!";
}else{ 
  localStorage.setItem("name",userName.value);
  window.location.href="dashboard.html";
}
})