'use strict';
const n = b, o = b;
function a() {
    const s = [
        '2426JxpQuU',
        '../../erro',
        '131gTTbIR',
        'P_FOUND',
        '2040052xsUqaS',
        'erty',
        '__importDe',
        '306ILDPTq',
        '7367229ikQxry',
        '23396GKArCQ',
        'ERR_NO_HEL',
        'default',
        '289656cTEzGi',
        'rs/AppErro',
        'update',
        'defineProp',
        'value',
        'uokyc',
        '859360eDbXgj',
        '__esModule',
        '../../mode',
        '20PIJfWy',
        'findByPk',
        'ls/Help',
        '6519376XDuSKd',
        'fault'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x17a)) / (0x2 * -0x317 + 0x1 * 0x21ce + 0x935 * -0x3) * (-parseInt(l(0x178)) / (-0xcc3 + 0xf42 + -0x27d)) + parseInt(l(0x17f)) / (-0x110 * 0x11 + -0x29e + 0x14b1) * (parseInt(m(0x181)) / (0xdd6 + 0x1 * 0x10b0 + 0x1 * -0x1e82)) + parseInt(l(0x170)) / (0x99a + -0x2001 + -0x11f * -0x14) + parseInt(m(0x16a)) / (0x54d + -0xe52 + 0x90b) + parseInt(m(0x17c)) / (0xd26 + -0x16 * -0x1a2 + -0x310b) + parseInt(m(0x176)) / (-0x20b9 + -0x8 * 0x1f0 + 0x3041) + parseInt(m(0x180)) / (0x24f8 + 0xcc * 0x6 + -0xb5 * 0x3b) * (-parseInt(m(0x173)) / (0x22c5 * 0x1 + -0x1 * 0x119b + -0x89 * 0x20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd1a68 + 0x1 * -0x5f5a9 + -0x5b12));
var __importDefault = this && this[n(0x17e) + o(0x177)] || function (c) {
    const p = n;
    return c && c[p(0x171)] ? c : { 'default': c };
};
const k = {};
k[o(0x16e)] = !![], Object[o(0x16d) + o(0x17d)](exports, n(0x171), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbf9 * 0x2 + -0x18ca + 0x3226);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(o(0x179) + n(0x16b) + 'r')), Help_1 = __importDefault(require(o(0x172) + o(0x175))), UpdateService = async d => {
        const q = o, r = o, e = {};
        e[q(0x16f)] = r(0x182) + r(0x17b);
        const f = e, {id: g} = d, h = await Help_1[r(0x183)][r(0x174)](g);
        if (!h)
            throw new AppError_1[(q(0x183))](f[r(0x16f)], 0x21f6 + -0x1 * -0x2fb + -0x337 * 0xb);
        return await h[r(0x16c)](d), h;
    };
exports[o(0x183)] = UpdateService;