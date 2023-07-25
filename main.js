const left = document.querySelector(".left");
const right = document.querySelector(".right");
const centr = document.querySelector(".centr");
const lists = document.getElementsByClassName("list");
const btn = document.querySelector(".btn");

function init() {
  for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
      let select = e.target;

      right.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      right.addEventListener("drop", function (e) {
        right.appendChild(select);
        select = null;
      });
      left.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      left.addEventListener("drop", function (e) {
        left.appendChild(select);
        select = null;
      });
      centr.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      centr.addEventListener("drop", function (e) {
        centr.appendChild(select);
        select = null;
      });
    });
  }
}

init();
