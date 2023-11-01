const scrambles = [
    "L' U D B2 R' U' B D B U2 R' D2 R L' U R2 B2 L' U2 F B' D B2 D L",
    "D2 R' U2 D2 R2 F2 B' U2 L2 R U' L2 B F L U2 D' F U R U2 F' R' U' R'",
    "L D' L' D' R' L' U2 R' D L2 R2 B2 R' F B D2 R L U R F U' F D2 R2",
    "D' B F D' U2 F2 L B2 L' R U2 F' R B2 D2 F2 U L2 B R' U' L D F2 L2",
    "L' U D B2 R' U' B D B U2 R' D2 R L' U R2 B2 L' U2 F B' D B2 D L"
]

const randomScramble = parseInt(Math.floor(Math.random() * (scrambles.length - 1)))
document.getElementById("scrambleInput").value = scrambles[randomScramble];

let scrambleExpression = []

export default function initScrambling(cube) {
    document.getElementById("scrambleOk").onclick = () => {
        scrambleExpression = document.getElementById("scrambleInput").value.split(" ");
        scrambleExpression.forEach(element => {
            const wall = element[0];
            const secondElement = element[1] ? element[1] : 1
            if (secondElement == "'") {
                cube.rotateWall(wall, 1, -1)
            } else if (element) {
                cube.rotateWall(wall, secondElement)
            } else {
                cube.rotateWall(wall)
            }
        });
    }
}