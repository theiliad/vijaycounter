var moment = require("moment-business-days");

const a = moment();
const b = moment([2019, 3, 9]);
var count = 0;

for (var m = moment(a); m.isBefore(b); m.add(1, "days")) {
  if (m.isBusinessDay()) {
    count += 1;
  }
}

const vijayBusinessDays = count - 6;
console.log(vijayBusinessDays);

var eventTime = new Date("April 9, 2019").getTime();
var currentTime = +new Date();
var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime * 1000, "milliseconds");
var interval = 1000;

setInterval(function() {
  duration = moment.duration(duration - interval, "milliseconds");
  $(".countdown").html(`
    <div class="box">
      <div class="item">
      ${vijayBusinessDays} <h3>Days</h3>
      </div>

      <div class="item">
      ${duration.hours()} <h3>Hours</h3>
      </div>

      <div class="item">
      ${duration.minutes()} <h3>Minutes</h3>
      </div>

      <div class="item">
      ${duration.seconds()} <h3>Seconds</h3>
      </div>
    </div>
  `);
}, interval);
