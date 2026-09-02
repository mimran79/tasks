fetch("https://todo-three-zeta-23.vercel.app/todos", {
  method: "GET",
})
  .then((tasks) => tasks.json())
  .then((tasks) => {
    tasks[0].todolist.forEach((task) => {
      const container = document.querySelector(".container");
      const item = document.createElement("div");
      item.classList.add("item");

      const date = document.createElement("time");
      date.classList.add("card-date");
      date.textContent = new Date(task.created_at).toLocaleDateString("en-GB");

      const title = document.createElement("h2");
      title.classList.add("card-title");
      title.textContent = task.text;

      item.appendChild(date);
      item.appendChild(title);
      task.Tags.forEach((tagName) => {
        const span = document.createElement("span");
        span.classList.add("tag");
        span.textContent = tagName;
        item.appendChild(span);
      });

      const status = document.createElement("p");
      status.classList.add("card-status");
      if (task.is_complete === true) {
        status.textContent = "Complete";
      } else {
        status.textContent = "Incomplete";
      }

      item.appendChild(status);

      const modify = document.createElement("button");
      modify.classList.add("btn");
      modify.textContent = "Modify Task";
      item.appendChild(modify);
      container.appendChild(item);
      modify.addEventListener("click", () => {
        window.location.href = "modify-task.html?id=" + task.id;
      });
      const del = document.createElement("button");
      del.classList.add("btn");
      del.textContent = "Delete Task";
      item.appendChild(del);
      del.addEventListener("click", function (event) {
        event.preventDefault();
        fetch("https://todo-three-zeta-23.vercel.app/todos" + task.id, {
          method: "DELETE",
        })
          .then((response) => response.text())
          .then((response) => {
            window.location.reload();
          });
      });
    });
  });
