'use strict';
function a() {
    const C = [
        'queue',
        'ntAll',
        'count',
        '369eCeAwL',
        '29352ZfVtkc',
        'order',
        'col',
        'findAndCou',
        'users',
        'bPbgo',
        'include',
        'ls/User',
        'defineProp',
        '6214aEeMjW',
        'LIKE',
        'EzGhT',
        '2468940JLGpxA',
        'sequelize',
        'Sequelize',
        'profile',
        'lJAdI',
        'yNnYm',
        'QpqsS',
        'LOWER',
        'fault',
        'name',
        'ASC',
        'jFzFe',
        'ls/Queue',
        '8GHPbrk',
        'hasMore',
        'limit',
        'where',
        '20DOKrBv',
        '67560wyOqrg',
        'attributes',
        'toLowerCas',
        '724283gYTliN',
        '48Berwpz',
        'default',
        'erty',
        'jmefH',
        'value',
        'like',
        'length',
        'offset',
        'iBIxZ',
        'model',
        'ZFfXb',
        '../../mode',
        '365582dtthIr',
        '743934uvZDfh',
        'sGnCC',
        '6HZsLzB',
        '__importDe',
        'email',
        '__esModule',
        'CySAp',
        '2339381KsrntZ',
        'distinct'
    ];
    a = function () {
        return C;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe0 * 0xc + -0x1 * 0x23db + -0x5 * -0x95d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x8a)) / (-0x3 * -0x504 + 0xdd * -0xf + -0x86 * 0x4) + parseInt(v(0x98)) / (-0x25 * -0xc3 + -0x3 * 0xa99 + -0x2 * -0x1cf) * (parseInt(v(0x9a)) / (0x1 * 0x8e1 + 0x15d9 + -0x1eb7)) + -parseInt(v(0x82)) / (0x231f + -0x31 * 0x16 + -0x1ee5) * (parseInt(w(0xb1)) / (0x621 + -0xc1a + 0x5fe)) + -parseInt(w(0x8b)) / (0x1a30 + 0x30e * -0x3 + -0x440 * 0x4) * (-parseInt(w(0x97)) / (0x10de + -0x217f + 0x1a * 0xa4)) + -parseInt(w(0x87)) / (-0x23c5 * -0x1 + 0xc2e + 0x9 * -0x553) * (-parseInt(v(0xa4)) / (0x7 * 0x2ed + 0x9f2 + -0x1e64)) + parseInt(w(0x86)) / (-0x1 * -0x2216 + -0x7 * 0x4f1 + 0x8b) * (-parseInt(w(0x9f)) / (-0x25 * -0x7f + -0x602 + -0xc4e)) + parseInt(w(0xa5)) / (0x596 + 0x182e + 0x9e8 * -0x3) * (parseInt(w(0xae)) / (0x2612 + -0x9b8 + 0x13b * -0x17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x47 * 0x173e + 0xf4660 * -0x1 + 0x1 * 0x111174));
var __importDefault = this && this[x(0x9b) + x(0x7d)] || function (c) {
    const z = x;
    return c && c[z(0x9d)] ? c : { 'default': c };
};
const k = {};
k[x(0x8f)] = !![], Object[x(0xad) + x(0x8d)](exports, x(0x9d), k);
const sequelize_1 = require(y(0x76)), Queue_1 = __importDefault(require(x(0x96) + x(0x81))), User_1 = __importDefault(require(x(0x96) + x(0xac))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0x93)] = A(0x7c), h[A(0x80)] = A(0x7e), h[A(0xb0)] = B(0xaf), h[B(0x9e)] = function (t, u) {
            return t * u;
        }, h[A(0x8e)] = function (t, u) {
            return t - u;
        }, h[B(0x7b)] = B(0xa1), h[B(0xaa)] = B(0x9c), h[B(0x95)] = A(0x78), h[B(0x7a)] = A(0x7f), h[A(0x79)] = function (t, u) {
            return t > u;
        }, h[A(0x99)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[A(0x77)][A(0x85)](sequelize_1[A(0x77)]['fn'](i[B(0x93)], sequelize_1[A(0x77)][B(0xa7)](i[A(0x80)])), i[A(0xb0)], '%' + searchParam[A(0x89) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x90)]]: '%' + searchParam[B(0x89) + 'e']() + '%' } }
                ]
            }, l = -0x1a * -0x12a + -0x709 * -0x3 + -0x1 * 0x3337, m = i[B(0x9e)](l, i[B(0x8e)](+pageNumber, 0x21b1 + 0x17e1 * -0x1 + -0x1b * 0x5d)), n = {};
        n[B(0x94)] = Queue_1[B(0x8c)], n[B(0x88)] = [
            'id',
            i[A(0x7b)]
        ];
        const o = {};
        o[A(0x85)] = j, o[B(0xab)] = [n], o[B(0x88)] = [
            i[A(0x80)],
            'id',
            i[A(0xaa)],
            i[A(0x95)]
        ], o[A(0x84)] = l, o[B(0x92)] = m, o[A(0xa0)] = !![], o[B(0xa6)] = [[
                i[B(0x80)],
                i[A(0x7a)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[B(0x8c)][A(0xa8) + A(0xa2)](o), r = i[B(0x79)](p, i[A(0x99)](m, q[A(0x91)])), s = {};
        return s[A(0xa9)] = q, s[A(0xa3)] = p, s[A(0x83)] = r, s;
    };
exports[x(0x8c)] = ListUsersService;