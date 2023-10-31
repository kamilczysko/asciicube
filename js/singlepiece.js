
import { Quaternion } from "./quaternion.js";
import { Q } from "./quat.js";

export class SinglePiece {

    constructor(id, position, data, visibleWalls) {
        this.width = data.width;
        this.height = data.width;
        this.distanceFromScreen = data.distance;

        this.addToScreen = data.save;

        this.position = { x: position.x, y: position.y, z: position.z }

        this.axisRotations = { x: 0.0, y: 0.0, z: 0.0 }

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
        
        this.cox = this.rotQ.getX();
        this.coy = this.rotQ.getY();
        this.coz = this.rotQ.getZ();
        this.cow = 1;
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, char) {

        this.currentOrientation = new Q(cx, cy, cz, 1);
        const rotationX = Q.rotateX(rotX).normalize();
        const rotationY = Q.rotateY(rotY).normalize();
        const rotationZ = Q.rotateZ(rotZ).normalize();

        const totalRot = rotationZ.mul(rotationY).mul(rotationX).normalize();

        // this.rotQ.setX(this.cox);
        // this.rotQ.setY(this.coy);
        // this.rotQ.setZ(this.coz);
        // this.rotQ.setW(this.cow);

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
                    // this.makeRot(this.position.x, b, c, char);
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
                    // this.makeRot(this.position.x + (2 * this.height), b, c, char);
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
                    // this.makeRot(a, this.position.y, c, char);

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
                    // this.makeRot(a, this.position.y + (2 * this.height), c, char);

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
                    // this.makeRot(a, b, this.position.z, char);

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
                    // this.makeRot(a, b, this.position.z + (2 * this.height), char);
                }
            }
        }
    }

    async rotatePiece(axis = "z", direction = 1) {
        if (this.isRotating) { return; }
        switch (axis) {
            case "z":
                if(this.axisRotations.z ==  2*Math.PI) {
                    this.axisRotations.z = 0
                }
                this.axisRotations.z += Math.PI / 2
                // this.coz += 1 * direction;
                this.rotQ = (this.rotQ).mul(Q.rotateZ(this.axisRotations.z))
                
                break;
            case "x":
                if(this.axisRotations.x ==  2*Math.PI) {
                    this.axisRotations.x = 0;
                }
                this.axisRotations.x += Math.PI / 2
                // this.cow += 1 * direction;
                // this.cox += 1 * direction;
                this.rotQ = (this.rotQ).mul(Q.rotateX(this.axisRotations.x))

                break;
            case "y":
                if(this.axisRotations.y ==  2*Math.PI) {
                    this.axisRotations.y = 0
                }
                this.axisRotations.y += Math.PI / 2
                // this.coy += 1 * direction;
                this.rotQ = (this.rotQ).mul(Q.rotateY(this.axisRotations.y))

                break;
        }
        this.updateOrientation(axis, direction);
    }

    setI(i){
        this.cox += 0.1;
    }
    setJ(j){
        this.coy += 0.1;
    }
    setK(k){
        this.coz += 0.1;
    }
    setW(w){
        this.cow += 0.1;
    }

    getOrientation() {
        console.log(this.orientation[0])
        console.log(this.orientation[1])
        console.log(this.orientation[2])
        // this.updateOrientation(axis, direction);    
    }

    updateOrientation(axis, direction) {
        let res = null;
        switch (axis) {
            case "x":
                res = this.dot(this.rotateXMatrix(direction), this.orientation);
                break;
            case "y":
                res = this.dot(this.rotateYMatrix(direction), this.orientation);
                break;
            case "z":
                res = this.dot(this.rotateZMatrix(direction), this.orientation);
                break;
        }
        this.orientation = res
        console.log(this.orientation[0])
        console.log(this.orientation[1])
        console.log(this.orientation[2])
        console.log("++++")
    }

    rotateXMatrix(direction = 1) {
        const angle = Math.PI / 2 * direction
        return [
            [1, 0, 0],
            [0, Math.cos(angle), - Math.sin(angle)],
            [0, Math.sin(angle), Math.cos(angle)]
        ]
    }

    rotateYMatrix(direction = 1) {
        const angle = Math.PI / 2 * direction;
        return [
            [Math.cos(angle), 0, Math.sin(angle)],
            [0, 1, 0],
            [-Math.sin(angle), 0, Math.cos(angle)]
        ]
    }

    rotateZMatrix(direction = 1) {
        const angle = Math.PI / 2 * direction;
        return [
            [Math.cos(angle), -Math.sin(angle), 0],
            [Math.sin(angle), Math.cos(angle), 0],
            [0, 0, 1]
        ]
    }

    dot(mat1, mat2) {
        const result = [];
        for (let i = 0; i < 3; i++) {
            result[i] = [];
            for (let j = 0; j < 3; j++) {
                result[i][j] = 0;
                for (let k = 0; k < 3; k++) {
                    result[i][j] += parseInt(Math.round(mat1[i][k] * mat2[k][j]));
                }
            }
        }
        return result;
    }

} 