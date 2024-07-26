'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x126)) / (-0xe5 * 0x17 + -0x1004 + -0x493 * -0x8) * (-parseInt(n(0x11b)) / (-0x101 * -0x22 + -0x2f * 0x8d + -0x83d)) + -parseInt(n(0x117)) / (0x26d * 0x3 + -0x473 * -0x5 + -0x1 * 0x1d83) * (-parseInt(m(0x132)) / (0x3b * -0x54 + -0x2477 + 0x37d7)) + -parseInt(n(0x121)) / (-0x19da + -0x690 + -0x206f * -0x1) + parseInt(n(0x118)) / (-0x5ce * -0x1 + 0x1ea0 + -0x2468) * (parseInt(n(0x11f)) / (-0x20ac + 0x2 * 0x12d0 + -0x4ed)) + -parseInt(m(0x11e)) / (0x520 + -0xb7 * 0x4 + -0x1 * 0x23c) * (parseInt(n(0x11a)) / (0x6 * 0x2a + -0x25 * 0x5c + 0x1 * 0xc59)) + -parseInt(m(0x127)) / (0x1 * 0x8f3 + 0x1320 + 0x1c09 * -0x1) + parseInt(m(0x128)) / (-0x241e + 0x1223 * -0x1 + 0x364c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x523cf + 0x5d0af + -0x10505 * 0x3));
function a() {
    const t = [
        'ERR_NO_PLA',
        'N_FOUND',
        '227244oApWsT',
        '21yUSSvX',
        '12vatfWP',
        '__importDe',
        '122823HXeszg',
        '324542gaNLmU',
        'status',
        'rs/AppErro',
        '232ICHrJb',
        '3268538IwbMTA',
        '../../erro',
        '3168470rbetmM',
        '../../mode',
        'FaQYO',
        'findByPk',
        'ls/Invoice',
        '5TIUlpW',
        '5905860LqFOqX',
        '17790740BYFDai',
        'default',
        'defineProp',
        'update',
        'value',
        'erty',
        'fault',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25de * -0x1 + 0xb24 + -0x2feb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x119) + p(0x12e)] || function (c) {
    const q = p;
    return c && c[q(0x12f)] ? c : { 'default': c };
};
const k = {};
k[p(0x12c)] = !![], Object[p(0x12a) + p(0x12d)](exports, p(0x12f), k);
const AppError_1 = __importDefault(require(o(0x120) + p(0x11d) + 'r')), Invoices_1 = __importDefault(require(o(0x122) + p(0x125) + 's')), UpdateInvoiceService = async e => {
        const r = o, s = p, f = {};
        f[r(0x123)] = r(0x130) + s(0x131);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x129)][s(0x124)](h);
        if (!j)
            throw new AppError_1[(r(0x129))](g[r(0x123)], -0x551 + -0x2585 + 0x2c6a);
        const l = {};
        return l[s(0x11c)] = i, await j[s(0x12b)](l), j;
    };
exports[o(0x129)] = UpdateInvoiceService;