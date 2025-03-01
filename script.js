// Get all buttons with id "complete-btn"
const completeBtn = document.querySelectorAll("#complete-btn");
completeBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const completedTask = document.getElementById("completed-task");
    const taskNumber = parseInt(completedTask.textContent);
    const countCompletedTask = document.getElementById("count-completed-task");
    const count = parseInt(countCompletedTask.textContent);
    countCompletedTask.textContent = Math.max(count + 1, 0);
    completedTask.textContent = Math.max(taskNumber - 1, 0);
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
    const sidebar = document.getElementById("sidebar");
    const newSection = document.createElement("div");
    const taskTitle =
      event.target.parentNode.parentNode.childNodes[3].innerText;

    newSection.classList.add("bg-slate-100", "p-2", "rounded");
    newSection.textContent = `You have completed the task '${taskTitle}'`;
    console.log(taskTitle);
    sidebar.appendChild(newSection);
    sidebar.scrollTop = sidebar.scrollHeight;
  });
});

// Get the clear history button
const clearHistoryBtn = document.getElementById("clear-history-btn");

// Add an event listener to the clear history button
clearHistoryBtn.addEventListener("click", function () {
  // Get the sidebar
  const sidebar = document.getElementById("sidebar");
  const divs = sidebar.querySelectorAll("div");
  divs.forEach((div) => {
    if (!div.classList.contains("section")) {
      div.remove();
    }
  });
});
