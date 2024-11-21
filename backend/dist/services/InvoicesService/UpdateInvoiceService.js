'use strict';
const o = b, p = b;
function a() {
    const t = [
        '208297wCVwHB',
        'jcJRU',
        '48TGRjZu',
        '__importDe',
        'ERR_NO_PLA',
        'rs/AppErro',
        'status',
        'update',
        '10GbHiPp',
        'fault',
        '__esModule',
        '54294hxquMx',
        'erty',
        '../../mode',
        'default',
        '5740310aoJIDp',
        '27749062DSkTwm',
        '3101922kyUsjn',
        '../../erro',
        '978873eaVdGf',
        '6aTTPMi',
        'findByPk',
        'defineProp',
        '5078972HEBmLL',
        'value',
        'N_FOUND',
        '152rgkLDx',
        'ls/Invoice'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x602 * -0x1 + 0x1a64 + 0x17 * -0xd3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x17d)) / (0x1a * 0x10f + -0x1 * 0x530 + -0x1655) + -parseInt(n(0x17b)) / (0x10c5 + 0x8dc + -0x199f) * (-parseInt(m(0x188)) / (0x1359 + -0x1e5 + -0x1171)) + -parseInt(n(0x178)) / (-0x1 * -0x206 + 0x598 + -0x79a) + parseInt(m(0x170)) / (-0x1 * 0x31 + 0x29 * -0x32 + 0x107 * 0x8) * (-parseInt(n(0x175)) / (0xc * 0x2d5 + -0x14 * 0x71 + -0x1922)) + -parseInt(m(0x174)) / (-0x22d5 + 0xe * 0x43 + 0x533 * 0x6) * (parseInt(m(0x17f)) / (-0x155a + 0x187c * 0x1 + -0x31a * 0x1)) + parseInt(n(0x172)) / (0x1 * 0x7f7 + -0xe6a + 0x14c * 0x5) + -parseInt(n(0x185)) / (0x1d0d + 0x86d + 0x2570 * -0x1) * (-parseInt(n(0x171)) / (0x121 * 0x17 + -0x1b * 0x107 + 0x1f * 0xf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15dc91 + -0x9c79b + 0x1 * -0x376a));
var __importDefault = this && this[o(0x180) + o(0x186)] || function (c) {
    const q = p;
    return c && c[q(0x187)] ? c : { 'default': c };
};
const k = {};
k[p(0x179)] = !![], Object[o(0x177) + p(0x16d)](exports, p(0x187), k);
const AppError_1 = __importDefault(require(o(0x173) + p(0x182) + 'r')), Invoices_1 = __importDefault(require(o(0x16e) + o(0x17c) + 's')), UpdateInvoiceService = async e => {
        const r = p, s = o, f = {};
        f[r(0x17e)] = r(0x181) + r(0x17a);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[r(0x16f)][r(0x176)](h);
        if (!j)
            throw new AppError_1[(r(0x16f))](g[s(0x17e)], -0x10cb + -0x15 * -0x186 + -0xd9f);
        const l = {};
        return l[r(0x183)] = i, await j[s(0x184)](l), j;
    };
exports[o(0x16f)] = UpdateInvoiceService;