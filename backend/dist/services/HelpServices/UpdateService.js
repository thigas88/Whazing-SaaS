'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf76 + 0x2077 * -0x1 + 0x12b8 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1cb)) / (-0x1 * -0x6be + -0x1 * 0x136f + 0xcb2) + -parseInt(m(0x1c4)) / (-0x157a + 0x32d * -0x1 + 0x18a9) + -parseInt(l(0x1cd)) / (0x22db + -0x1ac3 * 0x1 + -0x815) * (-parseInt(l(0x1c1)) / (0x18ea + -0xa04 + 0x1e * -0x7f)) + -parseInt(m(0x1c0)) / (-0x1a + -0x14 * -0x94 + -0x1 * 0xb71) * (parseInt(m(0x1cf)) / (-0x1fcc + 0x1fdf + 0x1 * -0xd)) + -parseInt(l(0x1b8)) / (0x3 * -0x311 + 0x1c3 * -0xb + 0x3 * 0x989) + -parseInt(l(0x1ca)) / (-0x772 + 0x1cb2 + -0x1538) * (-parseInt(l(0x1c3)) / (0x46 * 0x26 + 0x45b + -0xeb6)) + parseInt(l(0x1c2)) / (-0x20ac + -0x4 * 0x19f + -0x1d * -0x15a) * (parseInt(m(0x1d1)) / (0x5 * -0x23f + -0x3bb * 0x1 + -0x17 * -0xa7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x30a7 + -0x83da7 + 0xd7919));
function a() {
    const s = [
        '379069ZZVXDj',
        'erty',
        '1488xaaCMi',
        'rs/AppErro',
        '13494hqbDua',
        'defineProp',
        '39149DkACxP',
        '../../erro',
        '3245767JiUETb',
        'update',
        '__esModule',
        'value',
        'default',
        '__importDe',
        'findByPk',
        'ERR_NO_HEL',
        '555JWQTAY',
        '20edxEDM',
        '3520SjeSgP',
        '935181xnTBha',
        '30648DwSxzt',
        'fault',
        'ls/Help',
        'NZrJX',
        'P_FOUND',
        '../../mode',
        '16yQGXoB'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1bd) + n(0x1c5)] || function (c) {
    const p = n;
    return c && c[p(0x1ba)] ? c : { 'default': c };
};
const k = {};
k[n(0x1bb)] = !![], Object[o(0x1d0) + n(0x1cc)](exports, o(0x1ba), k);
const AppError_1 = __importDefault(require(o(0x1b7) + n(0x1ce) + 'r')), Help_1 = __importDefault(require(o(0x1c9) + o(0x1c6))), UpdateService = async d => {
        const q = n, r = n, e = {};
        e[q(0x1c7)] = r(0x1bf) + q(0x1c8);
        const f = e, {id: g} = d, h = await Help_1[q(0x1bc)][q(0x1be)](g);
        if (!h)
            throw new AppError_1[(q(0x1bc))](f[q(0x1c7)], -0x31d * -0x7 + 0x2 * -0x5 + -0x142d);
        return await h[r(0x1b9)](d), h;
    };
exports[o(0x1bc)] = UpdateService;