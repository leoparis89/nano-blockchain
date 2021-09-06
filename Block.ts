import SHA256 from "crypto-js/sha256";

export class Block {
  public hash: string;

  constructor(
    private index: number,
    private timestamp: string,
    private data: any,
    private precedingHash: string = " "
  ) {
    this.hash = this.computeHash();
  }
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
