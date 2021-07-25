import SHA256 from "crypto-js/sha256";

class Block {
  constructor(
    private index: number,
    private timestamp: number,
    private data: any,
    private precedingHash: string = " "
  ) {}
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
