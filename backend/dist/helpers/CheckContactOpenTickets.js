'use strict';
function a() {
    const v = [
        'rBCEe',
        '../models/',
        '7827588SgUmfr',
        'Ticket',
        'AppError',
        'erty',
        '4OfWHaz',
        '2hlUISA',
        'pending',
        'default',
        'stringify',
        'where',
        '42yqBmic',
        'sequelize',
        '__importDe',
        '2564359HJXCyM',
        'fault',
        '895678fMXaOm',
        'defineProp',
        '180995pNBHaY',
        '140xrxAsg',
        '33OGwyEs',
        'contactId',
        'value',
        '__esModule',
        'rYWNY',
        '19710RJDoOS',
        'status',
        '../errors/',
        '599103rQJSmE',
        'findOne',
        'open',
        '2441352cIPazc'
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
            const f = -parseInt(o(0x1b7)) / (-0x5 * 0x139 + -0x2ad + 0x1 * 0x8cb) * (parseInt(o(0x1ce)) / (-0x7 * 0x48e + 0x1 * -0x337 + 0x231b)) + parseInt(o(0x1c3)) / (0x1685 + 0x1 * -0x31b + -0x1367) * (-parseInt(o(0x1cd)) / (-0x102e + 0x90f * -0x3 + -0x2b5f * -0x1)) + -parseInt(p(0x1b9)) / (-0x1 * -0x9f2 + 0xa8 * 0xd + -0x1275) * (parseInt(o(0x1d3)) / (-0x1987 + -0xd * -0x71 + 0x13d0)) + -parseInt(o(0x1b5)) / (-0x3c * 0x9b + 0x1d0 + -0x25 * -0xef) + parseInt(o(0x1c6)) / (-0x1831 + 0x5a4 + 0x1295) + -parseInt(o(0x1c0)) / (-0x299 + 0x3a * -0x6a + 0x1aa6) * (parseInt(o(0x1ba)) / (-0x1 * -0x14fb + -0x5d9 * 0x1 + -0xf18)) + -parseInt(o(0x1bb)) / (-0x3ff * 0x1 + -0x364 + 0x27a * 0x3) * (-parseInt(p(0x1c9)) / (-0x1 * -0x1c1c + -0x6 * -0xb + 0x2d5 * -0xa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2140d + -0x33d69 + 0x90a25));
var __importDefault = this && this[q(0x1d5) + r(0x1b6)] || function (c) {
    const s = r;
    return c && c[s(0x1be)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2278 + 0x1913 + -0xb * 0x542);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x1bd)] = !![], Object[q(0x1b8) + r(0x1cc)](exports, r(0x1be), k);
const sequelize_1 = require(r(0x1d4)), AppError_1 = __importDefault(require(q(0x1c2) + r(0x1cb))), Ticket_1 = __importDefault(require(q(0x1c8) + r(0x1ca))), CheckContactOpenTickets = async g => {
        const t = r, u = r, h = {};
        h[t(0x1c7)] = t(0x1c5), h[t(0x1bf)] = u(0x1cf);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0x1c7)],
                    i[u(0x1bf)]
                ]
            }, l = {};
        l[t(0x1bc)] = g, l[t(0x1c1)] = j;
        const m = {};
        m[t(0x1d2)] = l;
        const n = await Ticket_1[t(0x1d0)][t(0x1c4)](m);
        if (n)
            throw new AppError_1[(u(0x1d0))](JSON[u(0x1d1)](n), 0x14b1 + 0x1317 * 0x1 + 0x11 * -0x23f);
    };
exports[r(0x1d0)] = CheckContactOpenTickets;