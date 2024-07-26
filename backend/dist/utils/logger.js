'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x14d)) / (-0x2579 + 0x53 * -0x24 + 0x3126) * (parseInt(B(0x142)) / (-0x1658 + -0x1 * 0x6a1 + 0x1cfb)) + -parseInt(A(0x149)) / (0x1 * -0xaca + 0x2687 + -0xb6 * 0x27) + parseInt(B(0x146)) / (-0x1 * 0x1a4b + 0x8b * 0x19 + 0xcbc) * (parseInt(B(0x134)) / (-0x129 * 0xb + -0x15 * 0x1b6 + 0x30b6)) + parseInt(A(0x13c)) / (-0x3a3 + -0x17b + -0x1 * -0x524) * (-parseInt(B(0x14e)) / (-0x2de * -0x9 + 0xdff * 0x2 + -0x35c5)) + -parseInt(A(0x135)) / (-0x15e3 + -0x255a + 0x1 * 0x3b45) * (-parseInt(A(0x141)) / (0x101e * 0x2 + -0x1ab0 + 0x53 * -0x11)) + parseInt(A(0x13e)) / (-0x1 * -0x31c + -0x17 * 0x17f + 0x71 * 0x47) + -parseInt(B(0x13d)) / (-0x1689 + -0x11b1 + 0x2845) * (-parseInt(B(0x162)) / (0x5b7 + 0x1 * 0x25c6 + 0x1 * -0x2b71));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6d8ef * -0x1 + -0x1 * 0x523b7 + -0xd967 * -0xa));
function a() {
    const G = [
        'handleExce',
        'level',
        'errors',
        'transports',
        'prettyPrin',
        'Http',
        '3780768mQGKDq',
        'prod',
        'File',
        'NODE_ENV',
        'winston',
        '1295seYkcR',
        '2912104BthDke',
        'printf',
        'error',
        'maxFiles',
        'fault',
        'warn',
        'value',
        '341346ZuwUxj',
        '22ZmfyYZ',
        '4583060PPQXrc',
        'logger',
        'json',
        '18VYTfLP',
        '714484QZpgCg',
        'stack',
        'colorize',
        'info',
        '7252kGyUah',
        '__importDe',
        'erty',
        '442758wXOnCN',
        'maxsize',
        'timestamp',
        '.logg',
        '3TtzeuL',
        '49GvtwfI',
        'defineProp',
        'format',
        'filename',
        './logs/app',
        'Console',
        'createLogg',
        'env',
        'ptions',
        '\x20-\x20',
        'default',
        'combine',
        '__esModule',
        'debug'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[C(0x147) + C(0x139)] || function (c) {
    const E = D;
    return c && c[E(0x15a)] ? c : { 'default': c };
};
const w = {};
w[D(0x13b)] = !![], Object[D(0x14f) + D(0x148)](exports, D(0x15a), w), exports[C(0x13f)] = void (0x9f3 + 0xe3e + -0x1831);
const winston_1 = __importDefault(require(D(0x133))), x = {};
x[D(0x143)] = !![];
const jsonLogFileFormat = winston_1[D(0x158)][D(0x150)][D(0x159)](winston_1[D(0x158)][C(0x150)][D(0x15e)](x), winston_1[C(0x158)][C(0x150)][C(0x14b)](), winston_1[D(0x158)][D(0x150)][C(0x160) + 't']());
let env = C(0x163);
process[C(0x155)]?.[D(0x132)] && (env = process[D(0x155)][C(0x132)]);
const level = env === C(0x163) ? D(0x145) : C(0x15b), y = {};
y[C(0x143)] = !![];
const z = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x205 + 0x11ad + -0x1280);
        let h = e[f];
        return h;
    }, b(c, d);
}
z[D(0x151)] = C(0x152) + C(0x14c), z[C(0x15d)] = C(0x137), z[C(0x15c) + C(0x156)] = !![], z[C(0x14a)] = 0xa00000, z[D(0x138)] = 0xa;
const logger = winston_1[D(0x158)][C(0x154) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x158))][(D(0x15f))][(D(0x153))]({
            'format': winston_1[D(0x158)][C(0x150)][D(0x159)](winston_1[C(0x158)][C(0x150)][D(0x15e)](y), winston_1[D(0x158)][D(0x150)][C(0x144)](), winston_1[C(0x158)][C(0x150)][D(0x136)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x157) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x158))][(C(0x15f))][(D(0x164))](z),
        new winston_1[(C(0x158))][(C(0x15f))][(C(0x161))]({
            'level': C(0x13a),
            'format': winston_1[D(0x158)][C(0x150)][D(0x140)]()
        })
    ]
});
exports[D(0x13f)] = logger;