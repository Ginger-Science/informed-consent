import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "DesciCore" using the deployer account and
 * constructor arguments set to the DSCI token address and Vendor contract address.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployDesciCore: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Get the deployed DSCI token contract
  const dsciToken = await hre.ethers.getContract<Contract>("DsciToken", deployer);
  const dsciTokenAddress = await dsciToken.getAddress();

  // Get the deployed Vendor contract
  const vendorContract = await hre.ethers.getContract<Contract>("Vendor", deployer);
  const vendorContractAddress = await vendorContract.getAddress();

  await deploy("DesciCore", {
    from: deployer,
    args: [dsciTokenAddress, vendorContractAddress], // Pass the DSCI token address and Vendor contract address to the constructor
    log: true,
    autoMine: true, // Speeds up the deployment process on local networks
  });

  const desciCore = await hre.ethers.getContract<Contract>("DesciCore", deployer);
  const desciCoreAddress = await desciCore.getAddress();

  console.log("DesciCore contract deployed to:", desciCoreAddress);
};

export default deployDesciCore;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags DesciCore
deployDesciCore.tags = ["DesciCore"];
