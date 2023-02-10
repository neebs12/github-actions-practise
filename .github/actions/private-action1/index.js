const core = require("@actions/core");

try {
  const inputVariable = core.getInput("my-variable");
  console.log({ privateMessage: inputVariable });
} catch (error) {
  core.setFailed(error.message);
}
