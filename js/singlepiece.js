export class SinglePiece {

    constructor(position, data, visibleWalls) {
        this.width = data.width;
        this.height = data.width;
        this.distanceFromScreen = data.distance;
        this.position = position;
        this.addToScreen = data.save;
        this.position = { x: position.x, y: position.y, z: position.z }
        this.orientation = { x: 0, y: 0, z: 0 }

        //visible walls
        this.top = visibleWalls.top;
        this.bottom = visibleWalls.bottom
        this.left = visibleWalls.left
        this.right = visibleWalls.right
        this.front = visibleWalls.front
        this.back = visibleWalls.back

        this.actualZRot = 0.0;
        this.step = .5;
        this.offset = 1;
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
        this.addToScreen(ooz, char, x, y);
    }


    draw(rotation) {
        for (let a = this.position.x; a < this.position.x + (2 * this.width); a += this.step) {
            for (let b = this.position.y; b <= this.position.y + (2 * this.height); b += this.step) {
                for (let c = this.position.z; c <= this.position.z + (2 * this.height); c += this.step) {
                    if (this.left && a == this.position.x) {
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "*");//left
                    } else if (this.front && c == this.position.z) {
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "#");//front
                    } else if (this.back && c == this.position.z + (2 * this.height)) {
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "M");//back
                    } else if (this.top && b == this.position.y) {
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "P");//top
                    } else if (this.bottom && b == this.position.y + (2 * this.height)) {
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "B");//bottom
                    }
                    else if(this.right){ //right
                        this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, "O");
                    }
                }
            }
        }
    }

    rotatePiece(axis = "z") {
        switch (axis) {
            case "z":
                this.orientation.z += Math.PI / 2;
                break;
            case "x":
                this.orientation.x += Math.PI / 2;
                break;
            case "y":
                this.orientation.y += Math.PI / 2;
                break;
        }
    }
}