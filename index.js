const currentDate = new Date();

let sec = currentDate.getSeconds();
let min = currentDate.getMinutes();
let hour = currentDate.getHours();

// sec = 55;
// min = 59;
// hour = 1;

$(document).ready(function () {
  let startedHours = $("#hours").append(hour);
  let startedMin = $("#min").append(min);
  let startedSec = $("#sec").append(sec);

  setInterval(function () {
    if (sec == 59) {
      sec = -1;
      sec++;

      if (min == 59) {
        min = -1;
        min++;

        if (hour == 23) {
          hour = -1;
          hour++;
          startedHours.html("00");
        } else {
          hour++;
          if (hour < 10) {
            startedHours.html("0" + hour);
          } else {
            startedHours.html(hour);
          }
        }
        startedMin.html("0" + min);
      } else {
        min++;
        if (min < 10) {
          startedMin.html("0" + min);
        } else {
          startedMin.html(min);
        }
      }
      startedSec.html("00");
    } else {
      sec++;
      if (sec < 10) {
        startedSec.html("0" + sec);
      } else {
        startedSec.html(sec);
      }
    }
  }, 1000);
});
