const { expect } = require("chai");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappcord", function () {
  let deployer, user;
  let dappcord;
  beforeEach(async () => {
    [deployer, user] = await ethers.getSigners();

    const Dappcord = await ethers.getContractFactory("Dappcord");
    dappcord = await Dappcord.deploy("Dappcord", "DC");
  });

  describe("Deplopyment", function () {
    it("Sets the name", async () => {
      let result = await dappcord.name();
      expect(result).to.equal("Dappcord");
    });

    it("Sets the symbol", async () => {
      let result = await dappcord.symbol();
      expect(result).to.equal("DC");
    });

    it("Sets the owner", async () => {
      let result = await dappcord.owner();
      expect(result).to.equal(deployer.address);
    });
  });
});
