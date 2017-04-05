const raspi = require("raspi");
const gpio = require("raspi-gpio");

console.log("STARTED");

raspi.init(() => {
  console.log("P1-3");
  const input = new gpio.DigitalInput("P1-3");
  console.log("P1-5");
  const output = new gpio.DigitalOutput("P1-5");
  let data = input.read();
  console.log(`DATA=${data}`);
  output.write(data);
  console.log("OUTPUT");
});

console.log("ENDED");
