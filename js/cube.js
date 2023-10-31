import { SinglePiece } from "./singlepiece.js";
export class Cube {
    constructor(persistData) {
        this.offset = 0;
        this.pieceWidth = persistData.width;
        this.persistData = persistData;

        //init cube
        this.a11 = null;
        this.a12 = null;
        this.a13 = null;
        this.a21 = null;
        this.a22 = null;
        this.a23 = null;
        this.a31 = null;
        this.a32 = null;
        this.a33 = null;
        this.b11 = null;
        this.b12 = null;
        this.b13 = null;
        this.b21 = null;
        this.b23 = null;
        this.b31 = null;
        this.b32 = null;
        this.b33 = null;
        this.c11 = null;
        this.c12 = null;
        this.c13 = null;
        this.c21 = null;
        this.c22 = null;
        this.c23 = null;
        this.c31 = null;
        this.c32 = null;
        this.c33 = null;
        this.cube = this.initCube();
    }

    initCube() {
        //create cube
        //#1
        this.a11 = new SinglePiece(11, { x: -3 * this.pieceWidth - this.offset, y: -3 * this.pieceWidth - this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, left: true, top: true });
        this.a12 = new SinglePiece(12, { x: -this.pieceWidth, y: -3 * this.pieceWidth - this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, top: true });
        this.a13 = new SinglePiece(13, { x: this.pieceWidth + this.offset, y: -3 * this.pieceWidth - this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, top: true, right: true });

        this.a21 = new SinglePiece(14, { x: -3 * this.pieceWidth - this.offset, y: -this.pieceWidth, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, left: true });
        this.a22 = new SinglePiece(15, { x: -this.pieceWidth, y: -this.pieceWidth, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, });
        this.a23 = new SinglePiece(16, { x: this.pieceWidth + this.offset, y: -this.pieceWidth, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, right: true });

        this.a31 = new SinglePiece(17, { x: -3 * this.pieceWidth - this.offset, y: this.pieceWidth + this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, left: true, bottom: true });
        this.a32 = new SinglePiece(18, { x: -this.pieceWidth, y: this.pieceWidth + this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, bottom: true });
        this.a33 = new SinglePiece(19, { x: this.pieceWidth + this.offset, y: this.pieceWidth + this.offset, z: -3 * this.pieceWidth - this.offset }, this.persistData, { front: true, bottom: true, right: true });
        // //#2
        this.b11 = new SinglePiece(21, { x: -3 * this.pieceWidth - this.offset, y: -3 * this.pieceWidth - this.offset, z: -this.pieceWidth }, this.persistData, { top: true, left: true });
        this.b12 = new SinglePiece(22, { x: -this.pieceWidth, y: -3 * this.pieceWidth - this.offset, z: -this.pieceWidth }, this.persistData, { top: true });
        this.b13 = new SinglePiece(23, { x: this.pieceWidth + this.offset, y: -3 * this.pieceWidth - this.offset, z: -this.pieceWidth }, this.persistData, { top: true, right: true });

        this.b21 = new SinglePiece(24, { x: -3 * this.pieceWidth - this.offset, y: -this.pieceWidth, z: -this.pieceWidth }, this.persistData, { left: true });
        this.b23 = new SinglePiece(26, { x: this.pieceWidth + this.offset, y: -this.pieceWidth, z: -this.pieceWidth }, this.persistData, { right: true });

        this.b31 = new SinglePiece(27, { x: -3 * this.pieceWidth - this.offset, y: this.pieceWidth + this.offset, z: -this.pieceWidth }, this.persistData, { bottom: true, left: true });
        this.b32 = new SinglePiece(28, { x: -this.pieceWidth, y: this.pieceWidth + this.offset, z: -this.pieceWidth }, this.persistData, { bottom: true });
        this.b33 = new SinglePiece(29, { x: this.pieceWidth + this.offset, y: this.pieceWidth + this.offset, z: -this.pieceWidth }, this.persistData, { bottom: true, right: true });
        //#3 parallel to 1
        this.c11 = new SinglePiece(11, { x: -3 * this.pieceWidth - this.offset, y: -3 * this.pieceWidth - this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, left: true, top: true });
        this.c12 = new SinglePiece(12, { x: -this.pieceWidth, y: -3 * this.pieceWidth - this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, top: true });
        this.c13 = new SinglePiece(13, { x: this.pieceWidth + this.offset, y: -3 * this.pieceWidth - this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, right: true, top: true });

        this.c21 = new SinglePiece(14, { x: -3 * this.pieceWidth - this.offset, y: -this.pieceWidth, z: this.pieceWidth + this.offset }, this.persistData, { back: true, left: true });
        this.c22 = new SinglePiece(15, { x: -this.pieceWidth, y: -this.pieceWidth, z: this.pieceWidth + this.offset }, this.persistData, { back: true, });
        this.c23 = new SinglePiece(16, { x: this.pieceWidth + this.offset, y: -this.pieceWidth, z: this.pieceWidth + this.offset }, this.persistData, { back: true, right: true });

        this.c31 = new SinglePiece(17, { x: -3 * this.pieceWidth - this.offset, y: this.pieceWidth + this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, left: true, bottom: true });
        this.c32 = new SinglePiece(18, { x: -this.pieceWidth, y: this.pieceWidth + this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, bottom: true });
        this.c33 = new SinglePiece(19, { x: this.pieceWidth + this.offset, y: this.pieceWidth + this.offset, z: this.pieceWidth + this.offset }, this.persistData, { back: true, right: true, bottom: true });
        return [
            [[this.a11, this.a12, this.a13],
            [this.a21, this.a22, this.a23],
            [this.a31, this.a32, this.a33]
            ],
            [[this.b11, this.b12, this.b13],
            [this.b21, null, this.b23],
            [this.b31, this.b32, this.b33]
            ],
            [[this.c11, this.c12, this.c13],
            [this.c21, this.c22, this.c23],
            [this.c31, this.c32, this.c33]
            ]
        ]
    }

    draw(a, b, c) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    const cube = this.cube[i][j][k];
                    if (cube) {
                        cube.draw({ x: a, y: b, z: c });
                    }
                }
            }
        }
    }

    rotateX(layer, direction = 1) {
        const recalculation = []
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const element = this.cube[i][j][layer];
                recalculation.push({ i: i, j: j, element: element });
                if (element) {
                    element.rotatePiece("x", direction);
                }
            }
        }
        this.recalculateForX(recalculation, layer, direction);
    }

    recalculateForX(arr, layer, dir) {
        for (let c = 1; c <= arr.length; c++) {
            if (c == 5) { continue; }
            if (dir == -1) {
                this.cube[arr[c - 1].i][arr[c - 1].j][layer] = arr[((c * 3) % 10) - 1].element;
            } else {
                this.cube[arr[c - 1].i][arr[c - 1].j][layer] = arr[((c * 7) % 10) - 1].element;
            }
        }
    }

    rotateY(layer, direction = 1) {
        const recalculation = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const element = this.cube[j][layer][i];
                recalculation.push({ i: j, j: i, element: element });
                if (element) {
                    element.rotatePiece("y", direction);
                }
            }
        }
        this.recalculateForY(recalculation, layer, direction);
    }

    recalculateForY(arr, layer, dir = 1) {
        for (let c = 1; c <= arr.length; c++) {
            if (c == 5) {
                continue;
            }
            if (dir == -1) {
                this.cube[arr[c - 1].i][layer][arr[c - 1].j] = arr[((c * 3) % 10) - 1].element;
            } else {
                this.cube[arr[c - 1].i][layer][arr[c - 1].j] = arr[((c * 7) % 10) - 1].element;
            }
        }
    }

    rotateZ(layer, direction = 1) {
        const recalculation = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const element = this.cube[layer][j][i];
                recalculation.push({ i: j, j: i, element: element });
                if (element) {
                    element.rotatePiece("z", direction);
                }
            }
        }
        this.recalculateForZ(recalculation, layer, direction)
    }
    recalculateForZ(arr, layer, dir = 1) {
        for (let c = 1; c <= arr.length; c++) {
            if (this.cube[layer][arr[c - 1].i][arr[c - 1].j]) {
                if (c == 5) {
                    continue;
                }
                if (dir == -1) {
                    this.cube[layer][arr[c - 1].i][arr[c - 1].j] = arr[((c * 3) % 10) - 1].element;
                } else {
                    this.cube[layer][arr[c - 1].i][arr[c - 1].j] = arr[((c * 3) % 10) - 1].element;
                }
            }
        }
    }
}