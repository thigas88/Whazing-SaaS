'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xe3)) / (-0x49 * -0x2a + -0x2 * 0x755 + 0x1 * 0x2b1) + -parseInt(m(0xe8)) / (-0x31 * -0x9d + 0x6 * 0x626 + -0x42ef) * (-parseInt(n(0xea)) / (-0x53c + 0x1534 + -0xff5)) + parseInt(n(0xf4)) / (-0x80c + -0x805 * -0x1 + 0xb) + -parseInt(m(0xe6)) / (0x454 + 0x5f6 + -0xa45) + parseInt(n(0xec)) / (0x63f * -0x3 + -0x2 * -0x131a + -0x3f * 0x4f) + -parseInt(n(0xe4)) / (0x2b2 + 0x5a8 + -0x1 * 0x853) * (parseInt(m(0xdc)) / (-0x1b9 * -0x7 + 0x28 * -0x3 + 0x1 * -0xb8f)) + parseInt(m(0xe7)) / (-0x1038 + 0x542 + 0x233 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * -0x3cfd + -0x11 * 0x1de1 + 0x2b308));
var __importDefault = this && this[o(0xde) + p(0xe0)] || function (c) {
    const q = o;
    return c && c[q(0xf2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x180b + 0x16b0 + 0x236);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '__esModule',
        'rs/AppErro',
        '564884jvVdax',
        'findOne',
        '922304WSiqwN',
        'P_FOUND',
        '__importDe',
        'EhpFh',
        'fault',
        'value',
        '../../erro',
        '855DiyGeO',
        '7LJvDXR',
        'defineProp',
        '1037150AvVOnU',
        '1215873yCtbPx',
        '1578KkaUOW',
        'destroy',
        '105JAnhYI',
        'default',
        '763518gOQsib',
        'ERR_NO_HEL',
        'erty',
        'where',
        'ls/Help',
        '../../mode'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0xe1)] = !![], Object[p(0xe5) + p(0xee)](exports, o(0xf2), k);
const Help_1 = __importDefault(require(o(0xf1) + p(0xf0))), AppError_1 = __importDefault(require(o(0xe2) + p(0xf3) + 'r')), DeleteService = async f => {
        const r = o, s = p, g = {};
        g[r(0xdf)] = r(0xed) + r(0xdd);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0xef)] = i;
        const l = await Help_1[s(0xeb)][s(0xdb)](j);
        if (!l)
            throw new AppError_1[(s(0xeb))](h[s(0xdf)], -0x1 * -0x1d68 + -0x16d2 + -0x502);
        await l[r(0xe9)]();
    };
exports[o(0xeb)] = DeleteService;