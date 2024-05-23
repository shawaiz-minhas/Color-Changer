let platBtn = document.getElementById("play");
let stopBtn = document.getElementById("stop");

let randomGen = function () {
  let hex = "1234567890ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += hex[Math.floor(Math.random() * 16)];
  }
  return colors;
};
let intervalId;
const starterFun = function () {
  if (!intervalId) {
    intervalId = setInterval(changer, 1000);
  }

  function changer() {
    document.body.style.backgroundColor = randomGen();
  }
};
const enderFun = function () {
  clearInterval(intervalId);
};

platBtn.addEventListener("click", starterFun);
stopBtn.addEventListener("click", enderFun);
