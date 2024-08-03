'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x127)) / (0x1d1a + -0x12f * 0xe + -0xc87) * (parseInt(w(0x11a)) / (0x3c7 + 0x5 * 0x445 + -0x191e)) + -parseInt(w(0x12e)) / (-0x30 * 0x8a + 0x99b * -0x1 + 0x237e) + parseInt(w(0x144)) / (0xd6a + -0x1bc + -0xbaa) + -parseInt(w(0x132)) / (0x1eff + 0x5 * 0x735 + 0x49 * -0xeb) + parseInt(v(0x13d)) / (0x57e + 0x4b2 * -0x3 + 0x89e) * (-parseInt(v(0x13a)) / (-0x193 * -0x17 + -0x2cf * 0x7 + -0x1085 * 0x1)) + parseInt(w(0x145)) / (-0x13f3 + -0x22 * -0x2 + -0x2d1 * -0x7) * (-parseInt(v(0x134)) / (-0x75b * -0x2 + -0x14ac + 0x5 * 0x133)) + parseInt(w(0x130)) / (-0xb02 * -0x1 + 0x20aa + -0x2ba2) * (parseInt(w(0x11b)) / (-0x22ad + 0x6 * 0x335 + 0xf7a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb3b48 * 0x1 + 0x537f0 + -0x61c2a));
var __importDefault = this && this[x(0x129) + y(0x11c)] || function (c) {
    const z = x;
    return c && c[z(0x13c)] ? c : { 'default': c };
};
const k = {};
k[y(0x10d)] = !![], Object[y(0x11f) + x(0x117)](exports, x(0x13c), k);
function a() {
    const C = [
        'default',
        'queue',
        'profile',
        'hasMore',
        'distinct',
        'CQUEA',
        'ntAll',
        'erty',
        'users',
        'ls/User',
        '18596RQunNh',
        '1463wFrdBh',
        'fault',
        'tiWtm',
        'SaGqg',
        'defineProp',
        'count',
        'include',
        'LIKE',
        'findAndCou',
        'xhgkQ',
        'length',
        'sequelize',
        '118EspdbE',
        'ls/Queue',
        '__importDe',
        'like',
        'ZmruC',
        'col',
        'toLowerCas',
        '3882192GQtWlU',
        'offset',
        '326660syeyFV',
        'aARyf',
        '73325cOBMie',
        'model',
        '4164156GJfdGm',
        'Sequelize',
        'limit',
        'name',
        'SBRpq',
        'JZmdv',
        '507808WUsWLJ',
        'qfkNC',
        '__esModule',
        '72qpfsRT',
        'LOWER',
        'where',
        'attributes',
        'DaEbC',
        'JZopd',
        'email',
        '2139428nmJicF',
        '16InajbF',
        '../../mode',
        'value',
        'ASC',
        'order'
    ];
    a = function () {
        return C;
    };
    return a();
}
const sequelize_1 = require(y(0x126)), Queue_1 = __importDefault(require(x(0x146) + y(0x128))), User_1 = __importDefault(require(y(0x146) + y(0x119))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0x139)] = B(0x13e), h[A(0x12b)] = B(0x137), h[B(0x11e)] = A(0x122), h[B(0x13b)] = function (t, u) {
            return t * u;
        }, h[B(0x115)] = function (t, u) {
            return t - u;
        }, h[B(0x11d)] = A(0x111), h[B(0x141)] = B(0x143), h[A(0x138)] = B(0x112), h[A(0x131)] = A(0x10e), h[B(0x124)] = function (t, u) {
            return t > u;
        }, h[A(0x142)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0x135)][A(0x13f)](sequelize_1[B(0x135)]['fn'](i[A(0x139)], sequelize_1[A(0x135)][B(0x12c)](i[B(0x12b)])), i[B(0x11e)], '%' + searchParam[B(0x12d) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x12a)]]: '%' + searchParam[A(0x12d) + 'e']() + '%' } }
                ]
            }, l = 0xd * 0x22d + -0x1d * -0x147 + -0x412c, m = i[B(0x13b)](l, i[A(0x115)](+pageNumber, 0x6f * -0x4f + -0x21ae + 0x43f * 0x10)), n = {};
        n[B(0x133)] = Queue_1[A(0x110)], n[B(0x140)] = [
            'id',
            i[A(0x11d)]
        ];
        const o = {};
        o[B(0x13f)] = j, o[A(0x121)] = [n], o[A(0x140)] = [
            i[A(0x12b)],
            'id',
            i[A(0x141)],
            i[B(0x138)]
        ], o[B(0x136)] = l, o[B(0x12f)] = m, o[B(0x114)] = !![], o[B(0x10f)] = [[
                i[B(0x12b)],
                i[B(0x131)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x110)][B(0x123) + A(0x116)](o), r = i[B(0x124)](p, i[B(0x142)](m, q[A(0x125)])), s = {};
        return s[B(0x118)] = q, s[B(0x120)] = p, s[B(0x113)] = r, s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b4c + -0x102e + -0xa11 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0x110)] = ListUsersService;