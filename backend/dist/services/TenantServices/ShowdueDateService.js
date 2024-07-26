'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1a6)) / (-0x1b94 + 0xda3 + 0x1fe * 0x7) * (-parseInt(m(0x1b4)) / (0x655 + 0x2a4 * 0x2 + -0xb9b)) + parseInt(l(0x1b2)) / (0x2327 + 0x14ce + -0x37f2) * (-parseInt(l(0x1a1)) / (0xa9 + 0x26ad + -0x2cf * 0xe)) + parseInt(m(0x1b1)) / (-0xc56 + 0x1 * -0xb84 + 0x9 * 0x2a7) + parseInt(l(0x1a9)) / (-0x1569 + -0x7 * 0x154 + 0x1ebb) + -parseInt(l(0x1a2)) / (-0x21fb * -0x1 + 0x50a + -0x26fe) * (parseInt(m(0x19f)) / (0x3c * 0x99 + 0x4d * 0x7d + -0x496d)) + parseInt(l(0x1a8)) / (-0xabe + -0xd42 + 0x15 * 0x125) + parseInt(l(0x1ad)) / (-0x16cb + -0x9f1 + 0x20c6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x149a7 + -0x41387 * 0x1 + 0xb486e * 0x1));
var __importDefault = this && this[n(0x1a4) + o(0x1ac)] || function (c) {
    const p = o;
    return c && c[p(0x1aa)] ? c : { 'default': c };
};
function a() {
    const s = [
        'mtyuf',
        'erty',
        'ls/Tenant',
        'value',
        'attributes',
        'rs/AppErro',
        '3611848nHBxab',
        'default',
        '696348hIgPkG',
        '7EJNbbe',
        'defineProp',
        '__importDe',
        'ANT_FOUND',
        '1ePkBLG',
        'dueDate',
        '4863402yRFUxR',
        '2103114ytjkUY',
        '__esModule',
        'findByPk',
        'fault',
        '2440120STBegU',
        '../../erro',
        '../../mode',
        'ERR_NO_TEN',
        '1348235hwCDgv',
        '9SUrCNv',
        'mAmox',
        '254602mhSLYf'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x57 * 0x35 + -0x924 + -0x741);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x1b8)] = !![], Object[n(0x1a3) + o(0x1b6)](exports, o(0x1aa), k);
const Tenant_1 = __importDefault(require(o(0x1af) + n(0x1b7))), AppError_1 = __importDefault(require(n(0x1ae) + n(0x19e) + 'r')), ShowdueDateService = async ({tenantId: e}) => {
        const q = o, r = n, f = {};
        f[q(0x1b3)] = r(0x1a7), f[r(0x1b5)] = q(0x1b0) + r(0x1a5);
        const g = f, h = {};
        h[q(0x1b9)] = [g[q(0x1b3)]];
        const i = await Tenant_1[q(0x1a0)][r(0x1ab)](e, h);
        if (!i)
            throw new AppError_1[(q(0x1a0))](g[q(0x1b5)], -0x3 * -0x4d7 + -0x1611 + 0x920);
        return i;
    };
exports[o(0x1a0)] = ShowdueDateService;