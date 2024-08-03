'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1d4)) / (-0x30d * 0x1 + 0x19b8 + 0x6 * -0x3c7) + -parseInt(B(0x1b1)) / (-0x2071 + 0xb * 0x2fb + -0x56) + -parseInt(A(0x1de)) / (-0x959 * -0x1 + 0x1a56 + -0x23ac) + -parseInt(B(0x1c3)) / (0xa * -0x209 + 0x1 * -0x127 + 0x7 * 0x313) + -parseInt(A(0x1c9)) / (-0x12a8 * 0x1 + -0x1 * 0x9ef + 0x1c9c) * (parseInt(B(0x1d9)) / (-0xf0b + -0x2578 + 0x3489)) + -parseInt(B(0x1cb)) / (-0xb2e + -0x1c91 + 0x27c6) + parseInt(A(0x1d5)) / (-0x1f9e + 0x1018 + 0xf8e) * (parseInt(A(0x1d7)) / (-0x1a1b + -0x1b92 + 0x35b6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15391 * -0x8 + 0x368f3 * -0x5 + 0x24af47));
var __importDefault = this && this[C(0x1b5) + C(0x1b4)] || function (c) {
    const E = D;
    return c && c[E(0x1c4)] ? c : { 'default': c };
};
const w = {};
w[C(0x1da)] = !![], Object[D(0x1dd) + C(0x1d6)](exports, C(0x1c4), w), exports[D(0x1be)] = void (-0x14f2 + -0x53b * -0x2 + 0xa7c);
const winston_1 = __importDefault(require(D(0x1ba))), x = {};
x[D(0x1d1)] = !![];
const jsonLogFileFormat = winston_1[C(0x1bd)][D(0x1c5)][C(0x1b7)](winston_1[C(0x1bd)][D(0x1c5)][C(0x1b9)](x), winston_1[C(0x1bd)][C(0x1c5)][C(0x1d0)](), winston_1[C(0x1bd)][D(0x1c5)][D(0x1c0) + 't']());
let env = D(0x1dc);
process[D(0x1b6)]?.[D(0x1ce)] && (env = process[D(0x1b6)][C(0x1ce)]);
const level = env === C(0x1dc) ? D(0x1db) : D(0x1cc), y = {};
y[D(0x1d1)] = !![];
const z = {};
z[D(0x1d8)] = C(0x1b3) + D(0x1c7), z[C(0x1c2)] = C(0x1b8), z[D(0x1c6) + D(0x1cd)] = !![], z[C(0x1bc)] = 0xa00000, z[C(0x1b2)] = 0xa;
const logger = winston_1[D(0x1bd)][D(0x1bb) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(D(0x1bd))][(C(0x1c1))][(D(0x1b0))]({
            'format': winston_1[D(0x1bd)][C(0x1c5)][C(0x1b7)](winston_1[D(0x1bd)][D(0x1c5)][D(0x1b9)](y), winston_1[D(0x1bd)][D(0x1c5)][C(0x1bf)](), winston_1[C(0x1bd)][D(0x1c5)][C(0x1d2)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = C;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x1ca) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x1bd))][(D(0x1c1))][(D(0x1c8))](z),
        new winston_1[(D(0x1bd))][(D(0x1c1))][(D(0x1af))]({
            'level': D(0x1d3),
            'format': winston_1[D(0x1bd)][D(0x1c5)][C(0x1cf)]()
        })
    ]
});
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1ebb + 0x6d * 0x2b + 0x17 * 0x9d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'error',
        'errors',
        'winston',
        'createLogg',
        'maxsize',
        'default',
        'logger',
        'colorize',
        'prettyPrin',
        'transports',
        'level',
        '3859724lBQaPH',
        '__esModule',
        'format',
        'handleExce',
        '.logg',
        'File',
        '1046395RIimsw',
        '\x20-\x20',
        '2535715SAhsFG',
        'debug',
        'ptions',
        'NODE_ENV',
        'json',
        'timestamp',
        'stack',
        'printf',
        'warn',
        '271691KprwOC',
        '25621144GbtRGc',
        'erty',
        '9zlCoPF',
        'filename',
        '6LLebZF',
        'value',
        'info',
        'prod',
        'defineProp',
        '1128786HCkEDK',
        'Http',
        'Console',
        '853750igYqGk',
        'maxFiles',
        './logs/app',
        'fault',
        '__importDe',
        'env',
        'combine'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[C(0x1be)] = logger;