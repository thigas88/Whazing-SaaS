'use strict';
function a() {
    const v = [
        'defineProp',
        'erty',
        '../errors/',
        'where',
        '1167627mvaxug',
        'AppError',
        'SkVjg',
        'default',
        '12ZivHQG',
        'QxgAr',
        '__esModule',
        '415165tQaLFc',
        '4222016bKKehd',
        '1MnwUum',
        'Ticket',
        'stringify',
        '3816942wdQIoA',
        '../models/',
        'open',
        '__importDe',
        'contactId',
        '646430rSdNuy',
        'sequelize',
        'status',
        'findOne',
        'value',
        '828184kHQQnr',
        '941922WBZRxg',
        '81UqglEF',
        'pending',
        'fault'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x191)) / (-0x1bf6 + 0xb69 + -0xd * -0x146) * (parseInt(p(0x180)) / (-0x1506 + 0xb71 * -0x2 + 0x2bea)) + parseInt(o(0x188)) / (0x164e * -0x1 + 0x55a * 0x1 + 0x10f7) + -parseInt(o(0x18c)) / (-0x392 + -0xe0d + 0x11a3) * (parseInt(p(0x18f)) / (0x3b0 + 0x10c9 * 0x1 + -0x4 * 0x51d)) + parseInt(o(0x175)) / (0x37 * -0x97 + 0x767 + 0x644 * 0x4) + parseInt(o(0x17f)) / (0x19e8 * -0x1 + 0x14b + 0x18a4) + -parseInt(p(0x190)) / (-0x1 * -0x1fbe + -0x47 * -0x2b + 0x1 * -0x2ba3) + parseInt(p(0x181)) / (-0xbe7 + -0x8cf + 0x14bf * 0x1) * (parseInt(p(0x17a)) / (0x1d8b + -0x237f + -0xd * -0x76));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f2a * 0x42 + -0xb0115 + 0x1a53be));
var __importDefault = this && this[q(0x178) + r(0x183)] || function (c) {
    const s = q;
    return c && c[s(0x18e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2b * 0xba + -0x260c + -0x843 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x17e)] = !![], Object[r(0x184) + r(0x185)](exports, r(0x18e), k);
const sequelize_1 = require(q(0x17b)), AppError_1 = __importDefault(require(r(0x186) + r(0x189))), Ticket_1 = __importDefault(require(q(0x176) + q(0x192))), CheckContactOpenTickets = async g => {
        const t = q, u = r, h = {};
        h[t(0x18a)] = t(0x177), h[u(0x18d)] = t(0x182);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[u(0x18a)],
                    i[u(0x18d)]
                ]
            }, l = {};
        l[u(0x179)] = g, l[t(0x17c)] = j;
        const m = {};
        m[t(0x187)] = l;
        const n = await Ticket_1[t(0x18b)][u(0x17d)](m);
        if (n)
            throw new AppError_1[(t(0x18b))](JSON[u(0x193)](n), -0x714 + -0x3 * -0x209 + 0x292);
    };
exports[q(0x18b)] = CheckContactOpenTickets;