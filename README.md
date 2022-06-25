# find-your-pool
A script to find Uniswap pool for any pair on testnet

## How to install ?
- Clone the repository with `git`:
  - `git clone https://github.com/mishra811/find-your-pool.git`
- Install all dependency with either `yarn` or `npm`.
  - `yarn` or `npm install`

## How to use ? 
Inside the `findpool.js` file change these variables according to your preference
- INFURA_URL_TESTNET => Add your infura endpoint URL for the ETH testnet your pool was deployed to
- address0 => address of first token contract in the pair
- address1 => address of the second token contract in the pair
- fee => For the same pair of tokens there can be three different pools with fee = 500, fee = 3000 or fee = 10000. You can try any of these three options

## How to run ?
After changing the variables according to your preference run `node findpool.js` 

