'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x17d)) / (-0xefc + 0x2 * -0x2d9 + 0x14af) * (-parseInt(w(0x182)) / (0x9 * 0x313 + 0x1 * 0xf07 + -0x2ab0)) + -parseInt(w(0x19b)) / (-0x260e + -0x3a6 + 0x1 * 0x29b7) + parseInt(x(0x1a7)) / (-0x13a6 * 0x1 + -0x2328 + 0x36d2) * (-parseInt(x(0x18d)) / (-0x78d + -0x359 * -0x8 + -0x1336)) + parseInt(x(0x18c)) / (0x13b3 * -0x1 + 0x224 + 0x1195 * 0x1) + -parseInt(w(0x197)) / (-0xed + 0xbba * 0x1 + -0xac6) + -parseInt(x(0x183)) / (0x8d8 + 0x5 * 0x1b7 + -0x1163) + parseInt(x(0x180)) / (0x2056 + -0x68d + -0x19c0) * (parseInt(x(0x17a)) / (-0x1229 * 0x1 + -0x13f7 + -0xa * -0x3d1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa4e7 * -0x5 + 0x7a151 + -0x2 * 0x31ae7));
function a() {
    const D = [
        'limit',
        '10dcGwNS',
        'toLowerCas',
        'queue',
        '77139tGUapD',
        'where',
        'ls/User',
        '16632477ARDvjq',
        'LIKE',
        '12KKzqVz',
        '4668112lJXFHO',
        'fault',
        'length',
        'mwPyB',
        'count',
        'attributes',
        'mcanz',
        'default',
        'name',
        '280506ldpAni',
        '5MxQKih',
        'findAndCou',
        'hasMore',
        '../../mode',
        'profile',
        'Sequelize',
        'fKzru',
        'include',
        'pHnCF',
        'like',
        '1739269MQznro',
        'sequelize',
        '__importDe',
        'bvDnH',
        '407763jgMaSH',
        'ElBlC',
        '__esModule',
        'defineProp',
        'DUGLf',
        'jsjbx',
        'ntAll',
        'distinct',
        'order',
        'model',
        'PATAS',
        'Pcflx',
        '639736rHgRXP',
        'email',
        'users',
        'ASC',
        'offset',
        'value',
        'col',
        'User.name',
        'erty',
        'ls/Queue',
        'IOKDF',
        'KDAnf',
        'LOWER',
        'ls/Tenant'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x199) + y(0x184)] || function (c) {
    const A = y;
    return c && c[A(0x19d)] ? c : { 'default': c };
};
const k = {};
k[y(0x1ac)] = !![], Object[y(0x19e) + y(0x1af)](exports, y(0x19d), k);
const sequelize_1 = require(y(0x198)), Queue_1 = __importDefault(require(y(0x190) + z(0x1b0))), Tenant_1 = __importDefault(require(y(0x190) + y(0x178))), User_1 = __importDefault(require(y(0x190) + y(0x17f))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = z, C = z, h = {};
        h[B(0x186)] = C(0x177), h[C(0x19c)] = C(0x1ae), h[C(0x195)] = B(0x181), h[B(0x175)] = function (u, v) {
            return u * v;
        }, h[B(0x193)] = function (u, v) {
            return u - v;
        }, h[C(0x176)] = B(0x17c), h[C(0x189)] = B(0x18b), h[B(0x19a)] = C(0x1a8), h[C(0x1a5)] = B(0x191), h[C(0x1a6)] = B(0x1aa), h[C(0x1a0)] = function (u, v) {
            return u > v;
        }, h[C(0x19f)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[C(0x192)][C(0x17e)](sequelize_1[C(0x192)]['fn'](i[C(0x186)], sequelize_1[C(0x192)][C(0x1ad)](i[B(0x19c)])), i[C(0x195)], '%' + searchParam[C(0x17b) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x196)]]: '%' + searchParam[B(0x17b) + 'e']() + '%' } }
                ]
            }, l = 0x1c9e + 0x1f4e + -0x3bc4, m = i[C(0x175)](l, i[B(0x193)](+pageNumber, -0x266 + -0x20af + 0x9 * 0x3e6)), n = {};
        n[B(0x1a4)] = Queue_1[C(0x18a)], n[B(0x188)] = [
            'id',
            i[B(0x176)]
        ];
        const o = {};
        o[B(0x1a4)] = Tenant_1[C(0x18a)], o[B(0x188)] = [
            'id',
            i[B(0x189)]
        ];
        const p = {};
        p[B(0x17e)] = j, p[B(0x194)] = [
            n,
            o
        ], p[B(0x188)] = [
            i[B(0x189)],
            'id',
            i[B(0x19a)],
            i[B(0x1a5)]
        ], p[C(0x179)] = l, p[C(0x1ab)] = m, p[B(0x1a2)] = !![], p[B(0x1a3)] = [[
                i[C(0x189)],
                i[C(0x1a6)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[C(0x18a)][C(0x18e) + C(0x1a1)](p), s = i[B(0x1a0)](q, i[C(0x19f)](m, r[B(0x185)])), t = {};
        return t[C(0x1a9)] = r, t[C(0x187)] = q, t[C(0x18f)] = s, t;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbab * -0x2 + -0x6aa + 0x1f75);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[z(0x18a)] = AdminListUsersService;