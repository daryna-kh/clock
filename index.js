const currentDate = new Date();

let sec = currentDate.getSeconds();
let min = currentDate.getMinutes();
// const dateAdd = () => {
//   $("#date").append(
//     currentDate.getHours() +
//       ":" +
//       currentDate.getMinutes() +
//       ":" +
//       currentDate.getSeconds()
//   );
// };

$(document).ready(function () {
  setInterval(function () {
    if (sec == 60) {
      sec = 0;
      sec++;

      if (min == 60) {
        min = 0;
        min++;
      }
      min++;
    } else {
      sec++;
    }
    console.log(min, sec);
  }, 1000);
});
