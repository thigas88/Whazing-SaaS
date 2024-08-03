'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x139)) / (-0x12cb + -0x2b8 + 0x1584) + parseInt(t(0x159)) / (0x3 * -0xa0c + 0x15cf + 0x857) + parseInt(u(0x137)) / (0x1 * 0x1d62 + 0xae5 * 0x1 + -0x2844) * (-parseInt(t(0x156)) / (0x11f + -0xd2a + -0x7 * -0x1b9)) + parseInt(t(0x15e)) / (-0x1 * -0x1bab + 0x2192 * 0x1 + -0x3d38) + parseInt(u(0x133)) / (0x657 * 0x3 + -0x1e17 * 0x1 + 0xb18) + -parseInt(u(0x140)) / (0x16ea + -0x3b9 + -0x132a) * (-parseInt(t(0x158)) / (-0xe1c + 0x1 * 0x1333 + 0x5 * -0x103)) + -parseInt(u(0x157)) / (-0x4 * -0x6bb + 0x70b + -0x21ee * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x3acaf + -0x41db6 + -0x73b * -0x151));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2a * -0x3a + -0xb * 0x18b + 0x8a1 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const A = [
        'createdAt',
        '66718pmYRrs',
        'fault',
        'protocols',
        'erty',
        'FOstg',
        'aEINc',
        'length',
        '7UkuMYn',
        'attributes',
        '__esModule',
        'EaDvV',
        'value',
        'order',
        'Sequelize',
        'offset',
        'hasMore',
        'protocol',
        '__importDe',
        'defineProp',
        'distinct',
        'aQzjK',
        'where',
        'contactId',
        'default',
        'oFweU',
        'col',
        'RGESf',
        'ls/Ticket',
        'sequelize',
        '4OYuTME',
        '8110179GCKYMD',
        '3954072QIEQsg',
        '1485288PgcMns',
        'HNHqF',
        'dYiQU',
        'LIKE',
        'jfzYF',
        '2047605NizNIR',
        'count',
        '../../mode',
        'ntAll',
        'RtpJH',
        'limit',
        'LOWER',
        'DESC',
        'and',
        'userId',
        '789954sWnPZI',
        'findAndCou',
        'QMxaV',
        'toLowerCas',
        '646146jXREGB'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x14a) + v(0x13a)] || function (c) {
    const x = v;
    return c && c[x(0x142)] ? c : { 'default': c };
};
const k = {};
k[w(0x144)] = !![], Object[v(0x14b) + v(0x13c)](exports, w(0x142), k);
const sequelize_1 = require(w(0x155)), Ticket_1 = __importDefault(require(v(0x160) + v(0x154))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = w, z = v, g = {};
        g[y(0x15d)] = z(0x12f), g[z(0x12d)] = z(0x149), g[y(0x15a)] = z(0x15c), g[y(0x151)] = function (r, s) {
            return r * s;
        }, g[z(0x14d)] = function (r, s) {
            return r - s;
        }, g[y(0x13e)] = y(0x14f), g[z(0x153)] = y(0x132), g[y(0x13d)] = y(0x138), g[y(0x135)] = z(0x130), g[z(0x15b)] = function (r, s) {
            return r > s;
        }, g[y(0x143)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][z(0x131)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[y(0x146)][z(0x14e)](sequelize_1[z(0x146)]['fn'](h[y(0x15d)], sequelize_1[z(0x146)][y(0x152)](h[z(0x12d)])), h[y(0x15a)], '%' + searchParam[y(0x136) + 'e']() + '%') }
                ]
            }, j = -0x36e * -0xb + -0x13 * 0x136 + 0x8 * -0x1d2, l = h[y(0x151)](j, h[y(0x14d)](+pageNumber, 0x7 * -0x443 + -0x3e + 0x1e14)), m = {};
        m[z(0x14e)] = i, m[y(0x141)] = [
            'id',
            h[y(0x12d)],
            h[y(0x13e)],
            h[z(0x153)],
            h[z(0x13d)]
        ], m[z(0x12e)] = j, m[z(0x147)] = l, m[y(0x14c)] = !![], m[y(0x145)] = [[
                'id',
                h[y(0x135)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[y(0x150)][y(0x134) + y(0x12c)](m), p = h[z(0x15b)](n, h[z(0x143)](l, o[z(0x13f)])), q = {};
        return q[z(0x13b)] = o, q[y(0x15f)] = n, q[z(0x148)] = p, q;
    };
exports[v(0x150)] = ListProtocolService;