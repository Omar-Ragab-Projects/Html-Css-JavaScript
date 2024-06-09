let skillsSection = document.querySelector("#skills");
let spanProgress = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    spanProgress.forEach((span) => {
      span.style.width = span.dataset.value;
    });
  }
});

let statsSection = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".box .number");
let start = true;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 400) {
    if (start) {
      statsSpan.forEach((span) => {
        let scroller = setInterval(() => {
          span.textContent++;
          if (span.textContent >= +span.dataset.value) {
            clearInterval(scroller);
          }
        }, 2000 / span.dataset.value);
      });
    }
    start = false;
  }
});

let timerUnits = document.querySelectorAll(".unit span:first-child");
console.log(timerUnits[1]);
let goalDate = new Date("Dec 30, 2024 23:59:59").getTime();
let count = setInterval(() => {
  let currentDate = new Date().getTime();
  let deffDate = goalDate - currentDate;
  timerUnits[0].textContent = Math.floor(deffDate / (1000 * 60 * 60 * 24));
  timerUnits[1].textContent = Math.floor(
    (deffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  timerUnits[2].textContent = Math.floor(
    (deffDate % (1000 * 60 * 60)) / (1000 * 60)
  );
  timerUnits[3].textContent = Math.floor((deffDate % (1000 * 60)) / 1000);
}, 1000);
