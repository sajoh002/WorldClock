function updateTime() {
  // NYC
  let nycElement = document.querySelector("#nyc");
  let nycDateElement = nycElement.querySelector(".date");
  let nycTimeElement = nycElement.querySelector(".time");
  let nycTime = moment().tz("America/New_York");
  nycDateElement.innerHTML = nycTime.format("dddd, MMMM Do, YYYY");
  nycTimeElement.innerHTML = nycTime.format("h:mm:ss [<small>]A[</small>]");

  // Madison
  let madisonElement = document.querySelector("#madison");
  let madisonDateElement = madisonElement.querySelector(".date");
  let madisonTimeElement = madisonElement.querySelector(".time");
  let madisonTime = moment().tz("America/Chicago");
  madisonDateElement.innerHTML = madisonTime.format("dddd, MMMM Do, YYYY");
  madisonTimeElement.innerHTML = madisonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
