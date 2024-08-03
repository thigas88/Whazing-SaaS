'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xeb)) / (-0x4 * -0x8a1 + 0x17ed * -0x1 + -0xa * 0x10f) * (-parseInt(o(0xf9)) / (0x536 + 0x1 * -0xe87 + 0x953)) + parseInt(p(0xe9)) / (-0x61f + -0x390 * 0x2 + 0x6a1 * 0x2) * (parseInt(p(0xe4)) / (0x17c9 * 0x1 + -0x1535 + -0x290)) + parseInt(p(0xde)) / (0x3b * -0x41 + -0x2 * -0xc00 + 0x90 * -0x10) + parseInt(p(0xe0)) / (0x1e01 + -0xdc + -0x1d1f) + -parseInt(p(0xf7)) / (0x3 * -0x5ff + 0xd1f * 0x1 + -0x7 * -0xb3) * (-parseInt(p(0xf5)) / (0x2 * 0xb11 + -0x1 * 0x1ab9 + 0x49f)) + -parseInt(p(0xee)) / (-0x5a6 + 0x1098 * 0x1 + -0x3 * 0x3a3) + -parseInt(o(0xe2)) / (-0xd0 * 0x24 + 0x2a4 + 0x1aa6) * (parseInt(o(0xe7)) / (-0xf9e + -0x90 + 0x1039 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x1477d7 + -0x1f * -0x8152 + -0x151cbf));
function a() {
    const v = [
        '11154222GJdyVh',
        'erty',
        '10xNruaa',
        'sequelize',
        '3728nHWsuW',
        'VLEcA',
        'default',
        '13880141bGpPdC',
        '__esModule',
        '663oZbjTS',
        'open',
        '1298387dgSaQG',
        '../errors/',
        'status',
        '6376743cfjDLG',
        '__importDe',
        'defineProp',
        'fault',
        'findOne',
        'pending',
        'Ticket',
        '200sRriHl',
        'contactId',
        '433097SYanoI',
        'where',
        '2QQtErL',
        'stringify',
        'XjeRR',
        '../models/',
        'AppError',
        '3205155mRsxop',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xef) + r(0xf1)] || function (c) {
    const s = q;
    return c && c[s(0xe8)] ? c : { 'default': c };
};
const k = {};
k[q(0xdf)] = !![], Object[q(0xf0) + r(0xe1)](exports, q(0xe8), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b54 + 0x437 * -0x6 + 0x3 * -0x65);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(r(0xe3)), AppError_1 = __importDefault(require(q(0xec) + r(0xdd))), Ticket_1 = __importDefault(require(q(0xdc) + r(0xf4))), CheckContactOpenTickets = async g => {
        const t = q, u = r, h = {};
        h[t(0xe5)] = t(0xea), h[u(0xdb)] = t(0xf3);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[u(0xe5)],
                    i[u(0xdb)]
                ]
            }, l = {};
        l[u(0xf6)] = g, l[u(0xed)] = j;
        const m = {};
        m[u(0xf8)] = l;
        const n = await Ticket_1[u(0xe6)][u(0xf2)](m);
        if (n)
            throw new AppError_1[(t(0xe6))](JSON[t(0xfa)](n), 0x1 * 0x1093 + -0x23d * -0x9 + 0x1 * -0x231f);
    };
exports[q(0xe6)] = CheckContactOpenTickets;