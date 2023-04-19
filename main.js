import webpush from "web-push";

const keys = webpush.generateVAPIDKeys();

console.log(keys);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js");
}

//
const sBtn = document.getElementById("subscribe-btn");

sBtn.addEventListener("click", () => {
  console.log("clicked & subscribed");
});
