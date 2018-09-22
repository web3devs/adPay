const chalk = require('chalk')
const getWeb3 = require('../utils/getWeb3');
let abi = require('../abis/abi.js');
let address = require('../addresses/address');

exports.get_web3 = async function () {
getWeb3
  .then(results => {
  // console.log('results: ', results);
    // this.setState({
    //   web3: results.web3,
    //   ETJ: results.web3.eth.contract(ETJAbi).at(ETJAddress)
    // })
    console.log(chalk.blue("*** Got web3 ***"));
    return results;
  })
  .catch(error => {
    // console.log(error)
    // this.setState({
    //   web3error: error.error
    // })
    console.log(chalk.red("*** Web3 not found ***"));
    return error;
  })
}
