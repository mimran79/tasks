const user = localStorage.getItem("name"); 
if(!user){
  window.location.href= "login.html";
}
