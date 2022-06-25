const { ethers } = require("ethers");
const {
  abi: UniswapV3Factory,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");

const INFURA_URL_TESTNET = "YOUR_INFURA_ENDPOINT_URL";

const address0 = "ADDRESS_OF_FIRST_TOKEN_IN_THE_POOL";
const address1 = "ADDRESS_OF_SECOND_TOKEN_IN_THE_POOL";
const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
const fee = 3000; // OPTIONS: 500, 3000 or 10000

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET);

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  );

  const poolAddress = await factoryContract.getPool(address0, address1, fee);
  console.log("poolAddress", poolAddress);
}

main();
