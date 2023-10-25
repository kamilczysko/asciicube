import { SinglePiece } from "./singlepiece.js";

const width = 150;
const height = 150;
const screenSize = (width) * height;

let a = 0;
let b = 0;
let c = 0;

const pieceWidth = 10;
const pieceHeight = pieceWidth;

let K2 = 200;
const K1 = width * K2 * 3 / (8 * (pieceWidth * pieceHeight));

let output = Array(screenSize).fill(" ")
let zBuffer = Array(screenSize).fill(0)

function getScreenMap(ooz, char, x, y) {
    const xp = parseInt((width / 3) + (K1 * ooz * x));
    const yp = parseInt((height / 5) + (K1 * ooz * y));
    const index = parseInt(yp * width + xp)
    if (zBuffer[index] < ooz) {
        zBuffer[index] = ooz;
        output[index] = char;
    }
}
const saveLocation = (ooz, char, x, y) => { getScreenMap(ooz, char, x, y) };

const a11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);

const a21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);

const a31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);
const a33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "$", K2, saveLocation, 0, 0);


const b11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);

const b21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);

const b31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);
const b33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "@", K2, saveLocation, 1, 1);


const c11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);

const c21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);

const c31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);
const c33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "#", K2, saveLocation, 1, -1);


const d11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);

const d21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);

const d31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);
const d33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "&", K2, saveLocation, 0, 0);


const e11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);

const e21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);

const e31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);
const e33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, "O", K2, saveLocation, -2, 0);


const f11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z:- 3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);

const f21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);

const f31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);
const f33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, "+", K2, saveLocation, 2, 0);

function draw() {
    output = Array(screenSize).fill(" ")
    zBuffer = Array(screenSize).fill(0)

    a11.draw({ x: a, y: b, z: c });
    a12.draw({ x: a, y: b, z: c });
    a13.draw({ x: a, y: b, z: c });

    a21.draw({ x: a, y: b, z: c });
    a22.draw({ x: a, y: b, z: c });
    a23.draw({ x: a, y: b, z: c });

    a31.draw({ x: a, y: b, z: c });
    a32.draw({ x: a, y: b, z: c });
    a33.draw({ x: a, y: b, z: c });


    b11.draw({ x: a, y: b, z: c });
    b12.draw({ x: a, y: b, z: c });
    b13.draw({ x: a, y: b, z: c });

    b21.draw({ x: a, y: b, z: c });
    b22.draw({ x: a, y: b, z: c });
    b23.draw({ x: a, y: b, z: c });

    b31.draw({ x: a, y: b, z: c });
    b32.draw({ x: a, y: b, z: c });
    b33.draw({ x: a, y: b, z: c });


    c11.draw({ x: a, y: b, z: c });
    c12.draw({ x: a, y: b, z: c });
    c13.draw({ x: a, y: b, z: c });

    c21.draw({ x: a, y: b, z: c });
    c22.draw({ x: a, y: b, z: c });
    c23.draw({ x: a, y: b, z: c });

    c31.draw({ x: a, y: b, z: c });
    c32.draw({ x: a, y: b, z: c });
    c33.draw({ x: a, y: b, z: c });


    d11.draw({ x: a, y: b, z: c });
    d12.draw({ x: a, y: b, z: c });
    d13.draw({ x: a, y: b, z: c });

    d21.draw({ x: a, y: b, z: c });
    d22.draw({ x: a, y: b, z: c });
    d23.draw({ x: a, y: b, z: c });

    d31.draw({ x: a, y: b, z: c });
    d32.draw({ x: a, y: b, z: c });
    d33.draw({ x: a, y: b, z: c });


    e11.draw({ x: a, y: b, z: c });
    e12.draw({ x: a, y: b, z: c });
    e13.draw({ x: a, y: b, z: c });

    e21.draw({ x: a, y: b, z: c });
    e22.draw({ x: a, y: b, z: c });
    e23.draw({ x: a, y: b, z: c });

    e31.draw({ x: a, y: b, z: c });
    e32.draw({ x: a, y: b, z: c });
    e33.draw({ x: a, y: b, z: c });


    f11.draw({ x: a, y: b, z: c });
    f12.draw({ x: a, y: b, z: c });
    f13.draw({ x: a, y: b, z: c });

    f21.draw({ x: a, y: b, z: c });
    f22.draw({ x: a, y: b, z: c });
    f23.draw({ x: a, y: b, z: c });

    f31.draw({ x: a, y: b, z: c });
    f32.draw({ x: a, y: b, z: c });
    f33.draw({ x: a, y: b, z: c });



    let res = ""
    for (let au = 0; au < screenSize; au++) {
        res = res + output[au];
        if (au % width == 0) {
            res += "\n";
        }
    }
    document.getElementById("canvas").value = res

}

// let isMouseDown = false;
// let mouseStart = { x: 0, y: 0 };
// let mouseEnd = { x: 0, y: 0 };
// document.body.onmousedown = (event) => {
//     isMouseDown = true;
//     mouseStart.x = event.clientX;
//     mouseStart.y = event.clientY;
// }

// document.body.onmouseup = (event) => {
//     isMouseDown = false;
//     mouseEnd.x = event.clientX;
//     mouseEnd.y = event.clientY;
// }

// document.body.onmousemove = (event) => {
//     if (isMouseDown) {
//         const deltaX = event.clientX - mouseStart.x;
//         const deltaY = event.clientY - mouseStart.y;

//         a += deltaY / 3000;

//         b += deltaX / 3000;

//     }
// }
document.getElementById("canvas").onclick = (event) => {
    console.log(document.getElementById("canvas").selectionStart)
}

document.getElementById("rotx").oninput = () => {
    a = document.getElementById("rotx").value / 100
}

document.getElementById("roty").oninput = () => {
    b = document.getElementById("roty").value / 100
}

document.getElementById("rotz").oninput = () => {
    c = document.getElementById("rotz").value / 100
}

// draw();
setInterval(() => {
    draw();
}, 200);