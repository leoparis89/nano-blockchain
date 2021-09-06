import { Block } from "./Block";

export class CryptoBlockchain {
  private blockchain: Block[];

  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  startGenesisBlock() {
    return new Block(0, "01/01/2020", "Initial Block in the Chain", "0");
  }
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock: Block) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.hash = newBlock.computeHash();
    this.blockchain.push(newBlock);
  }
}
