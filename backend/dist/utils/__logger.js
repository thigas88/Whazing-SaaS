'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x69)) / (-0x121 * 0x5 + -0x12cb * 0x1 + -0x1871 * -0x1) * (parseInt(p(0x7b)) / (-0x19fc * -0x1 + -0x122f * 0x1 + -0x7cb)) + parseInt(q(0x7d)) / (-0x19d0 + -0x12ac + 0xed5 * 0x3) + -parseInt(p(0x6e)) / (-0x190e + 0x30 * -0x7 + 0x1a62) + -parseInt(p(0x68)) / (-0xd17 + -0x1b7 * 0x2 + 0x108a) + parseInt(q(0x79)) / (-0x2 * -0x11bd + -0x514 + -0x360 * 0x9) * (-parseInt(q(0x74)) / (-0x25ee + 0x1f47 + 0xbe * 0x9)) + -parseInt(p(0x6f)) / (-0x1a8f + 0x4 * 0x3d6 + 0x1 * 0xb3f) * (parseInt(p(0x72)) / (0x13 * -0x74 + 0xab1 + -0x1 * 0x20c)) + parseInt(q(0x77)) / (-0x1 * -0x20eb + 0x10a3 + 0x3184 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfa * -0x34c + 0x412 * -0x4d1 + -0x5ad * -0x67d));
var __importDefault = this && this[r(0x73) + s(0x7c)] || function (c) {
    const t = r;
    return c && c[t(0x66)] ? c : { 'default': c };
};
const k = {};
k[s(0x78)] = !![], Object[r(0x67) + r(0x7f)](exports, r(0x66), k), exports[s(0x80)] = void (-0x18ee + -0x1d2 * 0x12 + 0x39b2);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f6 * -0x7 + 0x11 * -0xfb + 0x355 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'NODE_ENV',
        '__esModule',
        'defineProp',
        '6259940wjlSxo',
        '5QyjArl',
        'level',
        'dev',
        'prod',
        'info',
        '4053012KTvTsD',
        '12841912jNHqRt',
        'default',
        'enabled',
        '9quyfNi',
        '__importDe',
        '4792459SntcUo',
        'ignore',
        'env',
        '25335460eiVIuw',
        'value',
        '6NBTLKA',
        'pid,hostna',
        '669078FxbKjc',
        'fault',
        '3799569fynqSP',
        'prettyPrin',
        'erty',
        'logger',
        'pino'
    ];
    a = function () {
        return u;
    };
    return a();
}
const pino_1 = __importDefault(require(s(0x64))), l = {};
l[s(0x71)] = !![], l[r(0x6a)] = r(0x6d);
const m = {};
m[s(0x75)] = s(0x7a) + 'me';
const n = {};
n[r(0x71)] = !![], n[s(0x6a)] = r(0x6d), n[s(0x7e) + 't'] = m;
const o = {};
o[s(0x6b)] = l, o[s(0x6c)] = n;
const configPino = o;
let env = s(0x6c);
process[r(0x76)]?.[r(0x65)] && (env = process[r(0x76)][s(0x65)]);
const logger = (-0x50d * -0x1 + -0x1eac * 0x1 + 0x199f, pino_1[r(0x70)])(env === s(0x6c) ? configPino[r(0x6c)] : configPino[r(0x6b)]);
exports[r(0x80)] = logger;