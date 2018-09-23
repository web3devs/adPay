const chalk = require('chalk')
const getWeb3 = require('../utils/getWeb3');
// const web3 = require('web3');
const Tx = require('ethereumjs-tx');
const credentials = require('../credentials');
let abi = require('../abis/abi.js');
let address = require('../addresses/address');
let contract;
let web3;

getWeb3
.then(results => {
  console.log(chalk.blue("*** Got web3 ***"));
  web3 = results;
})
.catch(error => {
  console.log(chalk.red("*** Web3 not found ***"));
  return error;
})


exports.get_balance = async function (req, res) {
    // contract = results.web3.eth.contract(abi).at(address);
    contract = new web3.eth.Contract(abi.abi, address.address);
    // console.log(chalk.white("methods>> "), contract.methods);
    contract.methods.getBalance().call()
    .then(response => {
      console.log( chalk.white( "getBalance" ));
      console.log('response', response);
      res.send( response );
    })
    // .then(res.send("success!"))
    // .then(res.status(results.status >= 100 && results.status < 600 ? err.code : 500))
    // .send(JSON.stringify(contract.methods.getBalance()))
    .catch(error => res.status(results.status >= 100 && results.status < 600 ? err.code : 500));
    // res.status(results.status >= 100 && results.status < 600 ? err.code : 500);

  // .catch( error => {
  //   console.log(chalk.white("oops in get_balance"));
  //   console.log(error);
  //   res.status(error.status >= 100 && error.status < 600 ? err.code : 500)
  //     .send(JSON.stringify(error));
  // })
}

exports.pay = async function (req, res) {
    contract = new web3.eth.Contract(abi.abi, address.address);
    console.log(req.body.address1);
    // console.log(req.body.address2);
    let address1 = req.body.address1;
    // let address2 = req.body.address2;
    address1 = address1.split('x');
    // address2 = address2.split('x');
    console.log("address1[1]", address1[1]);
    // console.log("address2[1]", address2[1]);
    address1 = address1[1];
    // address2 = address2[1];
    // hard code service fee address
    let address2 ="e8bF424E047372d249d0826c5567655ba3B72f18";

    // vv sendSignedTransaction vv
    let privateKey = credentials.private_key;
    let nonce = await web3.eth.getTransactionCount('0xe8bF424E047372d249d0826c5567655ba3B72f18')
    console.log("nonce: ", nonce);
    nonce = web3.utils.toHex(nonce);
    console.log("nonce: ", nonce);

    let rawTx = {
      nonce: nonce,
      gasPrice: '0x12a05f200',
      gasLimit: '0x47b760',
      to: '0xc69641aaFA3E75b20fF022f42027FA52135d77E3',
      value: '0x00',
      data: `0xbd0af85d000000000000000000000000${address1}000000000000000000000000${address2}`
    }

    let tx = new Tx(rawTx);
    tx.sign(privateKey);

    let serializedTx = tx.serialize();

    console.log("*** sendSignedTransaction ***");
    console.log(serializedTx.toString('hex'));
    // 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

    // console.log(getWeb3);
    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    .on('receipt', console.log);

    // see eth.getTransactionReceipt() for details
    // ^^ sendSignedTransaction ^^
    // res.status(results.status >= 100 && results.status < 600 ? err.code : 500)
    res.send(req.body);

  // .catch( error => {
  //   console.log(chalk.white("oops in pay"));
  //   console.log(error);
  //   res.status(error.status >= 100 && error.status < 600 ? err.code : 500)
  //     .send(JSON.stringify(error));
  // })
}
