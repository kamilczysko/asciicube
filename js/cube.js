export class Cube {
    constructor(cube) {
        this.cube = cube;
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
            if(dir == -1) {
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
                const element = this.cube[i][layer][j];
                recalculation.push({ i: i, j: j, element: element });
                if (element) {
                    element.rotatePiece("y", direction);
                }
            }
        }
        this.recalculateForY(recalculation, layer, direction);
    }

    recalculateForY(arr, layer, dir=1) {
        for (let c = 1; c <= arr.length; c++) {
            if(c==5) {
                continue;
            }
            if(dir == -1) {
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
                const element = this.cube[layer][i][j];
                recalculation.push({ i: i, j: j, element: element });
                if (element) {
                    element.rotatePiece("z", direction);
                }
            }
        }
        this.recalculateForZ(recalculation, layer, direction)
    }
    recalculateForZ(arr, layer, dir=1) {
        for (let c = 1; c <= arr.length; c++) {
            if (this.cube[layer][arr[c - 1].i][arr[c - 1].j]) {
                if(c == 5) {
                    continue;
                }
                if(dir == -1){
                    this.cube[layer][arr[c - 1].i][arr[c - 1].j] = arr[((c * 3) % 10) - 1].element;
                } else {
                    this.cube[layer][arr[c - 1].i][arr[c - 1].j] = arr[((c * 3) % 10) - 1].element;
                }
            }
        }
    }
}