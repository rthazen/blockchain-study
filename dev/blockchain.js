function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

// if wanted to build as a class that is fine, but it's pretty much just a constructor function with syntactic sugar on top
// class Blockchain {
//     constructor() {
//         this.chain = [];
//         this.newTransactions = [];
//     }
// }

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce, // proof of work, a number
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}