class PCG32 {
    constructor(seed = Date.now()) {
        // Ensure seed is a 64-bit integer split into two 32-bit parts
        this.state = BigInt(seed) & 0xFFFFFFFFFFFFFFFFn;
        this.inc = 0x5851F42D4C957F2Dn; // Default stream
    }

    // Generate next 32-bit unsigned integer
    nextUInt32() {
        let oldState = this.state;
        // Advance internal state
        this.state = oldState * 6364136223846793005n + (this.inc | 1n);
        // Calculate output function (XSH RR)
        let xorshifted = Number(((oldState >> 18n) ^ oldState) >> 27n) & 0xFFFFFFFF;
        let rot = Number(oldState >> 59n) & 31;
        return ((xorshifted >>> rot) | (xorshifted << ((-rot) & 31))) >>> 0;
    }

    // Return float in [0, 1)
    nextNumber(min = 0, max = 1) {
        const fraction = this.nextUInt32() / 0x100000000;
        return min + fraction * (max - min);
    }

    // Return integer in [min, max]
    nextInteger(min, max) {
        if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
            throw new Error("Invalid integer range");
        }
        return Math.floor(this.nextNumber(min, max + 1));
    }
}
