export class SinglePiece {

    constructor(id, position, data, visibleWalls) {
        this.width = data.width;
        this.height = data.width;
        this.distanceFromScreen = data.distance;
        this.position = position;
        this.addToScreen = data.save;
        this.position = { x: position.x, y: position.y, z: position.z }
        this.orientation = { x: 0, y: 0, z: 0 }
        this.id = id;
        this.rotation = {x:0,y:0,z:0}

        //visible walls
        this.top = visibleWalls.top;
        this.bottom = visibleWalls.bottom
        this.left = visibleWalls.left
        this.right = visibleWalls.right
        this.front = visibleWalls.front
        this.back = visibleWalls.back

        this.actualZRot = 0.0;
        this.step = .3;
        this.offset = 1;
    }

    getId() {
        return this.id;
    }

    calcX(x, y, z, a, b, c) {
        return (-((x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.z) - Math.sin(this.orientation.y) * Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) + y * (Math.sin(this.orientation.x) * Math.cos(this.orientation.z) + Math.sin(this.orientation.y) * Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + z * Math.cos(this.orientation.x) * Math.cos(this.orientation.y)) * Math.cos(a) - (x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.cos(this.orientation.z) + Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + y * (-Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.sin(this.orientation.z) + Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) - z * Math.sin(this.orientation.x) * Math.cos(this.orientation.y)) * Math.sin(a)) * Math.sin(b) + (x * Math.cos(this.orientation.y) * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z) * Math.cos(this.orientation.y) + z * Math.sin(this.orientation.y)) * Math.cos(b)) * Math.cos(c) + ((x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.z) - Math.sin(this.orientation.y) * Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) + y * (Math.sin(this.orientation.x) * Math.cos(this.orientation.z) + Math.sin(this.orientation.y) * Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + z * Math.cos(this.orientation.x) * Math.cos(this.orientation.y)) * Math.sin(a) + (x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.cos(this.orientation.z) + Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + y * (-Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.sin(this.orientation.z) + Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) - z * Math.sin(this.orientation.x) * Math.cos(this.orientation.y)) * Math.cos(a)) * Math.sin(c);
    }

    calcY(x, y, z, a, b, c) {
        return -(-((x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.z) - Math.sin(this.orientation.y) * Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) + y * (Math.sin(this.orientation.x) * Math.cos(this.orientation.z) + Math.sin(this.orientation.y) * Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + z * Math.cos(this.orientation.x) * Math.cos(this.orientation.y)) * Math.cos(a) - (x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.cos(this.orientation.z) + Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + y * (-Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.sin(this.orientation.z) + Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) - z * Math.sin(this.orientation.x) * Math.cos(this.orientation.y)) * Math.sin(a)) * Math.sin(b) + (x * Math.cos(this.orientation.y) * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z) * Math.cos(this.orientation.y) + z * Math.sin(this.orientation.y)) * Math.cos(b)) * Math.sin(c) + ((x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.z) - Math.sin(this.orientation.y) * Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) + y * (Math.sin(this.orientation.x) * Math.cos(this.orientation.z) + Math.sin(this.orientation.y) * Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + z * Math.cos(this.orientation.x) * Math.cos(this.orientation.y)) * Math.sin(a) + (x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.cos(this.orientation.z) + Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + y * (-Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.sin(this.orientation.z) + Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) - z * Math.sin(this.orientation.x) * Math.cos(this.orientation.y)) * Math.cos(a)) * Math.cos(c);
    }

    calcZ(x, y, z, a, b, c) {
        return ((x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.z) - Math.sin(this.orientation.y) * Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) + y * (Math.sin(this.orientation.x) * Math.cos(this.orientation.z) + Math.sin(this.orientation.y) * Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + z * Math.cos(this.orientation.x) * Math.cos(this.orientation.y)) * Math.cos(a) - (x * (Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.cos(this.orientation.z) + Math.sin(this.orientation.z) * Math.cos(this.orientation.x)) + y * (-Math.sin(this.orientation.x) * Math.sin(this.orientation.y) * Math.sin(this.orientation.z) + Math.cos(this.orientation.x) * Math.cos(this.orientation.z)) - z * Math.sin(this.orientation.x) * Math.cos(this.orientation.y)) * Math.sin(a)) * Math.cos(b) + (x * Math.cos(this.orientation.y) * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z) * Math.cos(this.orientation.y) + z * Math.sin(this.orientation.y)) * Math.sin(b);
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, char) {
        const x = this.calcX(cx, cy, cz, rotX, rotY, rotZ)
        const y = this.calcY(cx, cy, cz, rotX, rotY, rotZ)
        const z = this.distanceFromScreen + this.calcZ(cx, cy, cz, rotX, rotY, rotZ)
        const ooz = 1 / z;
        this.addToScreen(ooz, char, x, y, () => {});
    }


    draw(rotation) {
        this.rotation = rotation;
        if (this.left) {
            for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    let char = "+"
                    if ((b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.width)-1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height))-1)) {
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
                    if ((c == this.position.z || parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.width)-1)) ||
                        (parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height))-1)) {
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
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width)-1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height))-1)) {
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
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width)-1)) ||
                        (parseInt(Math.floor(c)) == parseInt(this.position.z + (2 * this.height))-1)) {
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
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width)-1)) ||
                        (b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height)-1))) {
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
                    if ((a == this.position.x || parseInt(Math.floor(a)) == parseInt(this.position.x + (2 * this.width)-1)) ||
                        (b == this.position.y || parseInt(Math.floor(b)) == parseInt(this.position.y + (2 * this.height)-1))) {
                        char = " "
                    }
                    this.calcWall(a, b, this.position.z + (2 * this.height), rotation.x, rotation.y, rotation.z, char);
                }
            }
        }
    }

    rotatePiece(axis = "z", direction = 1) {
        switch (axis) {
            case "z":
                const zInterval = setInterval(() => {
                    
                    this.orientation.z += Math.PI / 10*direction;
                    if(this.orientation.z % (Math.PI /2) == 0) {
                        if(this.orientation.z == 2*Math.PI) {
                            this.orientation.z = 0
                        }
                        clearInterval(zInterval);
                    }
                }, 100)
                break;
            case "x":
                const xInterval = setInterval(() => {
                    this.orientation.x += Math.PI / 10 *direction;
                    if(this.orientation.x % (Math.PI /2) == 0) {
                        if(this.orientation.x == 2*Math.PI) {
                            this.orientation.x = 0
                        }
                        clearInterval(xInterval);
                    }
                }, 100)
                break;
            case "y":
                const yInterval = setInterval(() => {
                    this.orientation.y += Math.PI / 10*direction;
                    if(this.orientation.y % (Math.PI /2) == 0) {
                        if(this.orientation.y == 2*Math.PI) {
                            this.orientation.y = 0
                        }
                        clearInterval(yInterval);
                    }
                }, 100)
                break;
        }
    }
}