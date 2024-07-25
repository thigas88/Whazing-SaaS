'use strict';
const o = b, p = b;
function a() {
    const t = [
        'findByPk',
        'fault',
        '730696RetygL',
        '9fIIUXd',
        '__esModule',
        '7027055ejgIjS',
        'update',
        'N_FOUND',
        '951331lZTUdd',
        'value',
        '5295IQipNU',
        'NzPOz',
        '../../erro',
        '../../mode',
        '24902710WyPaLf',
        '516ZWzaHU',
        'status',
        'ERR_NO_PLA',
        '__importDe',
        '175562AGYlON',
        '9vKjIul',
        'defineProp',
        'rs/AppErro',
        'erty',
        'default',
        'ls/Invoice',
        '5503944cCDKUt'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x124)) / (-0x1f8c + -0x22 * 0xe2 + 0x3d91) + -parseInt(m(0x114)) / (0x9b0 + 0x2329 + -0x2cd7) * (-parseInt(n(0x11f)) / (-0x1f * -0xbf + -0x1 * -0x8b + -0x17a9)) + parseInt(m(0x12b)) / (-0xf14 + -0xc3d * -0x1 + -0x2b * -0x11) * (parseInt(n(0x126)) / (0x11 * 0xac + -0x1 * 0x3cb + -0x79c)) + parseInt(m(0x11b)) / (0x415 + -0x1cda + -0x18cb * -0x1) + parseInt(m(0x121)) / (-0x9ee + 0x67f * -0x1 + 0x83a * 0x2) + parseInt(n(0x11e)) / (0xe8f * -0x1 + 0xbbc + -0x2db * -0x1) * (parseInt(m(0x115)) / (-0x1 * -0x1a2d + -0x16 * -0x16d + -0x2 * 0x1cc1)) + -parseInt(m(0x12a)) / (-0x13eb + -0x2676 + 0x3e5 * 0xf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x8ed6e + 0x1 * -0x1241c6 + 0x83d5 * 0x2c));
var __importDefault = this && this[o(0x12e) + o(0x11d)] || function (c) {
    const q = p;
    return c && c[q(0x120)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8df * 0x2 + 0x2451 + -0x1 * 0x34fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x125)] = !![], Object[o(0x116) + p(0x118)](exports, p(0x120), k);
const AppError_1 = __importDefault(require(p(0x128) + o(0x117) + 'r')), Invoices_1 = __importDefault(require(o(0x129) + o(0x11a) + 's')), UpdateInvoiceService = async e => {
        const r = p, s = o, f = {};
        f[r(0x127)] = s(0x12d) + r(0x123);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[r(0x119)][r(0x11c)](h);
        if (!j)
            throw new AppError_1[(r(0x119))](g[r(0x127)], 0xfd2 + 0x1 * 0x1956 + -0x2794);
        const l = {};
        return l[r(0x12c)] = i, await j[s(0x122)](l), j;
    };
exports[p(0x119)] = UpdateInvoiceService;