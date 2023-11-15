function getTemps() {
  fetch("/temps", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
}

