'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x154)) / (0xd37 + -0x1 * 0x1b44 + 0x2 * 0x707) * (-parseInt(p(0x13f)) / (-0x1c * -0xe4 + -0x21d8 + 0x8ea)) + parseInt(p(0x13d)) / (-0xd * -0x1bd + -0x2a7 + 0x237 * -0x9) * (parseInt(p(0x14c)) / (-0x2220 + 0x1fbd + -0x5 * -0x7b)) + parseInt(p(0x13e)) / (0xe61 + -0x109e + 0x22 * 0x11) + -parseInt(q(0x145)) / (-0x27 * 0x16 + 0xff3 + -0xc93) + parseInt(p(0x14e)) / (-0x2479 * -0x1 + 0x185d + 0x1445 * -0x3) * (-parseInt(q(0x151)) / (-0x1d8b + -0x1f * 0x105 + 0x3d2e)) + parseInt(p(0x153)) / (0x10bc + 0x44 + 0x65 * -0x2b) * (-parseInt(q(0x152)) / (-0xef6 + 0x169d + 0x1 * -0x79d)) + -parseInt(q(0x146)) / (-0x692 + -0x22 * -0xb3 + 0x1 * -0x1129) * (-parseInt(q(0x143)) / (-0x1 * 0x23c1 + -0x22e0 + 0x46ad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1943b * 0x1 + -0xfad * 0x49 + 0xb9883));
var __importDefault = this && this[r(0x13b) + s(0x149)] || function (c) {
    const t = r;
    return c && c[t(0x14d)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8a8 + 0x7cb * -0x5 + -0xcf * -0x27);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x142)] = !![], Object[s(0x147) + r(0x148)](exports, r(0x14d), k), exports[s(0x14b)] = void (0xdb6 + -0x1 * -0x1f84 + 0x33b * -0xe);
const pino_1 = __importDefault(require(r(0x13a))), l = {};
l[r(0x141)] = !![], l[r(0x150)] = r(0x140);
const m = {};
m[r(0x155)] = r(0x158) + 'me';
const n = {};
n[s(0x141)] = !![], n[r(0x150)] = s(0x140), n[s(0x157) + 't'] = m;
const o = {};
o[r(0x14a)] = l, o[s(0x14f)] = n;
const configPino = o;
let env = r(0x14f);
function a() {
    const u = [
        'env',
        '164058hHkdmF',
        '6337441PYXVEu',
        'defineProp',
        'erty',
        'fault',
        'dev',
        'logger',
        '712644udASTb',
        '__esModule',
        '168924cKiZKG',
        'prod',
        'level',
        '176WAuEku',
        '260TprXkL',
        '250029EAyGQc',
        '1dDMqrf',
        'ignore',
        'NODE_ENV',
        'prettyPrin',
        'pid,hostna',
        'pino',
        '__importDe',
        'default',
        '3tBduhK',
        '1593045dYmmSd',
        '1162206vXfrhY',
        'info',
        'enabled',
        'value',
        '36gpJHaF'
    ];
    a = function () {
        return u;
    };
    return a();
}
process[r(0x144)]?.[r(0x156)] && (env = process[r(0x144)][r(0x156)]);
const logger = (-0x208 + -0x1 * -0x1f88 + -0x1d80, pino_1[s(0x13c)])(env === r(0x14f) ? configPino[r(0x14f)] : configPino[s(0x14a)]);
exports[s(0x14b)] = logger;