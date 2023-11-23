function getTemps() {
  console.log('Fetching CPU temperature...');
  var cputemp = document.getElementById("cputemp");
  var gputemp = document.getElementById("gputemp");
  fetch("/temps", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Received CPU temperature:', data.cpu);
      cputemp.innerHTML = `${data.cpu}°`;
      // gputemp.innerHTML = `${data.gpu}°`;
    })
    .catch(error => {
      console.error('Error fetching CPU temperature:', error);
    });
}
setInterval(getTemps, 2000);
