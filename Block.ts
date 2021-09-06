import SHA256 from "crypto-js/sha256";

export class Block {
  constructor(
    private index: number,
    private timestamp: string,
    private data: string,
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
