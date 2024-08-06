# blockchain-study

Building a Blockchain Prototype:
https://www.udemy.com/course/build-a-blockchain-in-javascript

src code: https://github.com/erictraub/Learn-Blockchain-By-Building-Your-Own-In-JavaScript

What is Blockchain?

- an immutable, distributed ledger
  -ledger = a collection of financial accounts or transactions
  -immutable = the ledger cannot be changed, ever
  -distributed = not controlled by a single entity

need to run `npm run node_1` or whichever node you want to run to start up the server. node_1 will be on port 3001.

- http://localhost:3001/blockchain to view the whole blockchain
- http://localhost:3001/mine to mine the pending transactions and give a reward
- http://localhost:3003/block-explorer to see the ui and use the search, like (http://localhost:3001/address/8c6bb86f46844883b04443024f0e6b70)
- hit http://localhost:3005/consensus if the blockchains are out of sink

- created a Postman collection of the /transaction/broadcast and /register-and-broadcast-node to get the nodes connected

- improvements: error handling, validate transactions and make sure sender has enough, expand block data (user data?, whatever you want)
