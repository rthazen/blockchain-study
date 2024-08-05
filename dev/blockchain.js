function Blockchain() {
  this.chain = [];
  this.pendingTransactions = [];
}

// if wanted to build as a class that is fine, but it's pretty much just a constructor function with syntactic sugar on top
// class Blockchain {
//     constructor() {
//         this.chain = [];
//         this.newTransactions = [];
//     }
// }

Blockchain.prototype.createNewBlock = function (
  nonce,
  previousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.pendingTransactions,
    nonce: nonce, // proof of work, a number
    hash: hash,
    previousBlockHash: previousBlockHash,
  };

  this.pendingTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
};

Blockchain.prototype.getLastBlock = function () {
  return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = function (
  amount,
  sender,
  recipient
) {
  const newTransaction = {
    amount: amount,
    sender: sender,
    recipient: recipient,
  };

  this.pendingTransactions.push(newTransaction);

  return this.getLastBlock()["index"] + 1;
};

module.exports = Blockchain;
