"use strict";
document.addEventListener("DOMContentLoaded", fetchData);

const url = "https://kea-alt-del.dk/kata-distortion/";

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
  // fetch real-time numbers to be displayed on page
  document.querySelector(
    "#info p"
  ).textContent = `Queue updated at: ${data.loggedAt.substring(11)}`;

  document.querySelector("#info p+p").textContent = `Currently in queue: `;

  document.querySelector("#chart p").textContent = `${data.inQueue}`;
}
