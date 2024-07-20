/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

// Read environment variables (assuming they are set securely)
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const sepolia_private_key ='fbe0f3222758ed49bb216b68673f92ecd520c8ff2dcb336293643ae10a786186'

// Error handling (example)
if (!API_URL || !PRIVATE_KEY) {
   throw new Error("Missing required environment variables: API_URL or PRIVATE_KEY");
}

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: API_URL,
         accounts: [`0x${sepolia_private_key}`], // Ensure the private key is prefixed with "0x"
         gas: 6000000, // Typical gas limit for contract deployment
         gasPrice: 8000000000, // 8 gwei gas price
      }
   },
}
