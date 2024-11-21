'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x188)) / (0x1742 + -0x1cb9 + 0x578) + -parseInt(m(0x189)) / (-0x25ba + -0x2445 + 0x1a5 * 0x2d) * (-parseInt(m(0x180)) / (-0x457 * -0x1 + -0x210e + 0x1cba)) + -parseInt(n(0x18c)) / (-0x17dd + -0x175d * 0x1 + 0x2f3e) + parseInt(n(0x186)) / (0x1835 + 0x2c0 + -0x1af0) * (-parseInt(m(0x182)) / (0xbe3 * 0x3 + -0x7cc * 0x2 + -0x140b)) + parseInt(n(0x18d)) / (-0x1dfb + -0x52 * -0x69 + -0x3a0) * (-parseInt(n(0x176)) / (0x7e0 + -0x12a9 + -0xd * -0xd5)) + -parseInt(n(0x172)) / (0xb1 * 0x1a + 0x12c0 + -0x3 * 0xc3b) * (parseInt(m(0x179)) / (0x1 * -0x1a96 + -0x20e7 + -0x881 * -0x7)) + -parseInt(m(0x183)) / (-0x1a3c * -0x1 + 0x1a1f * 0x1 + -0x3450) * (-parseInt(n(0x178)) / (0x16 * -0x4e + -0x1b7a + 0x223a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x157516 + 0x537 * -0x2f1 + 0x3279f2));
function a() {
    const t = [
        '../../erro',
        '1480424xJotnW',
        'RAxyb',
        '12wYEdeT',
        '130PkSdUi',
        'OICE_FOUND',
        '__importDe',
        'rs/AppErro',
        'ls/Invoice',
        'findOne',
        'default',
        '1669377SdOFRj',
        '../../mode',
        '12xtisCL',
        '43829522CkohUa',
        'where',
        'destroy',
        '4150655lfwyML',
        '__esModule',
        '512970DyqnoD',
        '2qDDLeD',
        'value',
        'erty',
        '6570564kOSTKz',
        '28AOiYaL',
        'defineProp',
        '79119xcPTMx',
        'fault',
        'ERR_NO_INV'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x17b) + o(0x173)] || function (c) {
    const q = p;
    return c && c[q(0x187)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13a7 + 0x171f + -0x2955);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x18a)] = !![], Object[o(0x171) + p(0x18b)](exports, p(0x187), k);
const AppError_1 = __importDefault(require(o(0x175) + p(0x17c) + 'r')), Invoices_1 = __importDefault(require(p(0x181) + o(0x17d) + 's')), AdminDeleteInvoiceService = async ({invoiceId: f}) => {
        const r = o, s = p, g = {};
        g[r(0x177)] = r(0x174) + s(0x17a);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x184)] = i;
        const l = await Invoices_1[s(0x17f)][r(0x17e)](j);
        if (!l)
            throw new AppError_1[(r(0x17f))](h[r(0x177)], 0x21b9 + -0x188a + -0x79b);
        await l[r(0x185)]();
    };
exports[p(0x17f)] = AdminDeleteInvoiceService;