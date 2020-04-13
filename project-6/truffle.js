
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "INSSERT KEY HERE";
//
// const fs = require('fs');
const mnemonic = "Insert menmonic here";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
        network_id: 3,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },

}