'use strict';
function a() {
    const C = [
        'defineProp',
        'uVGXP',
        'like',
        'limit',
        '2097670KuvoqL',
        'nPNyp',
        'FWaTk',
        '21VqkIms',
        'where',
        'sequelize',
        'uchYo',
        'order',
        'name',
        'OSEXR',
        'offset',
        '232604sBtqRr',
        'ls/Queue',
        'include',
        'MOCLo',
        '4TqqNEa',
        '8ISoysn',
        '__esModule',
        'Sequelize',
        '4012929TQiECV',
        '2077430aAWjVV',
        'vTNog',
        'oMPZe',
        'profile',
        'LIKE',
        '6IieubB',
        'col',
        'count',
        '5710353vuCWLx',
        'model',
        'ntAll',
        'ASC',
        'KzYTb',
        '1918554WHNlhP',
        '__importDe',
        'attributes',
        '../../mode',
        'fault',
        'LOWER',
        '2241609PabCjL',
        'erty',
        'findAndCou',
        'distinct',
        'value',
        'users',
        'length',
        'email',
        'Ehzrp',
        'toLowerCas',
        'hasMore',
        'default',
        'ls/User',
        'queue',
        'Rmwrv'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x142)) / (0x1d29 + 0xb4b + 0x5 * -0x817) * (-parseInt(v(0x16e)) / (-0x17a9 + 0xae0 + -0x28f * -0x5)) + parseInt(w(0x150)) / (-0xebd + -0x249 * -0xa + 0x11 * -0x7a) * (-parseInt(w(0x138)) / (0x1 * -0x9c5 + 0x4d2 * 0x7 + 0x17f5 * -0x1)) + parseInt(w(0x13d)) / (0x1a * -0x9b + 0x4d * -0x1f + -0x1ee * -0xd) + -parseInt(w(0x14a)) / (-0x125 * 0x9 + -0xb08 + 0x155b) * (-parseInt(v(0x166)) / (-0x1 * -0xaee + -0x72 * 0x53 + 0x1a0f)) + -parseInt(v(0x139)) / (0x431 + -0xead * 0x1 + 0xa84) * (parseInt(v(0x13c)) / (-0x1 * -0x126f + 0x1ea0 + 0x9ce * -0x5)) + parseInt(v(0x163)) / (0x2 * 0x104f + -0x249e + 0x2f * 0x16) + -parseInt(v(0x145)) / (-0x2096 + -0xce3 + -0x3cb * -0xc);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x64d47 * -0x1 + 0xc928a * -0x1 + 0xef85a * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x54e + 0xe6c + -0x1 * 0x1285);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x14b) + y(0x14e)] || function (c) {
    const z = x;
    return c && c[z(0x13a)] ? c : { 'default': c };
};
const k = {};
k[y(0x154)] = !![], Object[y(0x15f) + x(0x151)](exports, y(0x13a), k);
const sequelize_1 = require(y(0x168)), Queue_1 = __importDefault(require(x(0x14d) + x(0x135))), User_1 = __importDefault(require(x(0x14d) + y(0x15c))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = x, B = x, h = {};
        h[A(0x160)] = B(0x14f), h[B(0x16c)] = A(0x16b), h[B(0x158)] = A(0x141), h[A(0x13f)] = function (t, u) {
            return t * u;
        }, h[B(0x169)] = function (t, u) {
            return t - u;
        }, h[B(0x164)] = B(0x15d), h[A(0x15e)] = B(0x157), h[B(0x165)] = A(0x140), h[B(0x13e)] = B(0x148), h[B(0x137)] = function (t, u) {
            return t > u;
        }, h[A(0x149)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x13b)][B(0x167)](sequelize_1[B(0x13b)]['fn'](i[A(0x160)], sequelize_1[A(0x13b)][B(0x143)](i[B(0x16c)])), i[A(0x158)], '%' + searchParam[A(0x159) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x161)]]: '%' + searchParam[A(0x159) + 'e']() + '%' } }
                ]
            }, l = -0x1 * -0x1988 + -0x7c0 + -0x11a0, m = i[B(0x13f)](l, i[B(0x169)](+pageNumber, 0xe61 * -0x2 + 0xf * 0x170 + 0x733)), n = {};
        n[A(0x146)] = Queue_1[A(0x15b)], n[A(0x14c)] = [
            'id',
            i[A(0x164)]
        ];
        const o = {};
        o[A(0x167)] = j, o[A(0x136)] = [n], o[A(0x14c)] = [
            i[B(0x16c)],
            'id',
            i[A(0x15e)],
            i[B(0x165)]
        ], o[A(0x162)] = l, o[B(0x16d)] = m, o[B(0x153)] = !![], o[A(0x16a)] = [[
                i[A(0x16c)],
                i[B(0x13e)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x15b)][B(0x152) + B(0x147)](o), r = i[B(0x137)](p, i[B(0x149)](m, q[B(0x156)])), s = {};
        return s[B(0x155)] = q, s[B(0x144)] = p, s[B(0x15a)] = r, s;
    };
exports[x(0x15b)] = ListUsersService;