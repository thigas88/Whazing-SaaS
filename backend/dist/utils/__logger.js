'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x9c)) / (0x113a + 0x2627 + -0x3760) * (parseInt(q(0x94)) / (0x7d * 0x4d + 0x20be + -0x4655)) + -parseInt(p(0x8b)) / (0x139c + -0x11 * -0x211 + -0xf * 0x3a6) + -parseInt(p(0x90)) / (0x131b + -0x3d + -0x7f * 0x26) * (parseInt(q(0x96)) / (-0x335 * -0x2 + 0x3d7 * 0x5 + 0x6 * -0x444)) + parseInt(p(0x99)) / (-0x134 + -0x1801 + 0x193b) + parseInt(q(0x9e)) / (-0x172f + 0xc0e + 0xb28) + -parseInt(q(0x98)) / (-0x9a7 + 0x1830 + -0xe81) * (-parseInt(p(0xa3)) / (-0x8b5 * -0x1 + 0x6 * 0x134 + -0x9 * 0x1c4)) + -parseInt(p(0x9b)) / (0x1 * 0x26fd + -0xa97 * 0x3 + -0x72e) * (parseInt(q(0xa0)) / (-0x2622 + 0x18c2 + 0xd6b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1637b + 0xe * 0x5e7c + 0x3 * 0xb25f));
var __importDefault = this && this[r(0x9f) + r(0x8e)] || function (c) {
    const t = r;
    return c && c[t(0x8a)] ? c : { 'default': c };
};
const k = {};
k[r(0x8d)] = !![], Object[r(0x95) + s(0x8c)](exports, r(0x8a), k), exports[s(0x86)] = void (0x1f * -0x9 + -0x296 * -0x7 + 0x43 * -0x41);
const pino_1 = __importDefault(require(r(0x97))), l = {};
l[s(0x87)] = !![], l[s(0x88)] = s(0x9d);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2126 + -0x2286 + -0x6 * -0x51);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[s(0x91)] = s(0xa1) + 'me';
const n = {};
n[r(0x87)] = !![], n[r(0x88)] = s(0x9d), n[s(0x92) + 't'] = m;
const o = {};
o[s(0xa2)] = l, o[s(0x93)] = n;
const configPino = o;
let env = r(0x93);
function a() {
    const u = [
        '207251PlGOFN',
        'pid,hostna',
        'dev',
        '9SqbxNA',
        'logger',
        'enabled',
        'level',
        'NODE_ENV',
        '__esModule',
        '1498782Mwqyyc',
        'erty',
        'value',
        'fault',
        'env',
        '388kkOITJ',
        'ignore',
        'prettyPrin',
        'prod',
        '585664LrUkJb',
        'defineProp',
        '28540JzVdyJ',
        'pino',
        '5830248NYNilb',
        '2819340UTfLOg',
        'default',
        '30ZEtrQM',
        '1QdIvrA',
        'info',
        '20356DFZZwY',
        '__importDe'
    ];
    a = function () {
        return u;
    };
    return a();
}
process[r(0x8f)]?.[s(0x89)] && (env = process[s(0x8f)][s(0x89)]);
const logger = (0x885 + 0x1832 + -0x20b7, pino_1[s(0x9a)])(env === s(0x93) ? configPino[r(0x93)] : configPino[r(0xa2)]);
exports[s(0x86)] = logger;