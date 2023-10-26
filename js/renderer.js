import { SinglePiece } from "./singlepiece.js";

//settings
const width = 150;
const height = 150;
const screenSize = (width) * height;

let a = 0;
let b = 0;
let c = 0;

const pieceWidth = 8;

const offset = 5;

let K2 = 450;
const K1 = width * K2 * 3 / (8 * (pieceWidth ** 2));

let output = Array(screenSize).fill(" ")
let zBuffer = Array(screenSize).fill(0)

//map of visible pixels
const saveLocation = (ooz, char, x, y) => {
    const xp = parseInt((width / 2) + (K1 * ooz * x));
    const yp = parseInt((height / 4) + (K1 * ooz * y));
    const index = parseInt(yp * width + xp)
    if (zBuffer[index] < ooz) {
        zBuffer[index] = ooz;
        output[index] = char;
    }
}
const data = { width: pieceWidth, distance: K2, save: saveLocation }
//create cube
//#1
const a11 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -3 * pieceWidth - offset, z: -3 * pieceWidth - offset }, data, {front: true, left: true, top: true });
const a12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceWidth - offset, z: -3 * pieceWidth - offset }, data, {front: true, top: true});
const a13 = new SinglePiece({ x: pieceWidth + offset, y: -3 * pieceWidth - offset, z: -3 * pieceWidth - offset }, data, {front: true, top: true, right: true});

const a21 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -pieceWidth, z: -3 * pieceWidth - offset }, data, {front: true, left: true});
const a22 = new SinglePiece({ x: -pieceWidth, y: -pieceWidth, z: -3 * pieceWidth - offset }, data, {front: true, });
const a23 = new SinglePiece({ x: pieceWidth + offset, y: -pieceWidth, z: -3 * pieceWidth - offset }, data, {front: true, right: true});

const a31 = new SinglePiece({ x: -3 * pieceWidth - offset, y: pieceWidth + offset, z: -3 * pieceWidth - offset }, data, {front: true, left: true, bottom: true});
const a32 = new SinglePiece({ x: -pieceWidth, y: pieceWidth + offset, z: -3 * pieceWidth - offset }, data, {front: true, bottom: true });
const a33 = new SinglePiece({ x: pieceWidth + offset, y: pieceWidth + offset, z: -3 * pieceWidth - offset }, data, {front: true, bottom: true, right: true});
// //#2
const b11 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -3 * pieceWidth - offset, z: -pieceWidth }, data, {top: true, left: true});
const b12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceWidth - offset, z: -pieceWidth }, data, {top: true});
const b13 = new SinglePiece({ x: pieceWidth + offset, y: -3 * pieceWidth - offset, z: -pieceWidth }, data, {top: true, right: true});

const b21 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -pieceWidth, z: -pieceWidth }, data, {left: true});
const b23 = new SinglePiece({ x: pieceWidth + offset, y: -pieceWidth, z: -pieceWidth }, data, {right: true});

const b31 = new SinglePiece({ x: -3 * pieceWidth - offset, y: pieceWidth + offset, z: -pieceWidth }, data, {bottom: true, left: true});
const b32 = new SinglePiece({ x: -pieceWidth, y: pieceWidth + offset, z: -pieceWidth }, data, {bottom: true});
const b33 = new SinglePiece({ x: pieceWidth + offset, y: pieceWidth + offset, z: -pieceWidth }, data, {bottom: true, right: true});
//#3 parallel to 1
const c11 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -3 * pieceWidth - offset, z: pieceWidth + offset }, data, {back: true, left: true, top: true });
const c12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceWidth - offset, z: pieceWidth + offset }, data, {back: true, top: true});
const c13 = new SinglePiece({ x: pieceWidth + offset, y: -3 * pieceWidth - offset, z: pieceWidth + offset }, data, {back: true,right: true, top: true});

const c21 = new SinglePiece({ x: -3 * pieceWidth - offset, y: -pieceWidth, z: pieceWidth + offset }, data, {back: true, left: true });
const c22 = new SinglePiece({ x: -pieceWidth, y: -pieceWidth, z: pieceWidth + offset }, data, {back: true, });
const c23 = new SinglePiece({ x: pieceWidth + offset, y: -pieceWidth, z: pieceWidth + offset }, data, {back: true,right: true });

const c31 = new SinglePiece({ x: -3 * pieceWidth - offset, y: pieceWidth + offset, z: pieceWidth + offset }, data, {back: true, left: true,bottom: true });
const c32 = new SinglePiece({ x: -pieceWidth, y: pieceWidth + offset, z: pieceWidth + offset }, data, {back: true,bottom: true });
const c33 = new SinglePiece({ x: pieceWidth + offset, y: pieceWidth + offset, z: pieceWidth + offset }, data, {back: true,right: true,bottom: true });

function draw() {
    output = Array(screenSize).fill(" ")
    zBuffer = Array(screenSize).fill(0)

    //#1
    a11.draw({ x: a, y: b, z: c });
    a12.draw({ x: a, y: b, z: c });
    a13.draw({ x: a, y: b, z: c });

    a21.draw({ x: a, y: b, z: c });
    a22.draw({ x: a, y: b, z: c });
    a23.draw({ x: a, y: b, z: c });

    a31.draw({ x: a, y: b, z: c });
    a32.draw({ x: a, y: b, z: c });
    a33.draw({ x: a, y: b, z: c });
    //#2
    b11.draw({ x: a, y: b, z: c });
    b12.draw({ x: a, y: b, z: c });
    b13.draw({ x: a, y: b, z: c });

    b21.draw({ x: a, y: b, z: c });
    b23.draw({ x: a, y: b, z: c });

    b31.draw({ x: a, y: b, z: c });
    b32.draw({ x: a, y: b, z: c });
    b33.draw({ x: a, y: b, z: c });
    // // //#3
    c11.draw({ x: a, y: b, z: c });
    c12.draw({ x: a, y: b, z: c });
    c13.draw({ x: a, y: b, z: c });

    c21.draw({ x: a, y: b, z: c });
    c22.draw({ x: a, y: b, z: c });
    c23.draw({ x: a, y: b, z: c });

    c31.draw({ x: a, y: b, z: c });
    c32.draw({ x: a, y: b, z: c });
    c33.draw({ x: a, y: b, z: c });

    let res = ""
    for (let au = 0; au < screenSize; au++) {
        res = res + output[au];
        if (au % width == 0) {
            res += "\n";
        }
    }
    document.getElementById("canvas").value = res
}

let isMouseDown = false;
let mouseStart = { x: 0, y: 0 };
let mouseEnd = { x: 0, y: 0 };
document.body.onmousedown = (event) => {
    isMouseDown = true;
    mouseStart.x = event.clientX;
    mouseStart.y = event.clientY;
}

document.body.onmouseup = (event) => {
    isMouseDown = false;
    mouseEnd.x = event.clientX;
    mouseEnd.y = event.clientY;
}

document.body.onmousemove = (event) => {
    if (isMouseDown) {
        const deltaX = event.clientX - mouseStart.x;
        const deltaY = event.clientY - mouseStart.y;

        a -= deltaY / 3000;

        b += deltaX / 3000;

    }
}

document.getElementById("rot").onclick = () => {
    a11.rotatePiece("y");
}

setInterval(() => {
    draw();
}, 400);
