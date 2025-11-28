if (document.documentElement.clientWidth < 480) {
  window.addEventListener(
    "scroll",
    function () {
      return setTimeout(main, 1000);
    },
    {
      once: true,
      passive: true,
    }
  );
} else {
  main();
}
function main() {
  $(document).ready(function () {
    $(".scroll").click(function (event) {
      event.preventDefault();
      var id = $(this).attr("href");
      var top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1200);
    });

    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      $(".timer div").css("padding-top", "7px");
    }
  });
}

const months = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre",
  ],
  monthMin = ["", "", "", "", "", "", "", "", "", "", "", ""],
  days = [
    "domenica",
    "lunedi",
    "martedì",
    "mercoledì",
    "giovedi",
    "venerdì",
    "sabato",
  ],
  daysMin = ["", "", "", "", "", "", ""],
  seasons = ["inverno", "primavera", "estate", "autunno"];
function postDate(
  daysName,
  daysMinName,
  monthsName,
  monthsMinName,
  seasonsName
) {
  const _counterLength = 60;
  for (let counter = 0; counter < _counterLength; counter++) {
    innerDate(counter, "date-");
    innerDate(counter, "date");
  }
  function innerDate(counter, dateType) {
    let newCounter;
    dateType === "date-" ? (newCounter = -counter) : (newCounter = counter);
    const _msInDay = 86400000,
      _localDate = new Date(Date.now() + newCounter * _msInDay),
      _day = _localDate.getDate(),
      _month = _localDate.getMonth() + 1,
      _year = _localDate.getFullYear();
    const dayDefault = addZero(_day),
      monthDefault = addZero(_month),
      defaultDate = dayDefault + "." + monthDefault + "." + _year;
    const dateClass = dateType + counter,
      nodeList = document.querySelectorAll("." + dateClass);
    for (let i = 0; i < nodeList.length; i++)
      nodeList[i].innerHTML = defaultDate;
  }
  function addZero(numb) {
    return numb < 10 ? "0" + numb : numb;
  }
}
if (document.body.classList.contains("ev-date")) {
  document.addEventListener("DOMContentLoaded", function () {
    postDate(days, daysMin, months, monthMin, seasons);
  });
}

var time;
var intr;
if (localStorage.timeLeft) {
  if (localStorage.timeLeft == 0 || localStorage.timeLeft < 0) {
    localStorage.timeLeft = 900;
    time = localStorage.timeLeft;
    start_timer();
  } else {
    time = localStorage.timeLeft;
    start_timer();
  }
} else {
  time = 900;
  start_timer();
}

function start_timer() {
  if (time == 0 || time < 0) {
    return;
  }
  intr = setInterval(tick, 1000);
}
function tick() {
  time = time - 1;
  localStorage.setItem("timeLeft", time);
  if (time == 0 || time < 0) {
    clearInterval(intr);
  }
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  mins = mins >= 10 ? mins : "0" + mins;
  secs = secs >= 10 ? secs : "0" + secs;
  let timerElem = document.querySelector(".timer");

  let minutes = document.querySelector(".minutes");
  let secundes = document.querySelector(".seconds");

  minutes.innerHTML = mins;
  secundes.innerHTML = secs;
}
