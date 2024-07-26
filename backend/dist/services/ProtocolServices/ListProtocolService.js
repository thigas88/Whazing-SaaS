'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x29b + -0x6 * 0x586 + 0x24ca);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x112)) / (0x977 + -0x6dd + -0x299) + -parseInt(t(0x13d)) / (0x3 * -0x2f3 + 0xbf * -0x3 + -0x238 * -0x5) + -parseInt(u(0x12a)) / (-0xb41 + 0x56b * 0x6 + -0x153e * 0x1) + parseInt(u(0x119)) / (0x221 * -0x7 + 0x1a3 * 0x15 + 0xa * -0x1f2) + -parseInt(t(0x131)) / (0x5a * -0x53 + -0x87f + -0x25b2 * -0x1) * (parseInt(t(0x10c)) / (0x379 + 0x1ad * -0x3 + -0x194 * -0x1)) + parseInt(u(0x13f)) / (-0x1778 + -0xa * 0xc7 + 0x1f45) * (parseInt(u(0x137)) / (-0x175f + -0x2085 + 0x37ec)) + parseInt(t(0x136)) / (0x11df + -0x12c6 + 0xf0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x768b2 * 0x1 + -0x5d72c + 0x127f32));
var __importDefault = this && this[v(0x132) + v(0x11a)] || function (c) {
    const x = v;
    return c && c[x(0x11e)] ? c : { 'default': c };
};
const k = {};
k[v(0x133)] = !![], Object[w(0x110) + v(0x129)](exports, w(0x11e), k);
function a() {
    const A = [
        'distinct',
        '405034FVOrtI',
        'LOWER',
        '3331419FRlItw',
        'offset',
        '414594ahPHvB',
        'DESC',
        'nPqkq',
        'default',
        'defineProp',
        'findAndCou',
        '271866XdLbfO',
        '../../mode',
        'count',
        'protocol',
        'createdAt',
        'length',
        'toLowerCas',
        '1366076wbcKKr',
        'fault',
        'ntAll',
        'pXUfr',
        'attributes',
        '__esModule',
        'nOfyg',
        'hasMore',
        'gyAcf',
        'and',
        'qLSiS',
        'TRqPv',
        'userId',
        'ls/Ticket',
        'order',
        'AYpkM',
        'erty',
        '18483uANVzT',
        'Sequelize',
        'protocols',
        'where',
        'sequelize',
        'limit',
        'contactId',
        '5BlFnoR',
        '__importDe',
        'value',
        'col',
        'yUuQB',
        '684891BojffS',
        '8HTziom',
        'LXKTq',
        'VtHPU',
        'JyEta',
        'LIKE'
    ];
    a = function () {
        return A;
    };
    return a();
}
const sequelize_1 = require(v(0x12e)), Ticket_1 = __importDefault(require(w(0x113) + v(0x126))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = w, z = w, g = {};
        g[y(0x138)] = z(0x13e), g[y(0x121)] = y(0x115), g[z(0x139)] = z(0x13b), g[y(0x128)] = function (r, s) {
            return r * s;
        }, g[z(0x13a)] = function (r, s) {
            return r - s;
        }, g[z(0x124)] = z(0x130), g[y(0x11f)] = z(0x125), g[z(0x123)] = z(0x116), g[y(0x10e)] = z(0x10d), g[z(0x135)] = function (r, s) {
            return r > s;
        }, g[z(0x11c)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][y(0x122)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[y(0x12b)][y(0x12d)](sequelize_1[z(0x12b)]['fn'](h[z(0x138)], sequelize_1[z(0x12b)][z(0x134)](h[y(0x121)])), h[y(0x139)], '%' + searchParam[z(0x118) + 'e']() + '%') }
                ]
            }, j = 0x44f * -0x1 + -0x256d + 0x2fe * 0xe, l = h[z(0x128)](j, h[z(0x13a)](+pageNumber, -0x10 * -0x93 + 0x520 + 0xb * -0x14d)), m = {};
        m[y(0x12d)] = i, m[y(0x11d)] = [
            'id',
            h[z(0x121)],
            h[z(0x124)],
            h[y(0x11f)],
            h[z(0x123)]
        ], m[y(0x12f)] = j, m[z(0x10b)] = l, m[y(0x13c)] = !![], m[y(0x127)] = [[
                'id',
                h[y(0x10e)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[y(0x10f)][z(0x111) + z(0x11b)](m), p = h[y(0x135)](n, h[z(0x11c)](l, o[y(0x117)])), q = {};
        return q[y(0x12c)] = o, q[y(0x114)] = n, q[z(0x120)] = p, q;
    };
exports[v(0x10f)] = ListProtocolService;