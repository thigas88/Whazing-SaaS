'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0xe5)) / (0x4 * 0x78a + -0xbc * 0x2b + 0x16d * 0x1) * (parseInt(A(0xef)) / (0x20c + -0x4 * 0x2b3 + -0x13 * -0x76)) + parseInt(A(0xf9)) / (-0x18ad + 0x21b * 0x7 + 0x351 * 0x3) * (parseInt(A(0xf1)) / (0x1a71 + -0x20f2 + -0x1 * -0x685)) + -parseInt(A(0xfe)) / (0x2f * 0x89 + 0x8a * 0x47 + -0x3f68) * (-parseInt(A(0xf5)) / (0x33f * 0x7 + -0x13 * -0x1a2 + -0x35b9)) + parseInt(A(0xf0)) / (-0x181b + -0x1 * -0x6e1 + 0x1141) + -parseInt(A(0xfa)) / (-0x11db + -0x6 * -0x603 + 0xf5 * -0x13) + -parseInt(B(0xe4)) / (-0x2 * -0xc1f + 0x197d + 0x2 * -0x18d9) * (-parseInt(B(0xf4)) / (-0x665 + 0x1335 + -0x147 * 0xa)) + -parseInt(A(0xf6)) / (-0x411 * 0x3 + -0x11f8 + 0x1e36) * (parseInt(B(0x104)) / (-0x1 * -0x752 + 0x1be8 + -0x232e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x9a38b + -0xc382e + 0x8b925));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b9 * -0x1 + -0xd21 * 0x1 + 0xc4b * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x10b) + D(0x10c)] || function (c) {
    const E = C;
    return c && c[E(0x109)] ? c : { 'default': c };
};
const w = {};
w[C(0x111)] = !![], Object[D(0x10e) + C(0x10f)](exports, C(0x109), w), exports[C(0x113)] = void (0x79 * 0x13 + -0xb3 * -0x1 + -0x4d7 * 0x2);
function a() {
    const G = [
        'warn',
        'File',
        '377109aksarD',
        '1766DYdAod',
        'winston',
        'stack',
        'transports',
        'level',
        '\x20-\x20',
        'filename',
        'Http',
        'debug',
        'ptions',
        '64cQDBjq',
        '5089847jZhTYQ',
        '5492DJdHyQ',
        'json',
        'NODE_ENV',
        '90hsKUGo',
        '1992BnpfBW',
        '12067HpnPRa',
        'maxsize',
        'Console',
        '1197Eujvic',
        '2147552aCbisM',
        'colorize',
        'format',
        'maxFiles',
        '400WjrPpz',
        '.logg',
        'prod',
        'default',
        'error',
        'combine',
        '10404ABOxGO',
        'timestamp',
        'handleExce',
        'errors',
        './logs/app',
        '__esModule',
        'printf',
        '__importDe',
        'fault',
        'info',
        'defineProp',
        'erty',
        'createLogg',
        'value',
        'prettyPrin',
        'logger',
        'env'
    ];
    a = function () {
        return G;
    };
    return a();
}
const winston_1 = __importDefault(require(D(0xe6))), x = {};
x[D(0xe7)] = !![];
const jsonLogFileFormat = winston_1[C(0x101)][D(0xfc)][D(0x103)](winston_1[C(0x101)][C(0xfc)][D(0x107)](x), winston_1[D(0x101)][D(0xfc)][D(0x105)](), winston_1[C(0x101)][C(0xfc)][D(0x112) + 't']());
let env = D(0x100);
process[D(0x114)]?.[D(0xf3)] && (env = process[C(0x114)][D(0xf3)]);
const level = env === C(0x100) ? D(0x10d) : D(0xed), y = {};
y[C(0xe7)] = !![];
const z = {};
z[D(0xeb)] = D(0x108) + D(0xff), z[C(0xe9)] = D(0x102), z[D(0x106) + D(0xee)] = !![], z[C(0xf7)] = 0xa00000, z[C(0xfd)] = 0xa;
const logger = winston_1[D(0x101)][C(0x110) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x101))][(D(0xe8))][(D(0xf8))]({
            'format': winston_1[C(0x101)][C(0xfc)][D(0x103)](winston_1[C(0x101)][C(0xfc)][C(0x107)](y), winston_1[D(0x101)][D(0xfc)][C(0xfb)](), winston_1[D(0x101)][C(0xfc)][C(0x10a)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0xea) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(D(0x101))][(C(0xe8))][(C(0xe3))](z),
        new winston_1[(C(0x101))][(C(0xe8))][(D(0xec))]({
            'level': D(0x115),
            'format': winston_1[D(0x101)][C(0xfc)][C(0xf2)]()
        })
    ]
});
exports[C(0x113)] = logger;