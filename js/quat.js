export class Q {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    getX () {
        return this.x;
    }

    getY() {
        return this.y
    }

    getZ() {
        return this.z;
    }

    getW(){
        return this.w;
    }
    setX(x) {
        this.x = x;
    }

    setY(y) {
        this.y = y;
    }

    setZ(z) {
        this.z = z;
    }
    setW(w) {
        this.w = w;
    }

    normalize() {
        const magnitude = Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2);
        if (magnitude == 0) {
            return this;
        }
        return new Q(this.x / magnitude, this.y / magnitude, this.z / magnitude, this.w / magnitude)
    }

    mul(q) {
        const w = this.w * q.getW() - this.x * q.getX() - this.y * q.getY() - this.z * q.getZ();
        const x = this.w * q.getX() + this.x * q.getW() + this.y * q.getZ() - this.z * q.getY();
        const y = this.w * q.getY() - this.x * q.getZ() + this.y * q.getW() + this.z * q.getX();
        const z = this.w * q.getZ() + this.x * q.getY() - this.y * q.getX() + this.z * q.getW();
        return new Q(x, y, z, w);
    }

    static rotateX(angle) {
        return new Q(Math.sin(angle / 2), 0, 0, Math.cos(angle / 2));
    }

    static rotateY(angle) {
        return new Q(0, Math.sin(angle / 2), 0, Math.cos(angle / 2));
    }

    static rotateZ(angle) {
        return new Q(0, 0, Math.sin(angle / 2), Math.cos(angle / 2));
    }

    getInv() {
        return new Q(-this.x, -this.y, -this.z, this.w);
    }
}