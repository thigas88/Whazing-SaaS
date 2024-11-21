'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d6)) / (0x89d + 0x3da + -0xc76) * (parseInt(p(0x1c5)) / (-0x51 * 0x15 + -0x1 * 0x860 + 0xf07)) + parseInt(p(0x1d3)) / (-0x21aa + -0x44 + 0x21f1 * 0x1) * (-parseInt(q(0x1c6)) / (-0x199c + -0xacb + -0x1 * -0x246b)) + parseInt(p(0x1da)) / (0x2 * -0xad9 + -0x2594 + 0x3b4b) * (-parseInt(p(0x1c7)) / (0x338 + -0x6d2 * 0x3 + -0x2 * -0x8a2)) + -parseInt(p(0x1cb)) / (-0x68b * -0x1 + -0x191 * 0x4 + -0x40) * (-parseInt(q(0x1c4)) / (0x1 * -0x6cd + -0x1782 * -0x1 + -0x10ad)) + -parseInt(q(0x1ca)) / (-0x1 * -0xa39 + -0x46 * -0x18 + -0x10c0) + -parseInt(p(0x1c3)) / (0x13c7 + 0x1beb + -0xf4 * 0x32) * (parseInt(q(0x1dd)) / (-0x1e41 + 0x5 * 0x234 + 0x1348)) + -parseInt(p(0x1d9)) / (0x6 * 0x5a7 + -0x1c * -0x7b + -0x2f52) * (-parseInt(p(0x1db)) / (-0x459 + 0x1846 + -0x1 * 0x13e0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x24dfd + -0x1 * 0x68405 + -0x1caa * -0x6f));
var __importDefault = this && this[r(0x1c0) + s(0x1c8)] || function (c) {
    const t = s;
    return c && c[t(0x1c1)] ? c : { 'default': c };
};
function a() {
    const u = [
        'dev',
        'erty',
        '__importDe',
        '__esModule',
        'NODE_ENV',
        '3530JHZQJB',
        '168BLBDlE',
        '122682tlqzFi',
        '105456xgWXVv',
        '78702rqMHqQ',
        'fault',
        'pid,hostna',
        '8750970ivRjDY',
        '274393WYGaLZ',
        'ignore',
        'level',
        'prettyPrin',
        'info',
        'prod',
        'logger',
        'env',
        '120GcJNKt',
        'value',
        'enabled',
        '3IsKGpO',
        'pino',
        'defineProp',
        '36fVgtNN',
        '235hhNKXd',
        '13958711cBqGLD',
        'default',
        '21142aPuVbu'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0xeb1 + -0x11db + 0xdc * 0x39);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x1d4)] = !![], Object[r(0x1d8) + r(0x1bf)](exports, r(0x1c1), k), exports[r(0x1d1)] = void (-0x26a2 + -0x12f0 + 0x3992);
const pino_1 = __importDefault(require(s(0x1d7))), l = {};
l[r(0x1d5)] = !![], l[r(0x1cd)] = r(0x1cf);
const m = {};
m[r(0x1cc)] = r(0x1c9) + 'me';
const n = {};
n[r(0x1d5)] = !![], n[s(0x1cd)] = r(0x1cf), n[r(0x1ce) + 't'] = m;
const o = {};
o[r(0x1de)] = l, o[s(0x1d0)] = n;
const configPino = o;
let env = s(0x1d0);
process[s(0x1d2)]?.[r(0x1c2)] && (env = process[s(0x1d2)][s(0x1c2)]);
const logger = (-0x1292 + 0x3 * 0x14f + 0xea5, pino_1[s(0x1dc)])(env === s(0x1d0) ? configPino[s(0x1d0)] : configPino[r(0x1de)]);
exports[r(0x1d1)] = logger;