'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x161)) / (-0x3f9 + 0x557 * -0x1 + 0x951) * (parseInt(A(0x140)) / (-0xb * -0x239 + 0x257c + -0x3ded)) + -parseInt(A(0x14f)) / (0x219 * -0x11 + -0x52c + -0x4 * -0xa36) * (parseInt(B(0x13a)) / (0x1f9 * -0x9 + -0x1 * -0x1cf7 + -0xb32)) + parseInt(B(0x136)) / (-0x1f96 + 0x26ff + -0x764) + -parseInt(A(0x141)) / (-0x12ca + -0x607 + -0x18d7 * -0x1) * (-parseInt(B(0x157)) / (-0x9 * 0x256 + 0x93a * -0x1 + 0x151 * 0x17)) + -parseInt(B(0x164)) / (-0x1b5d + 0x604 + -0x1 * -0x1561) * (-parseInt(B(0x133)) / (-0x2 * 0x8a + -0x21b5 + 0x22d2 * 0x1)) + -parseInt(B(0x13b)) / (-0x1d2c + 0x5e7 * 0x3 + 0xb81) * (-parseInt(A(0x149)) / (0x14db + -0x7d4 + 0x4 * -0x33f)) + -parseInt(B(0x14c)) / (-0x22c * -0x9 + -0x3 * -0x51f + 0x4b * -0x77) * (parseInt(B(0x14d)) / (-0x7 * -0x4fc + 0x1e9 * -0x1 + -0x20ee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x189fac + 0x116a2b * -0x1 + 0x5619b));
var __importDefault = this && this[C(0x156) + D(0x15e)] || function (c) {
    const E = D;
    return c && c[E(0x13d)] ? c : { 'default': c };
};
const w = {};
w[C(0x148)] = !![], Object[D(0x158) + C(0x154)](exports, D(0x13d), w), exports[C(0x134)] = void (0xd * 0x25f + -0x139 + 0x4ef * -0x6);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14f0 * -0x1 + 0x19 * 0x3a + -0x1968);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'printf',
        'info',
        '9TeWtTi',
        'logger',
        'Http',
        '7910710lPQLlK',
        'error',
        'createLogg',
        '.logg',
        '4LepQFv',
        '13561090rITxAN',
        './logs/app',
        '__esModule',
        'transports',
        'prettyPrin',
        '2609674DQXMBh',
        '45048aBQrfb',
        'ptions',
        '\x20-\x20',
        'prod',
        'combine',
        'colorize',
        'maxFiles',
        'value',
        '11GJmjIe',
        'default',
        'errors',
        '12kUZNEk',
        '55362086oxRbcr',
        'NODE_ENV',
        '1827663BYJKDw',
        'winston',
        'stack',
        'env',
        'File',
        'erty',
        'filename',
        '__importDe',
        '427Nfzyme',
        'defineProp',
        'handleExce',
        'timestamp',
        'format',
        'debug',
        'Console',
        'fault',
        'level',
        'warn',
        '1qJMTXz',
        'json',
        'maxsize',
        '7935064TyHyLJ'
    ];
    a = function () {
        return G;
    };
    return a();
}
const winston_1 = __importDefault(require(D(0x150))), x = {};
x[D(0x151)] = !![];
const jsonLogFileFormat = winston_1[C(0x14a)][C(0x15b)][C(0x145)](winston_1[D(0x14a)][D(0x15b)][C(0x14b)](x), winston_1[C(0x14a)][D(0x15b)][D(0x15a)](), winston_1[C(0x14a)][C(0x15b)][C(0x13f) + 't']());
let env = C(0x144);
process[D(0x152)]?.[D(0x14e)] && (env = process[D(0x152)][D(0x14e)]);
const level = env === D(0x144) ? C(0x132) : D(0x15c), y = {};
y[C(0x151)] = !![];
const z = {};
z[C(0x155)] = D(0x13c) + C(0x139), z[C(0x15f)] = D(0x137), z[D(0x159) + D(0x142)] = !![], z[D(0x163)] = 0xa00000, z[C(0x147)] = 0xa;
const logger = winston_1[D(0x14a)][C(0x138) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(D(0x14a))][(D(0x13e))][(C(0x15d))]({
            'format': winston_1[D(0x14a)][C(0x15b)][C(0x145)](winston_1[C(0x14a)][D(0x15b)][D(0x14b)](y), winston_1[C(0x14a)][D(0x15b)][D(0x146)](), winston_1[C(0x14a)][D(0x15b)][D(0x165)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = C;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x143) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(D(0x14a))][(C(0x13e))][(C(0x153))](z),
        new winston_1[(D(0x14a))][(C(0x13e))][(D(0x135))]({
            'level': D(0x160),
            'format': winston_1[C(0x14a)][D(0x15b)][D(0x162)]()
        })
    ]
});
exports[C(0x134)] = logger;