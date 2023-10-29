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

        this.step = .3;
        this.isRotating = false;

        this.orientation = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    createRotationQuaternion(axis, angleInRadians) {
        var halfAngle = angleInRadians / 2;
        var sinHalfAngle = Math.sin(halfAngle);
        var cosHalfAngle = Math.cos(halfAngle);

        // Kwaternion reprezentujący obrót wokół osi
        var quaternion = {
            x: 0,
            y: 0,
            z: 0,
            w: 0
        };

        switch (axis) {
            case 'x':
                quaternion.x = sinHalfAngle;
                break;
            case 'y':
                quaternion.y = sinHalfAngle;
                break;
            case 'z':
                quaternion.z = sinHalfAngle;
                break;
        }

        quaternion.w = cosHalfAngle;
        return (quaternion);
    }

    // Funkcja do pomnożenia dwóch kwaternionów (składania obrotów)
    multiplyQuaternions(q1, q2) {
        var result = {};
        result.w = q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z;
        result.x = q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y;
        result.y = q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x;
        result.z = q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w;
        return result;
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, char) {
        let currentOrientation = { x: cx, y: cy, z: cz, w: 1 };
        let rx = this.createRotationQuaternion('x', rotX);
        let ry = this.createRotationQuaternion('y', rotY);
        let rz = this.createRotationQuaternion('z', rotZ);

        var newOrientation = this.multiplyQuaternions(rx, currentOrientation);
        newOrientation = this.multiplyQuaternions(ry, newOrientation);
        newOrientation = this.multiplyQuaternions(rz, newOrientation);

        const x = newOrientation.x
        const y = newOrientation.y
        const z = this.distanceFromScreen + newOrientation.z
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
                    // this.calcWall(this.position.x, b, c, rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(this.position.x, b, c, char);
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
                    // this.calcWall(this.position.x + (2 * this.height), b, c, rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(this.position.x + (2 * this.height), b, c, char);
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
                    // this.calcWall(a, this.position.y, c, rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(a, this.position.y, c, char);

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
                    // this.calcWall(a, this.position.y + (2 * this.height), c, rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(a, this.position.y + (2 * this.height), c, char);

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
                    // this.calcWall(a, b, this.position.z, rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(a, b, this.position.z, char);

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
                    // this.calcWall(a, b, this.position.z + (2 * this.height), rotation.x, rotation.y, rotation.z, char);
                    this.makeRot(a, b, this.position.z + (2 * this.height), char);
                }
            }
        }
    }

    async rotatePiece(axis = "z", direction = 1) {
        if (this.isRotating) { return; }
        switch (axis) {
            case "z":
                // this.axisRotations.z += Math.PI / 2 * direction;
                const zInterval = await setInterval(() => {
                    this.axisRotations.z += Math.PI / 10 * direction;
                    if (this.axisRotations.z % (Math.PI/2) == 0) {
                        this.isRotating = false;
                        clearInterval(zInterval);
                    }
                }, 100)
                break;
            case "x":
                // this.axisRotations.x += Math.PI / 2 * direction;
                const xInterval = await setInterval(() => {
                    this.axisRotations.x += Math.PI / 10 * direction;
                    if (this.axisRotations.x % (Math.PI/2) == 0) {
                        this.isRotating = false;
                        clearInterval(xInterval);
                    }
                }, 100)
                break;
            case "y":
                // this.axisRotations.y += Math.PI / 2 * direction;
                const yInterval = await setInterval(() => {
                    this.axisRotations.y += Math.PI / 10 * direction;
                    if (this.axisRotations.y % (Math.PI / 2) == 0) {
                        this.isRotating = false;
                        clearInterval(yInterval);
                    }
                }, 100)
                break;
        }
    }

    normalizeQuaternion(q) {
        const magnitude = Math.sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);
        
        if (magnitude === 0) {
          return { w: 1, x: 0, y: 0, z: 0 }; // Zapobiegamy dzieleniu przez zero
        }
        
        const invMagnitude = 1 / magnitude;
        return {
          w: q.w * invMagnitude,
          x: q.x * invMagnitude,
          y: q.y * invMagnitude,
          z: q.z * invMagnitude
        };
      }

    makeRot(cx, cy, cz, char) {
        let currentOrientation = { x: cx, y: cy, z: cz, w: 1 };

        let rxp = this.createRotationQuaternion('x', this.axisRotations.x);
        let ryp = this.createRotationQuaternion('y', this.axisRotations.y);
        let rzp = this.createRotationQuaternion('z', this.axisRotations.z);

        var newOrientation = this.multiplyQuaternions(rxp, currentOrientation);
        newOrientation = this.multiplyQuaternions(ryp, newOrientation);
        newOrientation = this.multiplyQuaternions(rzp, newOrientation);

        const x = newOrientation.x
        const y = newOrientation.y
        const z = this.distanceFromScreen + newOrientation.z
        const ooz = 1 / z;
        this.addToScreen(ooz, char, x, y, () => { });
    }

} 