const { ethers } = require("ethers");
const {
  abi: UniswapV3Factory,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");

const INFURA_URL_TESTNET = "YOUR_INFURA_API_KEY";

const address0 = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
const address1 = "0x059197f0D43e7E32faCa5a261d41Fb5dC6bE6986";
const factoryAddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET);

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  );

  const poolAddress = await factoryContract.getPool(address0, address1, 3000);
  console.log("poolAddress", poolAddress);
}

main();
