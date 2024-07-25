'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1d9)) / (0x1a64 + 0x23d0 + 0x1 * -0x3e33) * (parseInt(l(0x1e4)) / (0x62 * 0x35 + 0x1522 + -0x296a)) + parseInt(m(0x1d3)) / (-0x15c3 + 0x2434 + 0x1 * -0xe6e) + -parseInt(m(0x1e7)) / (0x229d * 0x1 + 0x25e4 + -0x487d) + parseInt(l(0x1d6)) / (-0x170 + -0x1 * -0x1273 + -0x10fe) * (-parseInt(m(0x1d1)) / (0x3f * -0x97 + 0x1d55 + 0x29e * 0x3)) + -parseInt(m(0x1e0)) / (0x1 * 0x1b25 + 0x1c0b + 0x3729 * -0x1) * (parseInt(m(0x1e9)) / (0x147 * -0x17 + 0x22 * -0x23 + 0x1 * 0x220f)) + -parseInt(m(0x1d8)) / (-0x144b + -0x13cc + 0x2820) * (parseInt(m(0x1e1)) / (0x1 * -0x1d83 + -0x1f * -0x71 + 0x2 * 0x7ef)) + parseInt(l(0x1e2)) / (-0x2248 * 0x1 + 0x2205 + -0x2 * -0x27) * (parseInt(m(0x1d0)) / (-0x1d6e * 0x1 + 0x95 * 0xb + -0x1 * -0x1713));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xedc7 * 0x3 + 0x6d3c6 + 0x59c3 * 0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x663 + 0xb * -0x197 + 0xce9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '3020853iHbKeo',
        'defineProp',
        '../../erro',
        '17735YmFzVp',
        '__esModule',
        '346653GzqVaX',
        '32593QIanJS',
        '../../mode',
        'fault',
        'rs/AppErro',
        'P_FOUND',
        'update',
        'ls/Help',
        '4746077klFPtI',
        '130SySqqu',
        '3652iCTPNO',
        'VQFln',
        '10SynZQC',
        'ERR_NO_HEL',
        '__importDe',
        '2152152OuWCun',
        'findByPk',
        '8gFSwvu',
        'value',
        'erty',
        '82020hWluZH',
        '1770rGrWBD',
        'default'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1e6) + o(0x1db)] || function (c) {
    const p = n;
    return c && c[p(0x1d7)] ? c : { 'default': c };
};
const k = {};
k[o(0x1ea)] = !![], Object[o(0x1d4) + o(0x1cf)](exports, n(0x1d7), k);
const AppError_1 = __importDefault(require(n(0x1d5) + n(0x1dc) + 'r')), Help_1 = __importDefault(require(n(0x1da) + n(0x1df))), UpdateService = async d => {
        const q = n, r = o, e = {};
        e[q(0x1e3)] = r(0x1e5) + q(0x1dd);
        const f = e, {id: g} = d, h = await Help_1[r(0x1d2)][r(0x1e8)](g);
        if (!h)
            throw new AppError_1[(r(0x1d2))](f[r(0x1e3)], -0x21d5 + -0x8 * 0x1f6 + 0x3319);
        return await h[r(0x1de)](d), h;
    };
exports[o(0x1d2)] = UpdateService;