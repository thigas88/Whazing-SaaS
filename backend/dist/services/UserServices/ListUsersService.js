'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1e5)) / (-0x1bf4 + -0x305 * 0x1 + 0x1efa) + -parseInt(w(0x20e)) / (0x1670 + -0x12c5 + -0x1 * 0x3a9) * (parseInt(w(0x1f1)) / (-0x3 * -0x48f + -0x5 * 0x555 + -0x3 * -0x455)) + -parseInt(v(0x1f6)) / (-0xbc * -0x3 + -0x1 * -0x781 + -0x9b1) + -parseInt(v(0x1fc)) / (0x3 * 0xaf2 + 0x1 * -0x81e + -0x1 * 0x18b3) * (-parseInt(v(0x1dc)) / (0xc7 * 0x1b + 0x2302 + -0x37f9)) + parseInt(v(0x1fd)) / (0xb20 + 0xcb3 + -0xbe6 * 0x2) * (parseInt(v(0x1e8)) / (-0x13cb * 0x1 + 0xc * 0x238 + -0x6cd * 0x1)) + parseInt(v(0x1f9)) / (0x16a9 + 0x1a7d + 0x311d * -0x1) * (-parseInt(w(0x1df)) / (-0xe83 * 0x1 + 0xdce + 0x1 * 0xbf)) + parseInt(v(0x204)) / (-0x1d1b * -0x1 + 0x1dda + -0x2 * 0x1d75);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2db74 * 0x1 + 0x2 * -0x3e16f + 0x2c32d * 0x7));
function a() {
    const C = [
        'LOWER',
        '35830NCOHLX',
        'YBkTU',
        'UGCBQ',
        'ASC',
        'sequelize',
        'ls/User',
        '851278SIxJxX',
        'attributes',
        'KCfze',
        '56312ItWcfP',
        'distinct',
        'order',
        'ntAll',
        '../../mode',
        'offset',
        'col',
        'XylVQ',
        'email',
        '237zgMusv',
        'LIKE',
        'vVcEu',
        'hasMore',
        'bLvgS',
        '4212732CDEIja',
        'include',
        'ls/Queue',
        '1881KaZtAN',
        'XHAYa',
        'Sequelize',
        '73165ytDioe',
        '406RGbdnC',
        'length',
        'default',
        'defineProp',
        'fault',
        'queue',
        'limit',
        '21946210YGLPym',
        'like',
        'erty',
        'value',
        'name',
        'profile',
        'HdLxB',
        'findAndCou',
        '__esModule',
        'JkYQM',
        '4028bYkaZp',
        'users',
        'DkgkU',
        'nTxGL',
        'toLowerCas',
        '__importDe',
        'count',
        'model',
        '402fvKatn',
        'where'
    ];
    a = function () {
        return C;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1962 + 0x3df * 0x6 + -0x1 * -0x3ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x1d9) + y(0x201)] || function (c) {
    const z = y;
    return c && c[z(0x20c)] ? c : { 'default': c };
};
const k = {};
k[x(0x207)] = !![], Object[y(0x200) + x(0x206)](exports, x(0x20c), k);
const sequelize_1 = require(x(0x1e3)), Queue_1 = __importDefault(require(x(0x1ec) + y(0x1f8))), User_1 = __importDefault(require(y(0x1ec) + y(0x1e4))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = x, B = x, h = {};
        h[A(0x1e0)] = B(0x1de), h[A(0x1fa)] = B(0x208), h[B(0x1f3)] = A(0x1f2), h[A(0x1f5)] = function (t, u) {
            return t * u;
        }, h[B(0x1e1)] = function (t, u) {
            return t - u;
        }, h[A(0x20a)] = A(0x202), h[B(0x20d)] = A(0x1f0), h[B(0x1d7)] = B(0x209), h[A(0x1ef)] = A(0x1e2), h[B(0x1e7)] = function (t, u) {
            return t > u;
        }, h[B(0x210)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0x1fb)][A(0x1dd)](sequelize_1[A(0x1fb)]['fn'](i[B(0x1e0)], sequelize_1[A(0x1fb)][B(0x1ee)](i[B(0x1fa)])), i[B(0x1f3)], '%' + searchParam[B(0x1d8) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][A(0x205)]]: '%' + searchParam[A(0x1d8) + 'e']() + '%' } }
                ]
            }, l = 0x1828 + 0x46f * 0x2 + -0x20de, m = i[A(0x1f5)](l, i[A(0x1e1)](+pageNumber, 0x7 * -0x335 + -0x1ae1 + 0x3155)), n = {};
        n[A(0x1db)] = Queue_1[B(0x1ff)], n[A(0x1e6)] = [
            'id',
            i[B(0x20a)]
        ];
        const o = {};
        o[B(0x1dd)] = j, o[A(0x1f7)] = [n], o[B(0x1e6)] = [
            i[B(0x1fa)],
            'id',
            i[A(0x20d)],
            i[B(0x1d7)]
        ], o[B(0x203)] = l, o[A(0x1ed)] = m, o[B(0x1e9)] = !![], o[B(0x1ea)] = [[
                i[A(0x1fa)],
                i[B(0x1ef)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x1ff)][A(0x20b) + B(0x1eb)](o), r = i[B(0x1e7)](p, i[A(0x210)](m, q[B(0x1fe)])), s = {};
        return s[A(0x20f)] = q, s[B(0x1da)] = p, s[B(0x1f4)] = r, s;
    };
exports[x(0x1ff)] = ListUsersService;