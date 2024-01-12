const daysInYear = 365;
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Month is zero-based
const daysContainer = document.querySelector(".days");

for (let i = 1; i <= daysInYear; i++) {
  const dayBox = document.createElement("div");
  dayBox.classList.add("day-box");
  dayBox.textContent = i;

  // Check if the day has already passed
  if ((i < currentDay && currentMonth === 1) || currentMonth > 1) {
    dayBox.classList.add("past-day");
  }

  daysContainer.appendChild(dayBox);
}
