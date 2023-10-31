
import { Q } from "./quat.js";

export class SinglePiece {

    constructor(id, position, data, visibleWalls) {
        this.width = data.width;
        this.height = data.width;
        this.distanceFromScreen = data.distance;

        this.addToScreen = data.save;

        this.position = { x: position.x, y: position.y, z: position.z }

        //visible walls
        this.top = visibleWalls.top;
        this.bottom = visibleWalls.bottom
        this.left = visibleWalls.left
        this.right = visibleWalls.right
        this.front = visibleWalls.front
        this.back = visibleWalls.back

        this.currentOrientation = null;

        this.step = .3;
        this.isRotating = false;

        this.orientation = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
        this.counter = 0;
        this.rotXN = Q.rotateX(Math.PI/2)
        this.rotYN = Q.rotateX(Math.PI/2)
        this.rotZN = Q.rotateX(Math.PI/2)

        this.rotX = Q.rotateX(0)
        this.rotY = Q.rotateY(0)
        this.rotZ = Q.rotateZ(0)

        this.rotQ = this.rotX.mul(this.rotY).mul(this.rotZ)
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, char) {

        this.currentOrientation = new Q(cx, cy, cz, 1);
        const rotationX = Q.rotateX(rotX).normalize();
        const rotationY = Q.rotateY(rotY).normalize();
        const rotationZ = Q.rotateZ(rotZ).normalize();

        const totalRot = rotationZ.mul(rotationY).mul(rotationX).normalize();

        // const startQuat = totalRot.mul(this.currentOrientation).mul(totalRot.getInv())
        // const endQuat = totalRot.mul(this.rotQ).mul(this.currentOrientation).mul(totalRot.mul(this.rotQ).getInv())

        // let animationCounter = 0;
        // const animationFrames = setInterval(() => {
        //     animationCounter = animationCounter + 0.1;
        //     console.log(animationCounter)
        //     if(animationCounter >= 1) {
        //          clearInterval(animationFrames);
        //     }
        // }, 1000)

        this.currentOrientation = totalRot.mul(this.rotQ).mul(this.currentOrientation).mul(totalRot.mul(this.rotQ).getInv())

        const x = this.currentOrientation.x
        const y = this.currentOrientation.y
        const z = this.distanceFromScreen + this.currentOrientation.z
        const ooz = 1 / z;
        this.addToScreen(ooz, char, x, y, () => { });
    }

    draw(rotation) {
        if (this.left) {
            for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    let char = "+"
                    if ((b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.width) - 1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height)) - 1)) {
                        char = " "
                    }
                    this.calcWall(this.position.x, b, c, rotation.x, rotation.y, rotation.z, char);
                }
            }
        }
        if (this.right) {
            for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    let char = "*"
                    if ((c == this.position.z || parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.width) - 1)) ||
                        (parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height)) - 1)) {
                        char = " "
                    }
                    this.calcWall(this.position.x + (2 * this.height), b, c, rotation.x, rotation.y, rotation.z, char);
                }
            }
        }

        if (this.top) {
            for (let a = this.position.x; a <= this.position.x + (2 * this.width); a += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    let char = "^"
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width) - 1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height)) - 1)) {
                        char = " "
                    }
                    this.calcWall(a, this.position.y, c, rotation.x, rotation.y, rotation.z, char);
                }
            }
        }

        if (this.bottom) {
            for (let a = this.position.x; a <= this.position.x + (2 * this.width); a += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    let char = "@"
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width) - 1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height)) - 1)) {
                        char = " "
                    }
                    this.calcWall(a, this.position.y + (2 * this.height), c, rotation.x, rotation.y, rotation.z, char);
                }
            }
        }

        if (this.front) {
            for (let a = this.position.x; a <= this.position.x + (2 * this.width); a += this.step) {
                for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                    let char = "#"
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width) - 1)) ||
                        (b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height) - 1))) {
                        char = " "
                    }
                    this.calcWall(a, b, this.position.z, rotation.x, rotation.y, rotation.z, char);
                }
            }
        }

        if (this.back) {
            for (let a = this.position.x; a <= this.position.x + (2 * this.width); a += this.step) {
                for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                    let char = "?"
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width) - 1)) ||
                        (b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height) - 1))) {
                        char = " "
                    }
                    this.calcWall(a, b, this.position.z + (2 * this.height), rotation.x, rotation.y, rotation.z, char);
                }
            }
        }
    }

    async rotatePiece(axis = "z", direction = 1) {
        if (this.isRotating) { return; }
        switch (axis) {
            case "z":
                this.rotQ = Q.rotateZ(Math.PI/2).mul(this.rotQ)
                
                break;
            case "x":
                this.rotQ = Q.rotateX(Math.PI/2).mul(this.rotQ)

                break;
            case "y":
                this.rotQ = Q.rotateY(Math.PI/2).mul(this.rotQ)
                break;
        }
    }
} 