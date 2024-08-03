'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1cf)) / (-0x5f6 + -0x2 * -0x332 + -0x6d) + -parseInt(n(0x1c6)) / (0x4a * -0x6f + 0xa * 0x18a + 0x10b4) + -parseInt(m(0x1ca)) / (-0x1ffa + 0x82d + 0x17d0) * (parseInt(m(0x1c4)) / (0x10d5 * -0x1 + 0x3e6 * -0x9 + 0x33ef)) + -parseInt(n(0x1ce)) / (-0x1 * -0x3d3 + 0x712 + -0xae * 0x10) * (parseInt(n(0x1c0)) / (0x7 * 0x39b + 0x1 * -0x2390 + 0xa59)) + parseInt(n(0x1bc)) / (0x26ee + 0xbd3 + -0x32ba) + parseInt(n(0x1c3)) / (-0x9b * 0x3d + -0x2524 + 0x4a1b) * (parseInt(n(0x1bb)) / (-0x26a5 * 0x1 + -0x6 * 0x15b + 0x2ed0)) + parseInt(m(0x1bd)) / (-0x1 * 0x1e2f + -0x15a1 + -0x19ed * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x39b03 + 0x1 * -0x10979 + -0x1 * -0x21357));
var __importDefault = this && this[o(0x1c7) + o(0x1c8)] || function (c) {
    const q = p;
    return c && c[q(0x1b9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x36 * -0x32 + -0x1 * 0x112c + -0x1f * -0xf3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x1be)] = !![], Object[o(0x1c1) + p(0x1b5)](exports, o(0x1b9), k);
const AppError_1 = __importDefault(require(o(0x1b8) + p(0x1cb) + 'r')), Invoices_1 = __importDefault(require(o(0x1ba) + p(0x1b6) + 's')), UpdateInvoiceService = async e => {
        const r = o, s = o, f = {};
        f[r(0x1bf)] = r(0x1c9) + s(0x1b7);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[r(0x1cc)][r(0x1cd)](h);
        if (!j)
            throw new AppError_1[(r(0x1cc))](g[r(0x1bf)], 0xd1 * 0x29 + 0xbc9 + -0x15d7 * 0x2);
        const l = {};
        return l[r(0x1c2)] = i, await j[s(0x1c5)](l), j;
    };
exports[p(0x1cc)] = UpdateInvoiceService;
function a() {
    const t = [
        '__esModule',
        '../../mode',
        '9qMTcNh',
        '1116437smiAWY',
        '265880bXqLHJ',
        'value',
        'VKEOa',
        '104472dIhUXV',
        'defineProp',
        'status',
        '4721816JPtnBZ',
        '8ejhdMX',
        'update',
        '592608QWhBiu',
        '__importDe',
        'fault',
        'ERR_NO_PLA',
        '379911hTMOFX',
        'rs/AppErro',
        'default',
        'findByPk',
        '100whcvGm',
        '425865yfVMtI',
        'erty',
        'ls/Invoice',
        'N_FOUND',
        '../../erro'
    ];
    a = function () {
        return t;
    };
    return a();
}