const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

// set date input min with todays date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

//take values form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;

  console.log(countdownDate, countdownTitle);
  // get number vrsion of current date, updatedom
  countdownValue = new Date(countdownDate).getTime();
  console.log(countdownValue, "countdownValue");
}

// event listener
countdownForm.addEventListener("submit", updateCountdown);
