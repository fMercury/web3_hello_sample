let Hello = artifacts.require("./hello.sol");

module.exports = function (deployer) {
    deployer.deploy(Hello);
};
