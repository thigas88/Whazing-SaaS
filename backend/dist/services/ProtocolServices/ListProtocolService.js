'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x142)) / (-0x375 * 0x9 + -0x113c + 0x2 * 0x182d) + -parseInt(t(0x120)) / (0xa5b + 0xad7 + -0x710 * 0x3) * (parseInt(u(0x146)) / (0x1cde * 0x1 + 0xf1d * -0x1 + -0x2 * 0x6df)) + parseInt(t(0x13a)) / (-0x28d * 0x5 + -0x1656 + -0x13 * -0x1d9) + -parseInt(t(0x121)) / (-0x2241 + 0x8bb * 0x1 + 0x198b) + parseInt(u(0x130)) / (0x2007 + 0x389 * -0x7 + 0x742 * -0x1) * (-parseInt(u(0x125)) / (0x3 * -0xa81 + -0x1 * 0x376 + 0x2300)) + parseInt(u(0x136)) / (-0x1 * 0xd91 + 0x1c * -0x83 + 0x1bed) + parseInt(u(0x134)) / (0xaaa + -0x324 + -0x77d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6 * -0x3b6ba + -0x1 * 0x1e44f + -0x88803));
var __importDefault = this && this[v(0x143) + v(0x14c)] || function (c) {
    const x = v;
    return c && c[x(0x13f)] ? c : { 'default': c };
};
const k = {};
k[w(0x12c)] = !![], Object[w(0x14a) + v(0x124)](exports, w(0x13f), k);
const sequelize_1 = require(v(0x14d)), Ticket_1 = __importDefault(require(v(0x13c) + v(0x144))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = v, z = w, g = {};
        g[y(0x14e)] = y(0x148), g[z(0x139)] = z(0x151), g[y(0x126)] = y(0x145), g[z(0x123)] = function (r, s) {
            return r * s;
        }, g[y(0x135)] = function (r, s) {
            return r - s;
        }, g[z(0x138)] = z(0x12e), g[y(0x12b)] = z(0x13b), g[z(0x133)] = z(0x13e), g[y(0x12d)] = z(0x122), g[z(0x128)] = function (r, s) {
            return r > s;
        }, g[y(0x127)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][y(0x140)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[y(0x147)][z(0x11f)](sequelize_1[z(0x147)]['fn'](h[z(0x14e)], sequelize_1[y(0x147)][y(0x12a)](h[z(0x139)])), h[z(0x126)], '%' + searchParam[y(0x14f) + 'e']() + '%') }
                ]
            }, j = -0x3 * -0x421 + 0x18f3 + 0x1 * -0x252e, l = h[z(0x123)](j, h[z(0x135)](+pageNumber, -0xe52 + 0x1992 + -0x1 * 0xb3f)), m = {};
        m[y(0x11f)] = i, m[z(0x129)] = [
            'id',
            h[z(0x139)],
            h[z(0x138)],
            h[y(0x12b)],
            h[z(0x133)]
        ], m[y(0x137)] = j, m[z(0x12f)] = l, m[y(0x131)] = !![], m[z(0x141)] = [[
                'id',
                h[y(0x12d)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[y(0x149)][y(0x11e) + z(0x13d)](m), p = h[y(0x128)](n, h[y(0x127)](l, o[z(0x152)])), q = {};
        return q[y(0x132)] = o, q[y(0x14b)] = n, q[y(0x150)] = p, q;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9b6 + 0xdad + -0x1645);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x149)] = ListProtocolService;
function a() {
    const A = [
        'count',
        'fault',
        'sequelize',
        'ZrDdX',
        'toLowerCas',
        'hasMore',
        'protocol',
        'length',
        'findAndCou',
        'where',
        '1029844QOicVP',
        '6630430XkuJwK',
        'DESC',
        'jDWEK',
        'erty',
        '267680WbuIYC',
        'ICDWO',
        'DhGLA',
        'FCodf',
        'attributes',
        'col',
        'PSfap',
        'value',
        'MYMSM',
        'contactId',
        'offset',
        '108ekEBot',
        'distinct',
        'protocols',
        'YsGmQ',
        '25626483mcSSYU',
        'PdQoJ',
        '7302472VigFmf',
        'limit',
        'hYgOw',
        'uHlBd',
        '782976jboNve',
        'userId',
        '../../mode',
        'ntAll',
        'createdAt',
        '__esModule',
        'and',
        'order',
        '649386oLiZHw',
        '__importDe',
        'ls/Ticket',
        'LIKE',
        '3EWeaOy',
        'Sequelize',
        'LOWER',
        'default',
        'defineProp'
    ];
    a = function () {
        return A;
    };
    return a();
}