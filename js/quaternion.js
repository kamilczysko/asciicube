
export class Quaternion {
    constructor(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static fromAxisAngleX(angle) {
        const halfAngle = angle / 2;
        return new Quaternion(Math.cos(halfAngle), Math.sin(halfAngle), 0, 0);
    }

    static fromAxisAngleY(angle) {
        const halfAngle = angle / 2;
        return new Quaternion(Math.cos(halfAngle), 0, Math.sin(halfAngle), 0);
    }

    static fromAxisAngleZ(angle) {
        const halfAngle = angle / 2;
        return new Quaternion(Math.cos(halfAngle), 0, 0, Math.sin(halfAngle));
    }

    normalize() {
        const magnitude = Math.sqrt(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
        if (magnitude === 0) {
            return this;
        }
        return new Quaternion(this.w / magnitude, this.x / magnitude, this.y / magnitude, this.z / magnitude);
    }

    multiply(other) {
        const w = this.w * other.w - this.x * other.x - this.y * other.y - this.z * other.z;
        const x = this.w * other.x + this.x * other.w + this.y * other.z - this.z * other.y;
        const y = this.w * other.y - this.x * other.z + this.y * other.w + this.z * other.x;
        const z = this.w * other.z + this.x * other.y - this.y * other.x + this.z * other.w;
        return new Quaternion(w, x, y, z);
    }

    rotateVector(vector) {
        const qv = new Quaternion(0, vector.x, vector.y, vector.z);
        const conjugate = this.conjugate().normalize();
        const rotated = this.multiply(qv).multiply(conjugate);
        return { x: rotated.x, y: rotated.y, z: rotated.z };
    }

    conjugate() {
        return new Quaternion(this.w, -this.x, -this.y, -this.z);
    }
}