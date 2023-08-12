const hre = require("hardhat");

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("Contract");

    const contract = await Contract.deploy();

    await contract.waitForDeployment();

    console.log(
      `Contract was deployed to ${contract.target}`
    );
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
  }
}

main();
