"use strict";
document.addEventListener("DOMContentLoaded", init);

const url = "https://kea-alt-del.dk/kata-distortion/";

function init() {
  fetchData();
  fetchSVG();
}

function fetchSVG() {
  fetch("svg/gauge.svg")
    .then((e) => e.text())
    .then((e) => {
      document.querySelector("#gauge").innerHTML = e;
    });
}

function fetchData() {
  fetch(url, {
    method: "get",
  })
    .then((e) => e.json())
    .then((e) => {
      console.log(e);
      showData(e);
      setTimeout(fetchData, 5000);
    });
}

function showData(data) {
  /* const inQueue = data.inQueue;
  document
    .querySelector("#gauge")
    .style.setProperty("45deg", inQueue * 6 + "deg");
  const bar = document.createElement("div");
  const pTag = document.createElement("p");

  pTag.textContent = inQueue;

  bar.appendChild(pTag);

  bar.className = "bar";
  bar.style.width = inQueue * 8 + "px";

  if (inQueue < 5) {
    bar.style.background = "limegreen";
  } else if (inQueue > 5 && inQueue < 15) {
    bar.style.background = "yellow";
    pTag.style.color = "black";
  } else {
    bar.style.background = "red";
  } */

  // fetch real-time numbers to be displayed on page
  document.querySelector(
    "#info p+p"
  ).textContent = `Queue updated at: ${data.loggedAt.substring(11)}`;

  document.querySelector(
    "#info p"
  ).textContent = `Currently in queue: ${data.inQueue}`;

  document.querySelectorAll("#gauge > g:nth-child(1) text").forEach((t) => {
    if (t.textContent === inQueue) {
      console.log(t.textContent);

      if (inQueue < 5) {
        t.style.fill = "limegreen";
      } else if (inQueue > 5 && inQueue < 15) {
        t.style.fill = "yellow";
      } else {
        t.style.fill = "red";
      }
    } else {
      t.style.fill = "white";
    }
  });
}
