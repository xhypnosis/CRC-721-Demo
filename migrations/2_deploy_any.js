const MyToken = artifacts.require("MyToken");

module.exports = function(_deployer, network) {
  // Use deployer to state migration tasks.
  _deployer.deploy(MyToken)
};