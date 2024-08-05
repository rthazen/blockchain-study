const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const previousBlockHash = "iuqghfiuqehiedh813y913kjkjnk";

const currentBlockData = [
  {
    amount: 10,
    sender: "alexuqhfuiqehfhq133nkj",
    recipient: "jennqiufijqhe173jhdsjk",
  },
  {
    amount: 30,
    sender: "tomuqhfuiqehfhq133nkj",
    recipient: "kelqiufijqhe173jhdsjk",
  },
  {
    amount: 200,
    sender: "reeduqhfuiqehfhq133nkj",
    recipient: "dyomqiufijqhe173jhdsjk",
  },
];

// const nonce = 100;

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

// console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 25729));

// bitcoin.createNewBlock(2389, "IUQHIUERH887", "HQEFIH82138374");
// bitcoin.createNewBlock(3123, 'HWEFJH8734982', 'JWHFI83981');
// bitcoin.createNewBlock(8786, 'DHJFJHFGW645625', 'ADHFGAJ364523764');

// bitcoin.createNewTransaction(
//   100,
//   "alexfw9eq87fw98fuhqhi",
//   "jennusvief9q74yr387r"
// );

// bitcoin.createNewBlock(3123, "HWEFJH8734982", "JWHFI83981");

// bitcoin.createNewTransaction(
//   50,
//   "alexfw9eq87fw98fuhqhi",
//   "jennusvief9q74yr387r"
// );
// bitcoin.createNewTransaction(
//   300,
//   "alexfw9eq87fw98fuhqhi",
//   "jennusvief9q74yr387r"
// );
// bitcoin.createNewTransaction(
//   2000,
//   "alexfw9eq87fw98fuhqhi",
//   "jennusvief9q74yr387r"
// );

// bitcoin.createNewBlock(8786, "DHJFJHFGW645625", "ADHFGAJ364523764");

console.log(bitcoin);
