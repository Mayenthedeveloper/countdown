const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");
const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("coutdown-title");
const countdownElBtn = document.getElementById("coutdown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

// set date input min with todays date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// populate countdown /complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log("distance", distance);
}

//take values form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  console.log(countdownDate, countdownTitle);
  // get number vrsion of current date, updatedom
  countdownValue = new Date(countdownDate).getTime();
  console.log(countdownValue, "countdownValue");
  updateDOM();
}

// event listener
countdownForm.addEventListener("submit", updateCountdown);
