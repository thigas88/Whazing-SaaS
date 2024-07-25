'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1e8)) / (-0x6e5 + -0x1ebb * 0x1 + 0x25a1) * (-parseInt(n(0x1d4)) / (-0x11 * -0x151 + 0x35 * 0x43 + -0x2 * 0x121f)) + parseInt(m(0x1e2)) / (0x17e + -0x1 * 0x16f + -0x1 * 0xc) + -parseInt(m(0x1dd)) / (-0x8 + -0x1a * -0xb8 + -0x12a4) * (parseInt(m(0x1d3)) / (0x9 * 0x426 + -0xd2d + -0x1824)) + parseInt(m(0x1e4)) / (-0xd57 * -0x1 + -0x1 * -0xa7 + -0xdf8) * (-parseInt(m(0x1eb)) / (0x4ab + -0x139e + 0xefa * 0x1)) + parseInt(m(0x1e9)) / (-0x22b9 + -0x1a99 + -0x2 * -0x1ead) * (parseInt(n(0x1df)) / (0x7c9 * -0x1 + -0x2118 + 0x28ea)) + -parseInt(n(0x1d5)) / (0x9f7 * 0x1 + -0xb12 * -0x1 + 0xd7 * -0x19) * (-parseInt(n(0x1e7)) / (-0x63 * 0x1 + -0xb37 + 0xba5)) + parseInt(n(0x1ed)) / (0x511 * 0x7 + -0x117c + -0x11ef) * (parseInt(m(0x1ea)) / (-0x1d92 + 0xd4 * 0x25 + -0x105));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x58d3e + -0x4a02d * -0x5 + -0xfb66c));
var __importDefault = this && this[o(0x1d6) + p(0x1db)] || function (c) {
    const q = o;
    return c && c[q(0x1e3)] ? c : { 'default': c };
};
function a() {
    const t = [
        '1qrDzKi',
        '23664epLjJE',
        '50977862PkQZfK',
        '164038NnfOXw',
        'erty',
        '12rfMhBC',
        'default',
        'rs/AppErro',
        'destroy',
        '3570755vQorLi',
        '2018460bMWUWd',
        '3230IWuVdd',
        '__importDe',
        '../../erro',
        '../../mode',
        'value',
        'ERR_NO_HEL',
        'fault',
        'where',
        '4oGTxhv',
        'QbKvg',
        '9EdntTB',
        'ls/Help',
        'findOne',
        '217320tFyBZa',
        '__esModule',
        '384URXwEh',
        'P_FOUND',
        'defineProp',
        '2596FjlbCs'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x1d9)] = !![], Object[p(0x1e6) + p(0x1ec)](exports, o(0x1e3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x545 * -0x1 + -0x1 * 0x1f3b + 0x1bc8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Help_1 = __importDefault(require(o(0x1d8) + p(0x1e0))), AppError_1 = __importDefault(require(p(0x1d7) + p(0x1ef) + 'r')), DeleteService = async f => {
        const r = o, s = o, g = {};
        g[r(0x1de)] = s(0x1da) + r(0x1e5);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x1dc)] = i;
        const l = await Help_1[r(0x1ee)][s(0x1e1)](j);
        if (!l)
            throw new AppError_1[(s(0x1ee))](h[r(0x1de)], 0x2 * 0x39b + 0x2044 + -0x25e6);
        await l[s(0x1d2)]();
    };
exports[o(0x1ee)] = DeleteService;