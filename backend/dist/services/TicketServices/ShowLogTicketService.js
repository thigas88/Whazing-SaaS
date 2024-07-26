'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1d3)) / (0x3 * -0x9a + -0x5e * 0x6 + 0x403) + -parseInt(r(0x1af)) / (0x1d06 + 0x15ac + -0x32b0) * (-parseInt(r(0x1b9)) / (0x238c + -0x2 * 0x4fc + -0x1991)) + parseInt(r(0x1ca)) / (-0x1 * 0x12ff + 0x3d * 0x1f + 0xba0) * (-parseInt(q(0x1be)) / (-0x48e + 0x7 * 0x1f3 + -0x183 * 0x6)) + -parseInt(r(0x1c8)) / (-0x1 * 0x1070 + 0x150d + -0x497) + parseInt(r(0x1c6)) / (0x2573 + -0x299 * 0xd + -0x3a7) * (parseInt(r(0x1d1)) / (0x84e * 0x1 + 0xc4e + 0xc * -0x1b7)) + parseInt(q(0x1cb)) / (-0xa05 + 0x419 * -0x7 + -0x26bd * -0x1) + parseInt(q(0x1c9)) / (0x244c + 0xc96 * 0x2 + -0x3d6e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc4b28 + -0xe3 * 0x751 + 0x4cf * 0x57b));
var __importDefault = this && this[s(0x1b1) + t(0x1b8)] || function (c) {
    const u = s;
    return c && c[u(0x1b4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x8ef + 0x13b1 + 0x13 * -0x16b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x1b0)] = !![], Object[s(0x1ce) + s(0x1c1)](exports, t(0x1b4), k);
function a() {
    const x = [
        '5XBKXct',
        'default',
        'include',
        'erty',
        'CPGKc',
        'order',
        'model',
        'hfOIl',
        '91uplQKc',
        'ls/User',
        '2530074gqewyZ',
        '11995060bhhixW',
        '2707828fmlWwR',
        '856017kcRYAs',
        'hhQMh',
        'attributes',
        'defineProp',
        'ls/Queue',
        'user',
        '297480RMbOYS',
        'where',
        '951934trGgAk',
        'ticketId',
        '219656FRAOen',
        'value',
        '__importDe',
        'queue',
        'name',
        '__esModule',
        'DESC',
        'ls/LogTick',
        'MSgod',
        'fault',
        '21MHwNdC',
        'createdAt',
        'BckPb',
        '../../mode',
        'findAll'
    ];
    a = function () {
        return x;
    };
    return a();
}
const LogTicket_1 = __importDefault(require(s(0x1bc) + s(0x1b6) + 'et')), User_1 = __importDefault(require(s(0x1bc) + s(0x1c7))), Queue_1 = __importDefault(require(s(0x1bc) + t(0x1cf))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = s, i = {};
        i[v(0x1c2)] = v(0x1d0), i[w(0x1b7)] = v(0x1b3), i[v(0x1cc)] = w(0x1b2), i[w(0x1bb)] = w(0x1ba), i[w(0x1c5)] = v(0x1b5);
        const j = i, l = {};
        l[v(0x1d4)] = h;
        const m = {};
        m[w(0x1c4)] = User_1[w(0x1bf)], m['as'] = j[w(0x1c2)], m[w(0x1cd)] = [
            'id',
            j[v(0x1b7)]
        ];
        const n = {};
        n[w(0x1c4)] = Queue_1[v(0x1bf)], n['as'] = j[w(0x1cc)], n[v(0x1cd)] = [
            'id',
            j[w(0x1cc)]
        ];
        const o = {};
        o[v(0x1d2)] = l, o[v(0x1c0)] = [
            m,
            n
        ], o[v(0x1c3)] = [[
                j[w(0x1bb)],
                j[v(0x1c5)]
            ]];
        const p = await LogTicket_1[w(0x1bf)][w(0x1bd)](o);
        return p;
    };
exports[t(0x1bf)] = ShowLogTicketService;