const WCCToken = artifacts.require('WCCToken');

module.exports = function (deployer) {
  deployer.deploy(WCCToken, 10000000000);
};
