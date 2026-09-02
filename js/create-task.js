const form = document.getElementById("create-task");
const text = document.getElementById("task-content");
const date = document.getElementById("date");
const success_message = document.getElementById("success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selectedTags = document.querySelectorAll('input[name="tag"]:checked');
  const tagsArray = [...selectedTags].map((tag) => tag.value);

  fetch("https://todo-three-zeta-23.vercel.app/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify({
      text: text.value,
      created_at: date.value,
      Tags: tagsArray,
      is_complete: false,
    }),
  });
  text.value = "";
  date.value = "";
  selectedTags.forEach(function (tag) {
    tag.checked = false;
  });
  success_message.textContent = "Task Successfully Created";
});
