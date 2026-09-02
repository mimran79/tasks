const username = document.getElementById("username");
const date = document.getElementById("day");
const d = new Date();
day.textContent = d.toLocaleDateString("en-GB");
const total = document.getElementById("total");
const completedTotal = document.getElementById("completed");
const incompleteTotal = document.getElementById("incomplete");

username.textContent = localStorage.getItem("name");

fetch("hhttps://tasks-liytaj07-imran-2f49.vercel.app", {
  method: "GET",
})
  .then((data) => data.json())

  .then((data) => {
    const list = data[0].todolist;
    total.textContent = list.length;
    completedTotal.textContent = list.filter(
      (item) => item.is_complete === true,
    ).length;
    incompleteTotal.textContent = list.filter(
      (item) => item.is_complete === false,
    ).length;
  });
