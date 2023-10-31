import { Cube } from "./cube.js";

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

function draw() {
    output = Array(screenSize).fill(" ")
    zBuffer = Array(screenSize).fill(0)
    
    mainCube.draw(a,b,c);

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
    mainCube.rotateX(0, 1);
}


document.getElementById("rot2").onclick = () => {
    mainCube.rotateY(0, 1);
}


document.getElementById("rot3").onclick = () => {
    mainCube.rotateZ(0, 1);
}

document.getElementById("rot11").onclick = () => {
    mainCube.rotateX(0, -1);
}


document.getElementById("rot22").onclick = () => {
    mainCube.rotateY(0, -1);
}


document.getElementById("rot33").onclick = () => {
    mainCube.rotateZ(0, -1);
}
setInterval(() => {
    draw();
}, 10);
