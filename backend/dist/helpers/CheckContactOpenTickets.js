'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x146)) / (0xadd * -0x1 + -0x1261 + 0x1d3f) * (-parseInt(o(0x13f)) / (-0x194d + 0x20 * 0xbf + 0x1 * 0x16f)) + parseInt(o(0x155)) / (-0x1 * -0x1771 + -0x1f02 * 0x1 + -0x184 * -0x5) * (parseInt(p(0x141)) / (0x13e + -0x2 * -0x8aa + 0xa * -0x1db)) + parseInt(o(0x151)) / (-0xa09 + -0x1055 * -0x1 + -0x647) + parseInt(p(0x156)) / (0x220a + 0x1 * -0x117b + -0x1089) + parseInt(o(0x14b)) / (0xdf * -0x11 + 0x1904 + -0xa2e) + parseInt(o(0x142)) / (0x4 * -0xf4 + -0x1c92 + 0x206a) + parseInt(p(0x14d)) / (0xdc6 + -0x232d + 0xc4 * 0x1c) * (-parseInt(o(0x14f)) / (0x18cb + 0x8e2 * 0x2 + -0x2a85));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0xc5dcb + -0xc * -0x215bb + 0x24b63e * -0x1));
function a() {
    const v = [
        'fault',
        '1spNKAz',
        '../models/',
        'defineProp',
        'erty',
        'Ticket',
        '7635789OhhYPg',
        'contactId',
        '1610406hqVjYl',
        'ovzXi',
        '290ZdGYQX',
        'value',
        '6958385LulHUg',
        'findOne',
        '../errors/',
        'GwQUi',
        '3lLuvEP',
        '2918934ATwlkv',
        'where',
        '__importDe',
        'sequelize',
        'pending',
        'open',
        'stringify',
        'status',
        '2210426mEfsHJ',
        'default',
        '2138520CFBVla',
        '11478448ZVXzhB',
        'AppError',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x158) + q(0x145)] || function (c) {
    const s = r;
    return c && c[s(0x144)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x83d + -0x955 * -0x2 + -0x933);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x150)] = !![], Object[q(0x148) + r(0x149)](exports, q(0x144), k);
const sequelize_1 = require(r(0x13a)), AppError_1 = __importDefault(require(q(0x153) + q(0x143))), Ticket_1 = __importDefault(require(r(0x147) + r(0x14a))), CheckContactOpenTickets = async g => {
        const t = q, u = q, h = {};
        h[t(0x14e)] = u(0x13c), h[u(0x154)] = t(0x13b);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[u(0x14e)],
                    i[t(0x154)]
                ]
            }, l = {};
        l[u(0x14c)] = g, l[t(0x13e)] = j;
        const m = {};
        m[t(0x157)] = l;
        const n = await Ticket_1[u(0x140)][u(0x152)](m);
        if (n)
            throw new AppError_1[(t(0x140))](JSON[t(0x13d)](n), 0x47f * 0x6 + -0x2050 + 0x1 * 0x6ef);
    };
exports[q(0x140)] = CheckContactOpenTickets;