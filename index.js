const form = document.getElementById("form");
let Display = document.getElementById("Display");
let totaleMinutes;
let interval;

function counter() {
  let Minutes = Math.floor(totaleMinutes / 60);
  let secondes = totaleMinutes % 60;

  let sec = secondes < 10 ? "0" + secondes : secondes;
  Display.textContent = `${Minutes}:${sec}`;
  if (totaleMinutes < 0) {
    Display.textContent = `The End`;
  } else {
    totaleMinutes--;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInterval(interval);
  if (isNaN(choice.value)) {
    alert("ceci n'est pas un chiffre ou nombre ");
  } else {
    totaleMinutes = choice.value * 60;
    choice.value = "";
    interval = setInterval(counter, 100);
  }
});
