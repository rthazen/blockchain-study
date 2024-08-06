const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1722920358130,
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1722920365032,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1722920367908,
      transactions: [
        {
          amount: 1.25,
          sender: "00",
          recipient: "6f5815dc29e94475b5cbb49942c77429",
          transactionId: "83d4517901ea47cea502f449fe731503",
        },
      ],
      nonce: 45199,
      hash: "0000034238d9182f0f6bc57ebd7209ed02c481b97f12b71ff34148f40030fe0a",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1722920369876,
      transactions: [
        {
          amount: 1.25,
          sender: "00",
          recipient: "6f5815dc29e94475b5cbb49942c77429",
          transactionId: "f07ef844ee064030a7597bf1ca689cc4",
        },
      ],
      nonce: 14330,
      hash: "000032c497bac1fbc2a773770d965ffe3649e066400a74feafc1a398ed4e4fb2",
      previousBlockHash:
        "0000034238d9182f0f6bc57ebd7209ed02c481b97f12b71ff34148f40030fe0a",
    },
    {
      index: 5,
      timestamp: 1722920371704,
      transactions: [
        {
          amount: 1.25,
          sender: "00",
          recipient: "6f5815dc29e94475b5cbb49942c77429",
          transactionId: "e0e923555d904af2b806943d69ccc4eb",
        },
      ],
      nonce: 95772,
      hash: "0000a3dbd4a33e874d5d29f32c699c64cac2a470626e17daa1fb12abb467328c",
      previousBlockHash:
        "000032c497bac1fbc2a773770d965ffe3649e066400a74feafc1a398ed4e4fb2",
    },
  ],
  pendingTransactions: [
    {
      amount: 1.25,
      sender: "00",
      recipient: "6f5815dc29e94475b5cbb49942c77429",
      transactionId: "50e10b85bb254854bf488b87d6c92de8",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
