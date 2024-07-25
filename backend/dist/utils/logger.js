'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x10a)) / (-0x9ad * -0x1 + 0x2383 + -0x2b * 0x10d) * (-parseInt(A(0x10d)) / (-0x49 * -0x25 + 0x4 * 0x14b + -0xfb7)) + -parseInt(A(0x10f)) / (-0x1d59 * 0x1 + -0xc9e + -0x4aa * -0x9) * (parseInt(B(0x136)) / (-0x1aa8 + 0x1ac3 + 0x17 * -0x1)) + -parseInt(A(0x129)) / (-0x14d9 + -0x7 * 0x125 + -0x1 * -0x1ce1) + parseInt(B(0x11f)) / (-0x165 + -0x3b * 0x1e + 0x855) + -parseInt(A(0x10c)) / (0xb7 * 0x1d + -0x15de + -0x1 * -0x12a) * (-parseInt(A(0x132)) / (0x42 * -0x3d + -0x69d * -0x1 + 0x925)) + parseInt(B(0x126)) / (-0x1b66 + -0x1f * -0xf9 + -0x2b8) + parseInt(B(0x112)) / (-0x2 * -0x9b + 0x25e4 + -0x10 * 0x271);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x120c4f + -0xbcb6a * -0x2 + 0xb * 0xb0d1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d17 * 0x1 + -0xa9b + -0x1172);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        '6738184EtKFfw',
        'ptions',
        'filename',
        'json',
        '2680iYBJeL',
        'errors',
        'env',
        './logs/app',
        'logger',
        '6998jYNjxp',
        'level',
        '14sceygM',
        '254YpAWhH',
        'maxsize',
        '3147yZaGxi',
        '\x20-\x20',
        'erty',
        '6642290hkOtVf',
        'prod',
        'colorize',
        '__importDe',
        'fault',
        'value',
        'format',
        'winston',
        'combine',
        'timestamp',
        'stack',
        'createLogg',
        'File',
        '4123230ruFgGN',
        'handleExce',
        'prettyPrin',
        'NODE_ENV',
        'Http',
        '.logg',
        'transports',
        '2762829hNZCNQ',
        '__esModule',
        'default',
        '4451645laZvNp',
        'printf',
        'debug',
        'Console',
        'error',
        'maxFiles',
        'info',
        'defineProp',
        'warn'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[C(0x115) + C(0x116)] || function (c) {
    const E = D;
    return c && c[E(0x127)] ? c : { 'default': c };
};
const w = {};
w[C(0x117)] = !![], Object[C(0x130) + C(0x111)](exports, D(0x127), w), exports[D(0x13a)] = void (-0x20f2 + 0x1 * -0x713 + -0x2ab * -0xf);
const winston_1 = __importDefault(require(C(0x119))), x = {};
x[D(0x11c)] = !![];
const jsonLogFileFormat = winston_1[D(0x128)][C(0x118)][D(0x11a)](winston_1[C(0x128)][C(0x118)][C(0x137)](x), winston_1[D(0x128)][C(0x118)][C(0x11b)](), winston_1[C(0x128)][C(0x118)][C(0x121) + 't']());
let env = C(0x113);
process[C(0x138)]?.[C(0x122)] && (env = process[D(0x138)][C(0x122)]);
const level = env === C(0x113) ? C(0x12f) : D(0x12b), y = {};
y[D(0x11c)] = !![];
const z = {};
z[C(0x134)] = C(0x139) + D(0x124), z[D(0x10b)] = D(0x12d), z[D(0x120) + C(0x133)] = !![], z[C(0x10e)] = 0xa00000, z[C(0x12e)] = 0xa;
const logger = winston_1[C(0x128)][D(0x11d) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x128))][(D(0x125))][(C(0x12c))]({
            'format': winston_1[C(0x128)][D(0x118)][C(0x11a)](winston_1[C(0x128)][C(0x118)][D(0x137)](y), winston_1[D(0x128)][D(0x118)][C(0x114)](), winston_1[D(0x128)][C(0x118)][D(0x12a)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x110) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x128))][(D(0x125))][(C(0x11e))](z),
        new winston_1[(C(0x128))][(C(0x125))][(C(0x123))]({
            'level': C(0x131),
            'format': winston_1[D(0x128)][C(0x118)][D(0x135)]()
        })
    ]
});
exports[C(0x13a)] = logger;