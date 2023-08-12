const hre = require("hardhat");

const CONTRACT_ADDR = "0x3532C5A3E7b515A7c9E9A2954B5042Ca5Add254A"; 

async function main() {
  try {
    const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

    console.log(await contract.x());

  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
  }
}

main();
