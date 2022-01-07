function fullDate() {
  let date = new Date();
  let dateHours = date.getHours();
  let dateMinutes = date.getMinutes();
  let dateSeconds = date.getSeconds();
  let am_pm = "AM";
  let hoursConvert = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  hoursConvert.forEach((value, index) => {
    if (value == dateHours) {
      am_pm = "PM";
      dateHours = index + 1;
      dateHours = 10 > dateHours ? "0" + dateHours : dateHours;
    }
  });
  if (dateHours == 12 && am_pm == "PM" && 0 < dateMinutes) {
    am_pm = "AM";
  }
  dateMinutes = 10 > dateMinutes ? "0" + dateMinutes : dateMinutes;
  dateSeconds = 10 > dateSeconds ? "0" + dateSeconds : dateSeconds;
  document.querySelector(
    ".date"
  ).innerHTML = `${dateHours}:${dateMinutes}:${dateSeconds}`;
  document.querySelector(".am_pm").innerHTML = am_pm;

  setTimeout(fullDate, 1000);
}

fullDate();
