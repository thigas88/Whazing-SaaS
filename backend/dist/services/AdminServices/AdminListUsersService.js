'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x883 * -0x1 + -0x891 + 0x11d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0xf4)) / (-0x113 + -0x10e0 + 0x11f4) * (parseInt(w(0xf0)) / (-0x11ab + 0xd92 + -0x41b * -0x1)) + -parseInt(w(0xf8)) / (-0x20a8 + 0x29 * -0x2f + 0xf5 * 0x2a) * (parseInt(w(0xd7)) / (0x4b3 * 0x1 + -0x14f0 * 0x1 + 0x1041)) + -parseInt(x(0xdc)) / (0x2532 * -0x1 + 0x72f + 0x782 * 0x4) * (-parseInt(w(0xe0)) / (0x89a + 0x1 * -0x1c25 + 0x1391)) + -parseInt(x(0xe7)) / (-0x1ff7 + 0x1cb7 + 0x347) + -parseInt(x(0xf6)) / (-0x45a + -0xe2 + 0x544) * (-parseInt(w(0xd0)) / (0xb06 * 0x3 + 0x1507 + -0x4 * 0xd84)) + parseInt(x(0xf5)) / (0x4 * 0x359 + 0xea6 + -0x1c00 * 0x1) * (-parseInt(w(0xca)) / (0x786 * -0x2 + -0x1c21 + 0x2b38)) + parseInt(x(0xe9)) / (0x10f2 + 0xd01 + -0x1 * 0x1de7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb99e5 + 0x71153 + 0x138372));
var __importDefault = this && this[y(0xcc) + y(0xd3)] || function (c) {
    const A = y;
    return c && c[A(0xc8)] ? c : { 'default': c };
};
const k = {};
function a() {
    const D = [
        'value',
        '10sHSMjy',
        'LOWER',
        'model',
        'ls/User',
        '1289610eUbjIN',
        'default',
        'ls/Queue',
        'vpXEc',
        'offset',
        'AkIXD',
        'findAndCou',
        '10665123Wzmpnq',
        'sequelize',
        '30166980nBgLUg',
        'hasMore',
        'NlgrG',
        'email',
        'defineProp',
        '../../mode',
        'profile',
        '29554oFuTNG',
        'limit',
        'distinct',
        'col',
        '67yQOqyg',
        '707030WMACwX',
        '8oCmoHo',
        'name',
        '1589403RIAzeO',
        'toLowerCas',
        'User.name',
        'OPnxS',
        'LIKE',
        'queue',
        'ntAll',
        'count',
        'HniSf',
        'AcHRH',
        'LJsKB',
        'where',
        'JAwJU',
        'users',
        '__esModule',
        'order',
        '187fFrRWz',
        'like',
        '__importDe',
        'attributes',
        'cwGpK',
        'ls/Tenant',
        '7497234xnJOQl',
        'length',
        'xstEe',
        'fault',
        'ASC',
        'include',
        'yAGJP',
        '8VAASBo',
        'ZOgsL',
        'erty',
        'Sequelize'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[z(0xdb)] = !![], Object[z(0xed) + y(0xd9)](exports, y(0xc8), k);
const sequelize_1 = require(z(0xe8)), Queue_1 = __importDefault(require(y(0xee) + y(0xe2))), Tenant_1 = __importDefault(require(z(0xee) + z(0xcf))), User_1 = __importDefault(require(z(0xee) + z(0xdf))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = y, C = z, h = {};
        h[B(0xc3)] = B(0xdd), h[B(0xd6)] = C(0xfa), h[C(0xce)] = B(0xfc), h[B(0xc2)] = function (u, v) {
            return u * v;
        }, h[C(0xfb)] = function (u, v) {
            return u - v;
        }, h[B(0xd2)] = C(0xbf), h[B(0xe3)] = B(0xf7), h[B(0xc6)] = C(0xec), h[C(0xe5)] = B(0xef), h[B(0xd8)] = C(0xd4), h[C(0xeb)] = function (u, v) {
            return u > v;
        }, h[B(0xc4)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[C(0xda)][B(0xc5)](sequelize_1[C(0xda)]['fn'](i[B(0xc3)], sequelize_1[C(0xda)][B(0xf3)](i[C(0xd6)])), i[B(0xce)], '%' + searchParam[C(0xf9) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0xcb)]]: '%' + searchParam[B(0xf9) + 'e']() + '%' } }
                ]
            }, l = 0xf * 0x1d5 + 0x77b * 0x2 + -0x2a49, m = i[C(0xc2)](l, i[C(0xfb)](+pageNumber, -0xc1a + -0x1714 + 0x232f * 0x1)), n = {};
        n[C(0xde)] = Queue_1[C(0xe1)], n[C(0xcd)] = [
            'id',
            i[C(0xd2)]
        ];
        const o = {};
        o[C(0xde)] = Tenant_1[B(0xe1)], o[C(0xcd)] = [
            'id',
            i[B(0xe3)]
        ];
        const p = {};
        p[B(0xc5)] = j, p[B(0xd5)] = [
            n,
            o
        ], p[C(0xcd)] = [
            i[C(0xe3)],
            'id',
            i[B(0xc6)],
            i[B(0xe5)]
        ], p[B(0xf1)] = l, p[B(0xe4)] = m, p[B(0xf2)] = !![], p[B(0xc9)] = [[
                i[B(0xe3)],
                i[C(0xd8)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[C(0xe1)][B(0xe6) + C(0xc0)](p), s = i[C(0xeb)](q, i[B(0xc4)](m, r[C(0xd1)])), t = {};
        return t[C(0xc7)] = r, t[C(0xc1)] = q, t[B(0xea)] = s, t;
    };
exports[y(0xe1)] = AdminListUsersService;