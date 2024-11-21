'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * 0x168 + -0x32b * 0xb + 0x31cc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xf8)) / (-0xb35 + -0x147 * -0xf + -0x5 * 0x197) * (-parseInt(u(0x101)) / (0x1 * 0x1845 + 0x7 * 0x124 + -0x203f)) + -parseInt(u(0x106)) / (0x11dd + 0x1 * 0x1e52 + -0x302c) + -parseInt(u(0xf0)) / (-0x1 * -0x195b + 0x11 * -0x1f5 + 0x3f7 * 0x2) * (-parseInt(u(0x110)) / (-0x2 * 0x4be + 0x1df9 + 0x28f * -0x8)) + -parseInt(t(0xef)) / (-0x2ca + -0x313 * -0x4 + 0x2 * -0x4be) + -parseInt(t(0x104)) / (0x1cef + 0xa36 + -0x271e) + parseInt(u(0x116)) / (-0xf33 + -0x1261 + 0x219c) + -parseInt(u(0xec)) / (0x5 * -0x199 + 0x1 * 0x485 + 0x381) * (-parseInt(u(0xeb)) / (-0x263a + -0x404 + 0x2a48));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1fe04 + 0x8d00a + -0x1761b));
var __importDefault = this && this[v(0x10e) + w(0xfd)] || function (c) {
    const x = w;
    return c && c[x(0xea)] ? c : { 'default': c };
};
const k = {};
k[w(0xf2)] = !![], Object[w(0x108) + v(0xf1)](exports, w(0xea), k);
const sequelize_1 = require(w(0x117)), Ticket_1 = __importDefault(require(w(0xe8) + v(0xf4))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = w, z = w, g = {};
        g[y(0x109)] = y(0xe7), g[y(0x114)] = y(0xe6), g[z(0x10f)] = z(0xf5), g[y(0x105)] = function (r, s) {
            return r * s;
        }, g[z(0xe4)] = function (r, s) {
            return r - s;
        }, g[z(0x100)] = y(0x10b), g[y(0x115)] = y(0x10c), g[y(0x112)] = y(0xf7), g[z(0xed)] = y(0xfa), g[z(0x113)] = function (r, s) {
            return r > s;
        }, g[y(0x10a)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][y(0xf6)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[y(0xf3)][y(0xe5)](sequelize_1[y(0xf3)]['fn'](h[z(0x109)], sequelize_1[z(0xf3)][y(0x118)](h[z(0x114)])), h[y(0x10f)], '%' + searchParam[y(0xfe) + 'e']() + '%') }
                ]
            }, j = 0x5 * -0x52f + -0x3c3 * -0x1 + -0x330 * -0x7, l = h[z(0x105)](j, h[z(0xe4)](+pageNumber, -0x8f3 + 0x207d * 0x1 + 0x1 * -0x1789)), m = {};
        m[y(0xe5)] = i, m[z(0xe9)] = [
            'id',
            h[z(0x114)],
            h[y(0x100)],
            h[z(0x115)],
            h[y(0x112)]
        ], m[z(0x111)] = j, m[z(0x102)] = l, m[y(0x107)] = !![], m[y(0xe3)] = [[
                'id',
                h[y(0xed)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[y(0xff)][y(0xfc) + z(0x10d)](m), p = h[z(0x113)](n, h[z(0x10a)](l, o[z(0x103)])), q = {};
        return q[z(0xf9)] = o, q[z(0xfb)] = n, q[y(0xee)] = p, q;
    };
function a() {
    const A = [
        'hgRsU',
        'contactId',
        'userId',
        'ntAll',
        '__importDe',
        'KSCPk',
        '10staGBR',
        'limit',
        'AgJUp',
        'zojnC',
        'tnTMT',
        'QzQzD',
        '4537600jBnWsJ',
        'sequelize',
        'col',
        'order',
        'utJdZ',
        'where',
        'protocol',
        'LOWER',
        '../../mode',
        'attributes',
        '__esModule',
        '5895790eExDtG',
        '9VtBRnL',
        'LHzKi',
        'hasMore',
        '3082728NfQJhe',
        '455876pcvocC',
        'erty',
        'value',
        'Sequelize',
        'ls/Ticket',
        'LIKE',
        'and',
        'createdAt',
        '2456QPtqfj',
        'protocols',
        'DESC',
        'count',
        'findAndCou',
        'fault',
        'toLowerCas',
        'default',
        'xOlJV',
        '2mYiPsg',
        'offset',
        'length',
        '1401624SEZVOo',
        'wXRPN',
        '965826rnHqrx',
        'distinct',
        'defineProp',
        'wVtQf'
    ];
    a = function () {
        return A;
    };
    return a();
}
exports[v(0xff)] = ListProtocolService;