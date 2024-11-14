const triangle = {
    angles: { A: 45, B: 90, C: 45 },
    sides: { AB: 2, BC: 2, AC: 8 }
};

const ratiosOfSpecificAngle = {
    0: {
        sine: 0, cosine: 1, tangent: 0, cosecant: undefined, secant: 1, cotangent: undefined
    },
    30: {
        sine: 1 / 2, cosine: Math.sqrt(3) / 2, tangent: 1 / Math.sqrt(3), cosecant: 2, secant: 2 / Math.sqrt(3), cotangent: Math.sqrt(3)
    },
    45: {
        sine: 1 / Math.sqrt(2), cosine: 1 / Math.sqrt(2), tangent: 1, cosecant: Math.sqrt(2), secant: Math.sqrt(2), cotangent: 1
    },
    60: {
        sine: Math.sqrt(3) / 2, cosine: 1 / 2, tangent: Math.sqrt(3), cosecant: 2 / Math.sqrt(3), secant: 2, cotangent: 1 / Math.sqrt(3)
    },
    90: {
        sine: 1, cosine: 0, tangent: undefined, cosecant: 1, secant: undefined, cotangent: 0
    }
};

const ratios = {
    sine: triangle.sides.BC / triangle.sides.AC,
    cosine: triangle.sides.AB / triangle.sides.AC,
    tangent: triangle.sides.BC / triangle.sides.AB,
    cosecant: triangle.sides.AC / triangle.sides.BC,
    secant: triangle.sides.AC / triangle.sides.AB,
    cotangent: triangle.sides.AB / triangle.sides.BC
};

const deciamlToFraction = (decimal) => {
    if ((decimal % 1) === 0) return `${decimal} / ${1}`;

    let numerator = decimal;
    let denomenator = 1;

    while (numerator % 1 !== 0) {
        numerator *= 10;
        denomenator *= 10;
    };

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    const divisor = gcd(numerator, denomenator);
    numerator /= divisor;
    denomenator /= divisor;

    return `${numerator} / ${denomenator}`
};

console.log('Working....');