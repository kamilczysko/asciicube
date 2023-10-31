import { SinglePiece } from "./singlepiece.js";
import { Cube } from "./cube.js";
//settings
const width = 150;
const height = 150;
const screenSize = (width) * height;

let a = 0;
let b = 0;
let c = 0;

const pieceWidth = 8;

let K2 = 450;
const K1 = width * K2 * 3 / (8 * (pieceWidth ** 2));

let output = Array(screenSize).fill(" ")
let zBuffer = Array(screenSize).fill(0)

//map of visible pixels
const saveLocation = (ooz, char, x, y, callback) => {
    const xp = parseInt((width / 2) + (K1 * ooz * x));
    const yp = parseInt((height / 4) + (K1 * ooz * y));
    const index = parseInt(yp * width + xp)
    if (zBuffer[index] < ooz) {
        zBuffer[index] = ooz;
        output[index] = char;
        callback();
    }
}
const data = { width: pieceWidth, distance: K2, save: saveLocation }

const mainCube = new Cube(data);
const el  = new SinglePiece(11, { x: -3 * pieceWidth - 0, y: -3 * pieceWidth - 0, z: -3 * pieceWidth - 0 }, data, { front: true, left: true, top: true, bottom: true, right: true, back: true });
//todo remove el
function draw() {
    output = Array(screenSize).fill(" ")
    zBuffer = Array(screenSize).fill(0)
    // mainCube.draw(a,b,c);
    el.draw({x:a,y:b, z:c})
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
document.getElementById("canvas").onmousedown = (event) => {
    isMouseDown = true;
    mouseStart.x = event.clientX;
    mouseStart.y = event.clientY;
}

document.getElementById("canvas").onmouseup = (event) => {
    isMouseDown = false;
    mouseEnd.x = event.clientX;
    mouseEnd.y = event.clientY;
}

document.getElementById("canvas").onmousemove = (event) => {
    if (isMouseDown) {
        const deltaX = event.clientX - mouseStart.x;
        const deltaY = event.clientY - mouseStart.y;
        a += deltaY / 3000;
        b -= deltaX / 3000;
    }
}

document.getElementById("rot1").onclick = () => {
    el.rotatePiece("x", 1)
    // mainCube.rotateX(0, 1);
}


document.getElementById("rot2").onclick = () => {
    el.rotatePiece("y", 1)
    // mainCube.rotateZ(0, 1);
}


document.getElementById("rot3").onclick = () => {
    el.rotatePiece("z", 1)
    // mainCube.rotateY(0, 1);
}

document.getElementById("rot11").onclick = () => {
    el.rotatePiece("x", -1)
    // mainCube.rotateX(0, -1);
}


document.getElementById("rot22").onclick = () => {
    el.rotatePiece("y", -1)
    // mainCube.rotateZ(0, -1);
}


document.getElementById("rot33").onclick = () => {
    el.rotatePiece("z", -1)
    // mainCube.rotateY(0, -1);
}

document.getElementById("i").oninput = () => {
    el.setI(document.getElementById("i").value/100);
    document.getElementById("ilabel").innerText = document.getElementById("i").value/100
}

document.getElementById("j").oninput = () => {
    el.setJ(document.getElementById("j").value/100);
    document.getElementById("jlabel").innerText = document.getElementById("j").value/100
}

document.getElementById("k").oninput = () => {
    el.setK(document.getElementById("k").value/100);
    document.getElementById("klabel").innerText = document.getElementById("k").value/100
}

document.getElementById("w").oninput = () => {
    el.setW(document.getElementById("w").value/100);
    document.getElementById("wlabel").innerText = document.getElementById("w").value/100
}

// draw();
setInterval(() => {
    draw();
}, 10);
