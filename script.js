let completedCount = 0;
const completeBtns = document.querySelectorAll("#complete-btn");
const totalTasks = completeBtns.length;

function checkAllCompleted() {
  let allDisabled = true;
  completeBtns.forEach((btn) => {
    if (!btn.disabled) {
      allDisabled = false;
    }
  });
  if (allDisabled) {
    alert("🎉 Congratulations! You have completed all tasks!");
  }
}

const completeBtn = document.querySelectorAll("#complete-btn");
completeBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    const isConfirmed = confirm("Board Update successfully");
    if (!isConfirmed) return;
    const completedTask = document.getElementById("completed-task");
    const taskNumber = parseInt(completedTask.textContent);
    const countCompletedTask = document.getElementById("count-completed-task");
    const count = parseInt(countCompletedTask.textContent);
    countCompletedTask.textContent = Math.max(count + 1, 0);
    completedTask.textContent = Math.max(taskNumber - 1, 0);
    btn.classList.add("opacity-50", "cursor-not-allowed");
    const sidebar = document.getElementById("sidebar");
    const newSection = document.createElement("div");
    const taskTitle =
      event.target.parentNode.parentNode.childNodes[3].innerText;
    const now = new Date();
    const options = {
      timeZone: "Asia/Dhaka",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedTime = now.toLocaleTimeString("en-GB", options);
    newSection.classList.add("bg-slate-100", "p-2", "m-2", "rounded");

    newSection.innerHTML = `<p>You have completed
    <strong>${taskTitle}</strong> at <span class="text-blue-600">${formattedTime}</span></p>`;
    sidebar.appendChild(newSection);
    checkAllCompleted();
  });
});

const clearHistoryBtn = document.getElementById("clear-history-btn");

clearHistoryBtn.addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const divs = sidebar.querySelectorAll("div");
  divs.forEach((div) => {
    if (!div.classList.contains("section")) {
      div.remove();
    }
  });
});

function updateCurrentDate() {
  const dateElement = document.querySelector("#date");
  if (dateElement) {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-GB", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
    dateElement.textContent = formattedDate;
  }
}
updateCurrentDate();
