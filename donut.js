const width = 80;
const height = 80;
const screenSize = (width) * height;

const R1 = 3;
const R2 = 5;
let a = 0;
let b = 0;
const K2 = 100;
const K1 = (height * K2 * 3) / (8 * (R1 + R2));
const thetaSpacing = 0.04;
const phiSpacing = 0.04;

function draw() {
    const output = Array(screenSize).fill(" ")
    const zBuffer = Array(screenSize).fill(0)

    for (let theta = 0; theta <= 2 * Math.PI; theta += thetaSpacing) {
        for (let phi = 0; phi <= 2 * Math.PI; phi += phiSpacing) {
            const cosTH = Math.cos(theta);
            const sinTH = Math.sin(theta);
            const cosPH = Math.cos(phi);
            const sinPH = Math.sin(phi);
            const sinA = Math.sin(a)
            const cosA = Math.cos(a)
            const sinB = Math.sin(b)
            const cosB = Math.cos(b)

            const circleX = R2 + R1 * cosTH;
            const circleY = R1 * sinTH;

            // const x = circleX * cosPH//(cosB * sinPH + sinA * sinB * sinPH) - circleY * cosA * sinB;
            // const y = circleY// * (cosPH * sinB - cosB * sinA * sinPH) + circleY * cosA * cosB;
            // const z = K2 + circleX * sinPH;//cosA * (circleX) * sinPH + circleY * sinA

            const x = circleX * (cosB * cosPH + sinA * sinB * sinPH) - R1 * cosA * sinB * sinTH;
            const y = circleX * (cosPH * sinB - cosB * sinA * sinPH) + R1 * cosA * cosB * sinTH;
            const z = K2 + cosA * (circleX) * sinPH + R1 * sinA * sinTH;

            const ooz = 1 / z;
            const xp = parseInt((width / 2) + (K1 * ooz * x));
            const yp = parseInt((height / 2) - (K1 * ooz * y));

            const l = cosPH * cosTH * sinB - cosA * cosTH * sinPH - sinA * sinTH + cosB * (cosA * sinTH - cosTH * sinA * sinPH);

            if (l > 0) {
                if (ooz > zBuffer[(yp) * width + xp]) {
                    zBuffer[(yp) * width + xp] = ooz;
                    const luminanceIndex = l * 8;
                    output[(yp) * width + xp] = ".,-~:;=!*#$@BCD#O".charAt(luminanceIndex)
                }
            } else {
                // output[(yp) * width + xp] = "{"
            }

        }
    }

    let res = ""
    for (let au = 0; au < screenSize; au++) {
        res = res + output[au] + "";
        if (au % width == 0) {
            res += "\n";
        }
    }
    document.getElementById("canvas").value = res
    a += .1;
    b += .1;
}
setInterval(() => {
    draw();
}, 100);