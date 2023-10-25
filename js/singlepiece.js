export class SinglePiece {

    constructor(position, width, height, char, distanceFromScreen, addToScreen, xrot = 0, yrot = 0) {
        this.width = width;
        this.height = height;
        this.char = char;
        this.distanceFromScreen = distanceFromScreen;
        this.position = position;
        this.addToScreen = addToScreen;
        this.orientation = { x: 0, y: 0, z: 0 }
        this.rx = 0;
        this.ry = 0;
        if(xrot != 0) {
            this.rx = (Math.PI / 2) * xrot;
        }

        if(yrot != 0) {
            this.ry = (Math.PI / 2) * yrot;
        }

        this.xrot = xrot;
        this.yrot = yrot;

        this.step = 0.5;
    }

    calcX(x, y, z, a, b, c) {
        return ((x*Math.sin(this.ry) + (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.cos(this.ry))*Math.sin(a) + (y*Math.cos(this.rx) + z*Math.sin(this.rx))*Math.cos(a))*Math.sin(c) + ((x*Math.cos(this.ry) - (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.sin(this.ry))*Math.cos(b) - ((x*Math.sin(this.ry) + (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.cos(this.ry))*Math.cos(a) - (y*Math.cos(this.rx) + z*Math.sin(this.rx))*Math.sin(a))*Math.sin(b))*Math.cos(c)
    }

    calcY(x, y, z, a, b, c) {
        return ((x*Math.sin(this.ry) + (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.cos(this.ry))*Math.sin(a) + (y*Math.cos(this.rx) + z*Math.sin(this.rx))*Math.cos(a))*Math.cos(c) - ((x*Math.cos(this.ry) - (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.sin(this.ry))*Math.cos(b) - ((x*Math.sin(this.ry) + (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.cos(this.ry))*Math.cos(a) - (y*Math.cos(this.rx) + z*Math.sin(this.rx))*Math.sin(a))*Math.sin(b))*Math.sin(c)
    }

    calcZ(x, y, z, a, b, c) {
        return (x*Math.cos(this.ry) - (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.sin(this.ry))*Math.sin(b) + ((x*Math.sin(this.ry) + (-y*Math.sin(this.rx) + z*Math.cos(this.rx))*Math.cos(this.ry))*Math.cos(a) - (y*Math.cos(this.rx) + z*Math.sin(this.rx))*Math.sin(a))*Math.cos(b)
    }

    calcWall(cx, cy, cz, rotX, rotY, rotZ, tbFrame = false, lrFrame = false) {
        const x = this.calcX(cx, cy, cz, rotX, rotY, rotZ)
        const y = this.calcY(cx, cy, cz, rotX, rotY, rotZ)
        const z = this.distanceFromScreen + this.calcZ(cx, cy, cz, rotX, rotY, rotZ)

        this.orientation.x = rotX;
        this.orientation.y = rotY;
        this.orientation.z = rotZ;

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
                if (this.xrot) {
                    a = cubeWidth;
                    b = this.position.z;
                    c = cubeHeight;
                } else if (this.yrot) {
                    a = this.position.z;
                    b = cubeWidth;
                    c = cubeHeight;
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
}