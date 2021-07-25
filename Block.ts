import SHA256 from "crypto-js/sha256";

export class Block {
  constructor(
    private index: number,
    private timestamp: number,
    private data: any,
    private precedingHash: string = " ",
    public hash: any
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
