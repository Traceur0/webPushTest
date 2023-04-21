import webpush from "web-push";

const keys = webpush.generateVAPIDKeys();

console.log(keys);

// service_worker 등록 - navigator에서의 지원여부 확인
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service_worker.js");
}

//
const sBtn = document.getElementById("subscribe-btn");

sBtn.addEventListener("click", () => {
  console.log("clicked & subscribed");
});
