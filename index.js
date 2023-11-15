const express = require("express")
const { exec, spawn } = require("child_process");
const app = express();
var port = 80

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/temps", (req, res) => {
  let cpu
  const cpuProcess = spawn("cat", ["/sys/class/thermal/thermal_zone0/temp"]);

  cpuProcess.stdout.on("data", (data) => {
    cpu = parseInt(data.toString()) / 1000;
    console.log("CPU TEMP IS ", cpu)
  })

  // var stats = { gpu, cpu, containers };
  res.json(cpu);
});

process.argv.forEach(function(val, index, array) {
  if (val === "--port") {
    try {
      const re = /^\d*$/;
      if (re.test(array.at((index + 1)))) {
        port = Number(array.at((index + 1)));
        console.log("setting the port to ", port);
      } else { throw new TypeError("not a number") };
    } catch (e) {
      console.error(e, "ERROR OCCURED the --port was not set correctly --port <port>");
    };
  };
});





var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Website is here :) --> http://%s:%s", host, port);
});
