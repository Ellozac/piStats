function getTemps() {
  fetch("/temps", {
    method: "POST"
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
}
setInterval(getTemps(), 3000);
