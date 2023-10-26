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
    const xp = parseInt((width / 5) + (K1 * ooz * x));
    const yp = parseInt((height / 5) + (K1 * ooz * y));
    const index = parseInt(yp * width + xp)
    if (zBuffer[index] < ooz) {
        zBuffer[index] = ooz;
        output[index] = char;
    }
}
const saveLocation = (ooz, char, x, y) => { getScreenMap(ooz, char, x, y) };
//#1
const charA = "&"
const a11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);

const a21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);

const a31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
const a33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charA, K2, saveLocation);
//#2
const charB = "O";
const b11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);

const b21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);

const b31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
const b33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charB, K2, saveLocation, true);
//#3 parallel to 1
const charC = "@"
const c11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);

const c21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);

const c31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
const c33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: 3 * pieceWidth }, pieceWidth, pieceHeight, charC, K2, saveLocation);
//#4 parallel to 2
const charD = "#";
const d11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);

const d21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);

const d31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);
const d33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charD, K2, saveLocation);

//#5 
const charE = "*"
const e11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);

const e21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);

const e31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);
const e33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charE, K2, saveLocation);


//#6 parralel to 5
const charF = "~"
const f11 = new SinglePiece({ x: -3 * pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f12 = new SinglePiece({ x: -pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f13 = new SinglePiece({ x: pieceWidth, y: -3 * pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);

const f21 = new SinglePiece({ x: -3 * pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f22 = new SinglePiece({ x: -pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f23 = new SinglePiece({ x: pieceWidth, y: -pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);

const f31 = new SinglePiece({ x: -3 * pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f32 = new SinglePiece({ x: -pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);
const f33 = new SinglePiece({ x: pieceWidth, y: pieceHeight, z: -3 * pieceWidth }, pieceWidth, pieceHeight, charF, K2, saveLocation);

function draw() {
    output = Array(screenSize).fill(" ")
    zBuffer = Array(screenSize).fill(0)
    //#1
    a11.draw({ x: a, y: b, z: c});
    a12.draw({ x: a, y: b, z: c});
    a13.draw({ x: a, y: b, z: c});

    a21.draw({ x: a, y: b, z: c});
    a22.draw({ x: a, y: b, z: c});
    a23.draw({ x: a, y: b, z: c});

    a31.draw({ x: a, y: b, z: c});
    a32.draw({ x: a, y: b, z: c});
    a33.draw({ x: a, y: b, z: c});
    //#2
    b11.draw({ x: a, y: b - Math.PI / 2, z: c });
    b12.draw({ x: a, y: b - Math.PI / 2, z: c });
    b13.draw({ x: a, y: b - Math.PI / 2, z: c });

    b21.draw({ x: a, y: b - Math.PI / 2, z: c });
    b22.draw({ x: a, y: b - Math.PI / 2, z: c });
    b23.draw({ x: a, y: b - Math.PI / 2, z: c });

    b31.draw({ x: a, y: b - Math.PI / 2, z: c });
    b32.draw({ x: a, y: b - Math.PI / 2, z: c });
    b33.draw({ x: a, y: b - Math.PI / 2, z: c });
    //#3
    c11.draw({ x: a, y: b, z: c });
    c12.draw({ x: a, y: b, z: c });
    c13.draw({ x: a, y: b, z: c });

    c21.draw({ x: a, y: b, z: c });
    c22.draw({ x: a, y: b, z: c });
    c23.draw({ x: a, y: b, z: c });

    c31.draw({ x: a, y: b, z: c });
    c32.draw({ x: a, y: b, z: c });
    c33.draw({ x: a, y: b, z: c });
    // #4
    d11.draw({ x: a, y: b + Math.PI / 2, z: c });
    d12.draw({ x: a, y: b + Math.PI / 2, z: c });
    d13.draw({ x: a, y: b + Math.PI / 2, z: c });

    d21.draw({ x: a, y: b + Math.PI / 2, z: c });
    d22.draw({ x: a, y: b + Math.PI / 2, z: c });
    d23.draw({ x: a, y: b + Math.PI / 2, z: c });

    d31.draw({ x: a, y: b + Math.PI / 2, z: c });
    d32.draw({ x: a, y: b + Math.PI / 2, z: c });
    d33.draw({ x: a, y: b + Math.PI / 2, z: c });

    //#5
    e11.draw({ x: a - Math.PI / 2, y: b, z: c });
    e12.draw({ x: a - Math.PI / 2, y: b, z: c });
    e13.draw({ x: a - Math.PI / 2, y: b, z: c });

    e21.draw({ x: a - Math.PI / 2, y: b, z: c });
    e22.draw({ x: a - Math.PI / 2, y: b, z: c });
    e23.draw({ x: a - Math.PI / 2, y: b, z: c });

    e31.draw({ x: a - Math.PI / 2, y: b, z: c });
    e32.draw({ x: a - Math.PI / 2, y: b, z: c });
    e33.draw({ x: a - Math.PI / 2, y: b, z: c });


    //#6
    f11.draw({ x: a + Math.PI / 2, y: b, z: c });
    f12.draw({ x: a + Math.PI / 2, y: b, z: c });
    f13.draw({ x: a + Math.PI / 2, y: b, z: c });

    f21.draw({ x: a + Math.PI / 2, y: b, z: c });
    f22.draw({ x: a + Math.PI / 2, y: b, z: c });
    f23.draw({ x: a + Math.PI / 2, y: b, z: c });

    f31.draw({ x: a + Math.PI / 2, y: b, z: c });
    f32.draw({ x: a + Math.PI / 2, y: b, z: c });
    f33.draw({ x: a + Math.PI / 2, y: b, z: c });




    let res = ""
    for (let au = 0; au < screenSize; au++) {
        res = res + output[au];
        if (au % width == 0) {
            res += "\n";
        }
    }
    document.getElementById("canvas").value = res

}

document.getElementById("canvas").onclick = (event) => {
    const canvasStart = 15//1673;
    const start = document.getElementById("canvas").selectionStart;
    const itemInArray = start - canvasStart;
}

document.getElementById("rotx").oninput = () => {
    a = document.getElementById("rotx").value / 100
}

document.getElementById("roty").oninput = () => {
    b = document.getElementById("roty").value / 100
}

document.getElementById("rotl").onclick = () => {
    b11.rotateZ();
}

document.getElementById("rotz").oninput = () => {
    c = document.getElementById("rotz").value / 100
}

setInterval(() => {
    draw();
}, 100);
