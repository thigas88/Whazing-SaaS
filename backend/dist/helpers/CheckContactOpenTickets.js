'use strict';
const q = b, r = b;
function a() {
    const v = [
        'Ticket',
        '../errors/',
        'sequelize',
        '456444CCufmJ',
        '1333809ZfVTif',
        '10pnmqCe',
        '42fdmmcY',
        '54IlLUvU',
        'XZpAn',
        '114TktKLN',
        '190905MgYfxI',
        '../models/',
        '13422860lsYbPf',
        'stringify',
        'where',
        'fault',
        'defineProp',
        'pending',
        'AppError',
        'open',
        '__esModule',
        'findOne',
        'erty',
        '__importDe',
        'contactId',
        '3039176UHhgYI',
        'value',
        'status',
        'xxXEJ',
        '484RnyQWx',
        'default',
        '1319960xLfYdb'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x19d)) / (-0xeb6 + 0x1b * -0x3a + -0x1 * -0x14d5) + -parseInt(o(0x196)) / (0x2 * 0xbb9 + 0x9dc + 0x4 * -0x853) * (parseInt(o(0x1a2)) / (0xbd4 * 0x3 + 0x927 * -0x1 + -0x1a52)) + -parseInt(o(0x192)) / (-0x118f * 0x2 + 0x1399 * 0x1 + 0xf89) + -parseInt(o(0x1a3)) / (-0x2163 + -0x45a * 0x1 + 0x25c2) * (-parseInt(p(0x1a0)) / (0x3 * -0x87d + -0x1 * -0x1003 + 0x97a)) + -parseInt(p(0x19f)) / (0x1069 * -0x2 + 0x1d86 + 0x1 * 0x353) * (-parseInt(o(0x198)) / (0x939 * 0x1 + -0x13 * 0x1cf + 0x192c)) + -parseInt(p(0x19c)) / (0x2033 * 0x1 + -0x5e7 * 0x5 + 0x1 * -0x2a7) * (-parseInt(o(0x19e)) / (-0x236f + 0x24a * -0xd + -0x413b * -0x1)) + -parseInt(o(0x1a5)) / (-0x1b2c + -0xb * 0x3b + 0x1dc0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x28bb9 + -0xc68cb + 0x1385 * 0x156));
var __importDefault = this && this[q(0x190) + q(0x1a8)] || function (c) {
    const s = q;
    return c && c[s(0x1ad)] ? c : { 'default': c };
};
const k = {};
k[q(0x193)] = !![], Object[r(0x1a9) + q(0x1af)](exports, q(0x1ad), k);
const sequelize_1 = require(q(0x19b)), AppError_1 = __importDefault(require(r(0x19a) + q(0x1ab))), Ticket_1 = __importDefault(require(r(0x1a4) + r(0x199))), CheckContactOpenTickets = async g => {
        const t = q, u = q, h = {};
        h[t(0x195)] = u(0x1ac), h[t(0x1a1)] = t(0x1aa);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0x195)],
                    i[t(0x1a1)]
                ]
            }, l = {};
        l[u(0x191)] = g, l[u(0x194)] = j;
        const m = {};
        m[t(0x1a7)] = l;
        const n = await Ticket_1[u(0x197)][u(0x1ae)](m);
        if (n)
            throw new AppError_1[(u(0x197))](JSON[u(0x1a6)](n), -0x76e * -0x4 + -0x154c + -0x6d3);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x213 + -0x2b1 * 0x3 + 0x790);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x197)] = CheckContactOpenTickets;