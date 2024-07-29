'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xa3)) / (-0x170d + 0x2690 + -0x7c1 * 0x2) * (-parseInt(m(0xa9)) / (-0x1 * -0x1a87 + -0x822 + -0x1263)) + -parseInt(m(0x99)) / (0x1280 + 0x2 * 0x42a + -0x1ad1) + -parseInt(m(0xa4)) / (0xf1c + -0xa * 0x29c + 0xb00) * (-parseInt(n(0xa2)) / (0x1d2d * 0x1 + -0x180f + -0x1b3 * 0x3)) + -parseInt(n(0x96)) / (-0x19 * -0x183 + -0x147e + 0x1147 * -0x1) * (-parseInt(m(0x9c)) / (-0x244a * 0x1 + 0x1da5 + 0x7a * 0xe)) + parseInt(m(0x92)) / (-0xbf2 + -0x497 + 0x1091) * (-parseInt(m(0x9f)) / (-0xd01 * 0x1 + 0x143d + -0x733)) + parseInt(n(0x94)) / (0x1 * -0x1d07 + -0x1027 + 0x8 * 0x5a7) + -parseInt(m(0x8d)) / (-0x1 * 0x51a + -0x368 + 0x88d) * (parseInt(m(0x95)) / (0x1b08 + -0x1b79 + 0x5 * 0x19));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0xe951 + 0xc2aba + -0x1c8b * 0x2));
function a() {
    const t = [
        'rs/AppErro',
        '3495075ReTyHn',
        'fault',
        '../../erro',
        '7iMFTwH',
        'defineProp',
        'ERR_NO_PLA',
        '688293dHqevC',
        '__esModule',
        'status',
        '52115JJwxbQ',
        '164461WlzAaA',
        '188qafhrb',
        'ls/Invoice',
        'update',
        'BITLP',
        'value',
        '2kfCkSf',
        '187OoqDsw',
        'erty',
        'default',
        'N_FOUND',
        '../../mode',
        '8AzEoEI',
        'findByPk',
        '9660680BlJBJT',
        '353676xfdgbN',
        '4354212iSRroi',
        '__importDe'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x97) + p(0x9a)] || function (c) {
    const q = p;
    return c && c[q(0xa0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17b2 + 0x2bb * 0xd + -0xb40);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0xa8)] = !![], Object[o(0x9d) + p(0x8e)](exports, p(0xa0), k);
const AppError_1 = __importDefault(require(p(0x9b) + o(0x98) + 'r')), Invoices_1 = __importDefault(require(o(0x91) + p(0xa5) + 's')), UpdateInvoiceService = async e => {
        const r = o, s = o, f = {};
        f[r(0xa7)] = r(0x9e) + s(0x90);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x8f)][r(0x93)](h);
        if (!j)
            throw new AppError_1[(s(0x8f))](g[s(0xa7)], -0x180a + 0x126a + 0x734);
        const l = {};
        return l[s(0xa1)] = i, await j[s(0xa6)](l), j;
    };
exports[o(0x8f)] = UpdateInvoiceService;