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

    calcX(x, y, z, a, b, c) {
        return (-((x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.z) - Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) + y * (Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + z * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.cos(a) - (x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + y * (-Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) + Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) - z * Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.sin(a)) * Math.sin(b) + (x * Math.cos(this.axisRotations.y) * Math.cos(this.axisRotations.z) - y * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.y) + z * Math.sin(this.axisRotations.y)) * Math.cos(b)) * Math.cos(c) + ((x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.z) - Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) + y * (Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + z * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.sin(a) + (x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + y * (-Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) + Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) - z * Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.cos(a)) * Math.sin(c);
    }

    calcY(x, y, z, a, b, c) {
        return -(-((x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.z) - Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) + y * (Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + z * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.cos(a) - (x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + y * (-Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) + Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) - z * Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.sin(a)) * Math.sin(b) + (x * Math.cos(this.axisRotations.y) * Math.cos(this.axisRotations.z) - y * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.y) + z * Math.sin(this.axisRotations.y)) * Math.cos(b)) * Math.sin(c) + ((x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.z) - Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) + y * (Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + z * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.sin(a) + (x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + y * (-Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) + Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) - z * Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.cos(a)) * Math.cos(c);
    }

    calcZ(x, y, z, a, b, c) {
        return ((x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.z) - Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) + y * (Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + z * Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.cos(a) - (x * (Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.cos(this.axisRotations.z) + Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.x)) + y * (-Math.sin(this.axisRotations.x) * Math.sin(this.axisRotations.y) * Math.sin(this.axisRotations.z) + Math.cos(this.axisRotations.x) * Math.cos(this.axisRotations.z)) - z * Math.sin(this.axisRotations.x) * Math.cos(this.axisRotations.y)) * Math.sin(a)) * Math.cos(b) + (x * Math.cos(this.axisRotations.y) * Math.cos(this.axisRotations.z) - y * Math.sin(this.axisRotations.z) * Math.cos(this.axisRotations.y) + z * Math.sin(this.axisRotations.y)) * Math.sin(b);
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, char) {
        const x = this.calcX(cx, cy, cz, rotX, rotY, rotZ)
        const y = this.calcY(cx, cy, cz, rotX, rotY, rotZ)
        const z = this.distanceFromScreen + this.calcZ(cx, cy, cz, rotX, rotY, rotZ)
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
        const rotation = this.getOrientation(axis, direction)
        console.log(axis)
        console.log("=======")
        this.isRotating = true;//if await maybe not neccessary 
        if(this.axisRotations.x >= 2*Math.PI) {
            this.axisRotations.x = 0
            console.log("x zero@@@@@@@")
        }
        if(this.axisRotations.y >= 2* Math.PI) {
            this.axisRotations.y = 0
            console.log("y zero@@@@@@@@@")
        }
        
        if(this.axisRotations.z >= 2* Math.PI) {
            this.axisRotations.z = 0
            console.log("z zero@@@@@@@@@")
        }

        switch (axis) {
            case "z":
                const zInterval = await setInterval(() => {
                    this.axisRotations.z += Math.PI / 10 * direction;
                    if (this.axisRotations.z % (Math.PI / 2) == 0) {
                        this.isRotating = false;
                        clearInterval(zInterval);
                    }
                }, 100)
                break;
            case "x":
                const xInterval = await setInterval(() => {
                    this.axisRotations.x += Math.PI / 10 * direction;
                    if (this.axisRotations.x % (Math.PI / 2) == 0) {
                        this.isRotating = false;
                        clearInterval(xInterval);
                    }
                }, 100)
                break;
            case "y":
                const yInterval = await setInterval(() => {
                    this.axisRotations.y += Math.PI / 10 * direction;
                    if (this.axisRotations.y % (Math.PI / 2) == 0) {
                        this.isRotating = false;
                        clearInterval(yInterval);
                    }
                }, 100)
                break;
        }
        this.updateOrientation(axis, direction);
        console.log("======")
    }


    getOrientation(axis, direction = 1) {
        console.log("before update: ")
        console.log(this.orientation[0])
        console.log(this.orientation[1])
        console.log(this.orientation[2])
        console.log("after")
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