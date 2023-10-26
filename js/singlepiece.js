export class SinglePiece {

    constructor(position, width, height, char, distanceFromScreen, addToScreen, rotY) {
        this.width = width;
        this.height = height;
        this.char = char;
        this.distanceFromScreen = distanceFromScreen;
        this.position = position;
        this.addToScreen = addToScreen;
        this.position = { x: position.x, y: position.y, z: position.z }
        this.rotY = rotY;
        this.orientation = { x: 0, y: 0, z: 0 }

        this.actualZRot = 0.0;
        this.step = 0.5;
    }

    calcX(x, y, z, a, b, c) {
        return (-((x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.z) - Math.sin(this.orientation.y)*Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) + y*(Math.sin(this.orientation.x)*Math.cos(this.orientation.z) + Math.sin(this.orientation.y)*Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + z*Math.cos(this.orientation.x)*Math.cos(this.orientation.y))*Math.cos(a) - (x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.cos(this.orientation.z) + Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + y*(-Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.sin(this.orientation.z) + Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) - z*Math.sin(this.orientation.x)*Math.cos(this.orientation.y))*Math.sin(a))*Math.sin(b) + (x*Math.cos(this.orientation.y)*Math.cos(this.orientation.z) - y*Math.sin(this.orientation.z)*Math.cos(this.orientation.y) + z*Math.sin(this.orientation.y))*Math.cos(b))*Math.cos(c) + ((x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.z) - Math.sin(this.orientation.y)*Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) + y*(Math.sin(this.orientation.x)*Math.cos(this.orientation.z) + Math.sin(this.orientation.y)*Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + z*Math.cos(this.orientation.x)*Math.cos(this.orientation.y))*Math.sin(a) + (x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.cos(this.orientation.z) + Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + y*(-Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.sin(this.orientation.z) + Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) - z*Math.sin(this.orientation.x)*Math.cos(this.orientation.y))*Math.cos(a))*Math.sin(c);
        //(z * Math.sin(a) + (x * Math.sin(this.orientation.z) + y * Math.cos(this.orientation.z)) * Math.cos(a)) * Math.sin(c) + ((x * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z)) * Math.cos(b) - (z * Math.cos(a) - (x * Math.sin(this.orientation.z) + y * Math.cos(this.orientation.z)) * Math.sin(a)) * Math.sin(b)) * Math.cos(c)
    }

    calcY(x, y, z, a, b, c) {
        return -(-((x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.z) - Math.sin(this.orientation.y)*Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) + y*(Math.sin(this.orientation.x)*Math.cos(this.orientation.z) + Math.sin(this.orientation.y)*Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + z*Math.cos(this.orientation.x)*Math.cos(this.orientation.y))*Math.cos(a) - (x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.cos(this.orientation.z) + Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + y*(-Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.sin(this.orientation.z) + Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) - z*Math.sin(this.orientation.x)*Math.cos(this.orientation.y))*Math.sin(a))*Math.sin(b) + (x*Math.cos(this.orientation.y)*Math.cos(this.orientation.z) - y*Math.sin(this.orientation.z)*Math.cos(this.orientation.y) + z*Math.sin(this.orientation.y))*Math.cos(b))*Math.sin(c) + ((x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.z) - Math.sin(this.orientation.y)*Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) + y*(Math.sin(this.orientation.x)*Math.cos(this.orientation.z) + Math.sin(this.orientation.y)*Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + z*Math.cos(this.orientation.x)*Math.cos(this.orientation.y))*Math.sin(a) + (x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.cos(this.orientation.z) + Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + y*(-Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.sin(this.orientation.z) + Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) - z*Math.sin(this.orientation.x)*Math.cos(this.orientation.y))*Math.cos(a))*Math.cos(c);
        //(z * Math.sin(a) + (x * Math.sin(this.orientation.z) + y * Math.cos(this.orientation.z)) * Math.cos(a)) * Math.cos(c) - ((x * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z)) * Math.cos(b) - (z * Math.cos(a) - (x * Math.sin(this.orientation.z) + y * Math.cos(this.orientation.z)) * Math.sin(a)) * Math.sin(b)) * Math.sin(c)
    }

    calcZ(x, y, z, a, b, c) {
        return ((x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.z) - Math.sin(this.orientation.y)*Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) + y*(Math.sin(this.orientation.x)*Math.cos(this.orientation.z) + Math.sin(this.orientation.y)*Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + z*Math.cos(this.orientation.x)*Math.cos(this.orientation.y))*Math.cos(a) - (x*(Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.cos(this.orientation.z) + Math.sin(this.orientation.z)*Math.cos(this.orientation.x)) + y*(-Math.sin(this.orientation.x)*Math.sin(this.orientation.y)*Math.sin(this.orientation.z) + Math.cos(this.orientation.x)*Math.cos(this.orientation.z)) - z*Math.sin(this.orientation.x)*Math.cos(this.orientation.y))*Math.sin(a))*Math.cos(b) + (x*Math.cos(this.orientation.y)*Math.cos(this.orientation.z) - y*Math.sin(this.orientation.z)*Math.cos(this.orientation.y) + z*Math.sin(this.orientation.y))*Math.sin(b);
        //(x * Math.cos(this.orientation.z) - y * Math.sin(this.orientation.z)) * Math.sin(b) + (z * Math.cos(a) - (x * Math.sin(this.orientation.z) + y * Math.cos(this.orientation.z)) * Math.sin(a)) * Math.cos(b)
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, tbFrame = false, lrFrame = false) {
        const x = this.calcX(cx, cy, cz, rotX, rotY, rotZ)
        const y = this.calcY(cx, cy, cz, rotX, rotY, rotZ)
        const z = this.distanceFromScreen + this.calcZ(cx, cy, cz, rotX, rotY, rotZ)

        const ooz = 1 / z;
        if (tbFrame) {
            this.addToScreen(ooz, ' ', x, y);
        } else if (lrFrame) {
            this.addToScreen(ooz, ' ', x, y);
        } else {
            this.addToScreen(ooz, this.char, x, y);
        }
    }

    draw(rotation) {
        for (let cubeWidth = this.position.x; cubeWidth < this.position.x + (2 * this.width); cubeWidth += this.step) {
            for (let cubeHeight = this.position.y; cubeHeight <= this.position.y + (2 * this.height); cubeHeight += this.step) {
                let a = cubeWidth;
                let b = cubeHeight;
                let c = this.position.z;
                if (this.rotY) {
                    a = this.position.z * this.rotY;
                    b = cubeWidth;
                    c = cubeHeight
                }
                if (parseInt(Math.floor(cubeHeight)) == parseInt(this.position.y + (2 * this.height)) - 1 || cubeHeight == this.position.y) {
                    this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, true, false);
                } else if (parseInt(Math.floor(cubeWidth)) == parseInt(this.position.x + (2 * this.width)) - 1 || cubeWidth == this.position.x) {
                    this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z, false, true);
                } else {
                    this.calcWall(a, b, c, rotation.x, rotation.y, rotation.z);
                }
            }
        }
    }

    rotatePiece() {
        if(this.rotY){
            this.orientation.x += Math.PI / 3;
        } else {
            this.orientation.z += Math.PI / 3;
        }
    }
}