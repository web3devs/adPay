const chalk = require('chalk')
const getWeb3 = require('../utils/getWeb3');
const web3 = require('web3');
let abi = require('../abis/abi.js');
let address = require('../addresses/address');
let contract;

exports.get_web3 = async function () {
getWeb3
  .then(results => {
    console.log(chalk.blue("*** Got web3 ***"));
    return results;
  })
  .catch(error => {
    console.log(chalk.red("*** Web3 not found ***"));
    return error;
  })
}

exports.get_balance = async function (req, res) {
  getWeb3
  .then( results => {
    // contract = results.web3.eth.contract(abi).at(address);
    contract = results.eth.contract(abi.abi).at(address.address);
    console.log(contract.getBalance());
    res.status(results.status >= 100 && results.status < 600 ? err.code : 500)
      .send(contract.getBalance());
  })
  .catch( error => {
    console.log(chalk.white("oops in get_balance"));
    console.log(error);
    res.status(error.status >= 100 && error.status < 600 ? err.code : 500)
      .send(JSON.stringify(error));
  })
}
