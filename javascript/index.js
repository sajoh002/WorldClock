function updateTime() {
  // NYC
  let nycElement = document.querySelector("#nyc");
  if (nycElement) {
    let nycDateElement = nycElement.querySelector(".date");
    let nycTimeElement = nycElement.querySelector(".time");
    let nycTime = moment().tz("America/New_York");
    nycDateElement.innerHTML = nycTime.format("dddd, MMMM Do, YYYY");
    nycTimeElement.innerHTML = nycTime.format("h:mm:ss [<small>]A[</small>]");
  }
  // Madison
  let madisonElement = document.querySelector("#madison");
  if (madisonElement) {
    let madisonDateElement = madisonElement.querySelector(".date");
    let madisonTimeElement = madisonElement.querySelector(".time");
    let madisonTime = moment().tz("America/Chicago");
    madisonDateElement.innerHTML = madisonTime.format("dddd, MMMM Do, YYYY");
    madisonTimeElement.innerHTML = madisonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  setInterval(() => {
    if (event.target.value.length > 0) {
      let cityTimeZone = event.target.value;
      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cities");
      citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">All cities</a>`;
    }
  }, 500);
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
