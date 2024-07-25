'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xe25 + 0x950 + 0x10 * -0x169);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
function a() {
    const A = [
        'sequelize',
        '__importDe',
        '4234500GLDuGq',
        '16kJEkkq',
        'hasMore',
        '16haiXAW',
        'createdAt',
        'defineProp',
        '5841860LtmIZH',
        'contactId',
        'erty',
        'ls/Ticket',
        'order',
        'EpHuN',
        'ZHSFF',
        '../../mode',
        'aXImZ',
        'toLowerCas',
        'LIKE',
        'protocol',
        'eHgZY',
        '5800260fcYqeM',
        'count',
        'and',
        'length',
        '__esModule',
        'attributes',
        '4363290sxKtkN',
        'CSPGs',
        'distinct',
        'fault',
        'upPVI',
        'HxXOU',
        'PPxoE',
        'nfqIX',
        '10378704wUJcak',
        '20116ATyYYr',
        '2525559nUJbmH',
        'DESC',
        'ntAll',
        'findAndCou',
        'woFCQ',
        'offset',
        'col',
        'Sequelize',
        'protocols',
        'limit',
        '4jZDrIU',
        'default',
        'userId',
        'dSEnI',
        'LOWER',
        'where',
        'value'
    ];
    a = function () {
        return A;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xea)) / (0x5 * -0x61d + -0x1493 + 0x3325 * 0x1) * (-parseInt(u(0xff)) / (0x1a * -0x15d + -0x19f0 + 0x3d64)) + -parseInt(t(0xeb)) / (-0xa09 + 0x3d * -0x7 + 0xbb7) + parseInt(t(0xf5)) / (-0x3 * -0x7ef + -0x1229 * -0x1 + -0x29f2) * (parseInt(t(0x111)) / (0x1 * -0x401 + -0x11 * -0x211 + -0x1f1b)) + parseInt(u(0xfe)) / (0x265c + 0x25 * 0x7c + -0x3842) + -parseInt(t(0xe9)) / (0x19cd + -0x203 * -0xd + -0x33ed) + parseInt(t(0x101)) / (0x29 * 0xb5 + -0xceb * 0x3 + 0x42 * 0x26) * (parseInt(u(0x117)) / (-0x3 * 0x68e + 0x72f + -0x10b * -0xc)) + parseInt(t(0x104)) / (-0x4 * -0xe + -0x428 + -0x1fd * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18d240 + -0x162a9f + 0xb996a));
var __importDefault = this && this[v(0xfd) + w(0x11a)] || function (c) {
    const x = v;
    return c && c[x(0x115)] ? c : { 'default': c };
};
const k = {};
k[w(0xfb)] = !![], Object[v(0x103) + w(0x106)](exports, w(0x115), k);
const sequelize_1 = require(w(0xfc)), Ticket_1 = __importDefault(require(v(0x10b) + v(0x107))), ListProtocolService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: f
    }) => {
        const y = v, z = w, g = {};
        g[y(0xe5)] = z(0xf9), g[y(0xe6)] = y(0x10f), g[y(0xf8)] = z(0x10e), g[z(0x10a)] = function (r, s) {
            return r * s;
        }, g[y(0xe7)] = function (r, s) {
            return r - s;
        }, g[z(0xe8)] = y(0x105), g[y(0x118)] = z(0xf7), g[z(0xef)] = y(0x102), g[z(0x109)] = y(0xec), g[y(0x110)] = function (r, s) {
            return r > s;
        }, g[y(0x10c)] = function (r, s) {
            return r + s;
        };
        const h = g, i = {
                'tenantId': f,
                [sequelize_1['Op'][z(0x113)]]: [
                    { 'protocol': { [sequelize_1['Op']['ne']]: null } },
                    { 'protocol': sequelize_1[z(0xf2)][z(0xfa)](sequelize_1[z(0xf2)]['fn'](h[y(0xe5)], sequelize_1[y(0xf2)][z(0xf1)](h[z(0xe6)])), h[z(0xf8)], '%' + searchParam[y(0x10d) + 'e']() + '%') }
                ]
            }, j = -0x1f83 * -0x1 + 0x576 + -0x24d1, l = h[y(0x10a)](j, h[y(0xe7)](+pageNumber, 0x1c76 + -0x8ae + 0x53 * -0x3d)), m = {};
        m[z(0xfa)] = i, m[y(0x116)] = [
            'id',
            h[z(0xe6)],
            h[y(0xe8)],
            h[z(0x118)],
            h[z(0xef)]
        ], m[z(0xf4)] = j, m[y(0xf0)] = l, m[y(0x119)] = !![], m[z(0x108)] = [[
                'id',
                h[y(0x109)]
            ]];
        const {
                count: n,
                rows: o
            } = await Ticket_1[y(0xf6)][z(0xee) + z(0xed)](m), p = h[z(0x110)](n, h[y(0x10c)](l, o[z(0x114)])), q = {};
        return q[z(0xf3)] = o, q[z(0x112)] = n, q[y(0x100)] = p, q;
    };
exports[w(0xf6)] = ListProtocolService;