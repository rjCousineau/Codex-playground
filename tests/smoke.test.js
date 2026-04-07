const { greet } = require("../scripts/hello");

if (greet("RJ") !== "Hello, RJ!") {
  throw new Error("Smoke test failed");
}

console.log("Smoke test passed");
