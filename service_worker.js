self.addEventListener("push", (event) => {
  const title = event.data.text();

  event.waitUntil(self.ServiceWorkerRegistration.showNotification(title));
});
