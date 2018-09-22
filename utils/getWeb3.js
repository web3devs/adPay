// import Web3 from 'web3'

const Web3 = require('web3');

const getWeb3 = new Promise(resolve => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/521e928b4c634b9b9d9ce68777cde7f5'
    )
  );
  resolve(web3);
});

module.exports = getWeb3;
