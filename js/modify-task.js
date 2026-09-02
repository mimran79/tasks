const task = new URLSearchParams(window.location.search);
const id = task.get("id");

const content = document.getElementById("task-content");
const date = document.getElementById("date");
const status = document.getElementById("status");
fetch("https://todo-three-zeta-23.vercel.app/todos" + id, {
  method: "GET",
})
  .then((task) => task.json())
  .then((task) => {
    content.value = task.text;
    date.value = new Date(task.created_at).toISOString().split("T")[0];
    if (task.is_complete === true) {
      status.value = "Complete";
    } else {
      status.value = "To-do";
    }
    document.querySelectorAll('input[name="tag"]').forEach((checkbox) => {
      checkbox.checked = task.Tags.includes(checkbox.value);
    });
  });

const form = document.getElementById("create-task");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedTags = document.querySelectorAll('input[name="tag"]:checked');
  const tagsArray = [...selectedTags].map((tag) => tag.value);
  fetch("https://todo-three-zeta-23.vercel.app/todos" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: content.value,
      created_at: date.value,
      Tags: tagsArray,
      is_complete: status.value === "Complete",
    }),
  })
    .then((data) => data.json)
    .then((data) => {
      window.location.href = "tasks.html";
    });
});
