'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbf1 + -0xa7b * -0x2 + -0x1f5e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'email',
        '4yemTBc',
        'ls/Queue',
        '30910572aXBFJC',
        '14zAFmzo',
        'include',
        'users',
        'fault',
        'sequelize',
        'ASC',
        'distinct',
        'model',
        'ohkVF',
        'hasMore',
        'Sequelize',
        'ls/Tenant',
        '../../mode',
        '578536KhAIih',
        '__importDe',
        'LOWER',
        'queue',
        'pABMB',
        'defineProp',
        'findAndCou',
        'name',
        'PgeJS',
        'User.name',
        'offset',
        'PUXCg',
        '304648gOyoqF',
        '776646jDHNqR',
        'like',
        'BdxSc',
        'order',
        'limit',
        'eGOkK',
        'count',
        '5373440uWqkzD',
        'nlfqM',
        '391424oqmkuR',
        'length',
        'default',
        'profile',
        'ntAll',
        'value',
        'ls/User',
        'attributes',
        'LIKE',
        'neUOr',
        'GBzMX',
        'toLowerCas',
        '3954066oEAsdn',
        '__esModule',
        'where',
        'gMfnd',
        'VRqCj',
        'erty',
        'YYReo',
        'col'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x196)) / (-0x1 * -0x2272 + 0x251 * 0x3 + -0x2964) + parseInt(x(0x1bb)) / (-0x1810 + -0x10ea + 0x28fc) + -parseInt(x(0x1a2)) / (-0x4 * -0x49f + 0x6b6 + 0x192f * -0x1) * (parseInt(w(0x1ab)) / (-0x11 * 0x1ec + -0xb00 * -0x1 + 0x15b0)) + -parseInt(w(0x194)) / (-0x9ab + 0x10f * -0x19 + -0x1 * -0x2427) + -parseInt(x(0x18d)) / (0xc4a + -0x2649 + -0x1 * -0x1a05) + -parseInt(x(0x1ae)) / (0x4 * -0x64e + -0xa79 + 0x23b8) * (parseInt(w(0x18c)) / (0x51 * 0x2 + 0x63d * 0x1 + -0x6d7)) + parseInt(x(0x1ad)) / (0x4d * 0x65 + -0xc20 + -0x1238);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x110f7a + -0x91453 + 0x255724));
var __importDefault = this && this[y(0x1bc) + z(0x1b1)] || function (c) {
    const A = y;
    return c && c[A(0x1a3)] ? c : { 'default': c };
};
const k = {};
k[z(0x19b)] = !![], Object[z(0x1c0) + z(0x1a7)](exports, y(0x1a3), k);
const sequelize_1 = require(z(0x1b2)), Queue_1 = __importDefault(require(y(0x1ba) + y(0x1ac))), Tenant_1 = __importDefault(require(y(0x1ba) + y(0x1b9))), User_1 = __importDefault(require(z(0x1ba) + z(0x19c))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = z, C = z, h = {};
        h[B(0x1bf)] = C(0x1bd), h[C(0x1a0)] = B(0x189), h[B(0x192)] = C(0x19e), h[B(0x195)] = function (u, v) {
            return u * v;
        }, h[C(0x1c3)] = function (u, v) {
            return u - v;
        }, h[B(0x19f)] = B(0x1be), h[C(0x1a5)] = C(0x1c2), h[C(0x18f)] = C(0x1aa), h[B(0x1a8)] = C(0x199), h[B(0x1b6)] = B(0x1b3), h[C(0x18b)] = function (u, v) {
            return u > v;
        }, h[C(0x1a6)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x1b8)][C(0x1a4)](sequelize_1[B(0x1b8)]['fn'](i[C(0x1bf)], sequelize_1[C(0x1b8)][C(0x1a9)](i[C(0x1a0)])), i[B(0x192)], '%' + searchParam[C(0x1a1) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x18e)]]: '%' + searchParam[C(0x1a1) + 'e']() + '%' } }
                ]
            }, l = 0x45 * -0x6b + -0x4 * 0x541 + 0x3203, m = i[B(0x195)](l, i[B(0x1c3)](+pageNumber, 0xb7f + 0x742 + 0x8 * -0x258)), n = {};
        n[B(0x1b5)] = Queue_1[C(0x198)], n[B(0x19d)] = [
            'id',
            i[C(0x19f)]
        ];
        const o = {};
        o[C(0x1b5)] = Tenant_1[B(0x198)], o[C(0x19d)] = [
            'id',
            i[C(0x1a5)]
        ];
        const p = {};
        p[C(0x1a4)] = j, p[C(0x1af)] = [
            n,
            o
        ], p[B(0x19d)] = [
            i[C(0x1a5)],
            'id',
            i[C(0x18f)],
            i[B(0x1a8)]
        ], p[B(0x191)] = l, p[B(0x18a)] = m, p[B(0x1b4)] = !![], p[B(0x190)] = [[
                i[C(0x1a5)],
                i[C(0x1b6)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[C(0x198)][C(0x1c1) + C(0x19a)](p), s = i[B(0x18b)](q, i[B(0x1a6)](m, r[C(0x197)])), t = {};
        return t[C(0x1b0)] = r, t[C(0x193)] = q, t[B(0x1b7)] = s, t;
    };
exports[z(0x198)] = AdminListUsersService;