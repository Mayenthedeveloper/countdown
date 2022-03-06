const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

// set date input min with todays date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//take values form input
function updateCountdown(e) {
  console.log(e);
}

// event listener
countdownForm.addEventListener("submit", updateCountdown);
