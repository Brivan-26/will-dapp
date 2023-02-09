# Will Dapp

We all know the problems that may occur when someone dies and left behind a *fortune*, and the conflicts that may arise between the inheritors about *who takes how much*. This Decentralized application is meant to solve that.

## Dapp logic

- The owner(the one who's going to die and will let behind a fortune) locks his fortune(amount of **ETH**) in the smart contract.
- The owner adds the *inheritors addresses* with their *coressponding fortune values* that will take after his death.
- After the death of the owner, the smart contract will **automatically** send the inheritors' addresses the fortune value specified by the owner, and then the contract will be **self-destroyed**

### The owner's death detection

- The smart contract is watching for **a ping** from the owner once at least in a week
  - The ping may be achieved via either interacting with the contract normally(e.g adding inheritor, adding fortune...etc) or calling a specific function(*ping()*) 
- After the real owner's death, one of the inheritors invokes a specific function called **callForSplitFortune()**, if the last ping was made later than a week the contract will invoke an **internally function** that takes care of dividing fortune among inheritors based on the rules specified by the owner, else the inheritors need to wait for a week to be passed

### Usefull commands

- `npm install`: Install all the necessary dependencies
- `npx hardhat compile`: Compile the smart contract
- `npx hardhat test`: Launch the automated unit tests
- `npx hardhat node`: Start a local node
- `npx hardhat run --network localhost scripts/deploy.js`: Deploy the smart contract to the local node(a local node must be started before)