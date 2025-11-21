class PCGRandom {
  constructor(seed) {
    this.state = BigInt(seed) || 0n;
    this.inc = 0x5851f42dn;
  }

  nextUint32() {
    this.state = this.state * 6364136223846793005n + this.inc;
    let xorshifted = Number(((this.state >> 18n) ^ this.state) >> 27n) & 0xffffffff;
    let rot = Number(this.state >> 59n);
    return (xorshifted >> rot) | (xorshifted << ((-rot) & 31));
  }

  nextFloat() {
    return this.nextUint32() / 0xffffffff;
  }

  nextInt(min, max) {
    return min + Math.floor(this.nextFloat() * (max - min + 1));
  }
}
