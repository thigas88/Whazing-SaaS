'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x10f)) / (-0xe76 + 0x1d5 * 0x8 + -0x31) + parseInt(n(0x113)) / (-0x2df + 0x20b9 + -0x1dd8) * (parseInt(n(0x112)) / (0x1 * -0x1c2b + -0x4f * 0x5d + 0x38e1)) + -parseInt(n(0x128)) / (0x12a + -0x1f0d * 0x1 + -0x1de7 * -0x1) * (-parseInt(n(0x11a)) / (0xba1 * -0x3 + -0x116d + -0x3455 * -0x1)) + -parseInt(n(0x114)) / (0x2710 + -0x115f * -0x1 + -0x3869) + -parseInt(m(0x120)) / (0x3 * 0x715 + -0x1 * 0x31 + -0x301 * 0x7) * (parseInt(n(0x123)) / (-0x59e + -0x3ee + -0x1 * -0x994)) + -parseInt(m(0x117)) / (-0x466 + 0x1d1c + -0x18ad) + -parseInt(m(0x121)) / (-0x1656 + 0xe6 * -0x11 + 0x25a6) * (-parseInt(n(0x126)) / (-0x7 * 0x2d8 + 0x407 * -0x2 + 0x43 * 0x6b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x41669 * -0x5 + -0x95a2 * -0x22 + 0x58a5 * 0x25));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4c3 + 0xc17 + 0xf * -0x6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x115) + o(0x12a)] || function (c) {
    const q = p;
    return c && c[q(0x127)] ? c : { 'default': c };
};
const k = {};
k[o(0x122)] = !![], Object[p(0x11b) + o(0x11c)](exports, p(0x127), k);
function a() {
    const t = [
        'erty',
        'P_FOUND',
        '../../erro',
        'default',
        '14mIrrxe',
        '2193620lTGUPj',
        'value',
        '5249616cKiiWH',
        'jjsnr',
        '../../mode',
        '77BAltgS',
        '__esModule',
        '19292zZCLHt',
        'where',
        'fault',
        '1463586Qgcffl',
        'rs/AppErro',
        'ls/Help',
        '6207QNVhwI',
        '596bZxPqk',
        '5826438nMWUrK',
        '__importDe',
        'findOne',
        '10278774OHBKqn',
        'ERR_NO_HEL',
        'destroy',
        '635EFPHIq',
        'defineProp'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Help_1 = __importDefault(require(p(0x125) + o(0x111))), AppError_1 = __importDefault(require(p(0x11e) + o(0x110) + 'r')), DeleteService = async f => {
        const r = o, s = o, g = {};
        g[r(0x124)] = s(0x118) + s(0x11d);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x129)] = i;
        const l = await Help_1[s(0x11f)][s(0x116)](j);
        if (!l)
            throw new AppError_1[(s(0x11f))](h[s(0x124)], 0x2 * 0xab + -0x13 * 0x1f7 + 0x2593);
        await l[r(0x119)]();
    };
exports[o(0x11f)] = DeleteService;