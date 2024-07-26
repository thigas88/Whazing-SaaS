'use strict';
function a() {
    const z = [
        'findAndCou',
        'offset',
        'ntAll',
        'title',
        'bxnwM',
        '3vsjOVv',
        'dNHci',
        'OGCnf',
        '48864phfPNA',
        'trim',
        'order',
        'erty',
        'col',
        '2237704fQYqYQ',
        '2313535fdOdxj',
        'LIKE',
        'length',
        'YGsWT',
        '6yUpBYl',
        'defineProp',
        'hasMore',
        '9TDShcT',
        'ls/Help',
        'ASC',
        'LOWER',
        '216442EeFbxk',
        'value',
        'TdeHB',
        '130472geokRw',
        '21ojVfFx',
        'toLowerCas',
        '1111230zeKaLe',
        'sequelize',
        '315688cHnBzz',
        '../../mode',
        'aLwmK',
        'Sequelize',
        '__importDe',
        'VKouM',
        'lVhCI',
        '__esModule',
        '473iImSwO',
        'count',
        'default',
        'records',
        'where',
        'fault',
        'limit'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xaf)) / (0x1046 + -0x2174 + -0x112f * -0x1) + -parseInt(t(0xb2)) / (-0x26f3 + 0x12 * -0x1b5 + -0x1 * -0x45af) * (-parseInt(t(0x9b)) / (0xdd8 + -0x23ad + -0x6 * -0x3a4)) + -parseInt(s(0xa3)) / (-0xc4 * -0x7 + -0x1657 + 0x10ff) + parseInt(t(0xa4)) / (0x10e + 0x5a * -0x4f + -0x25 * -0xb9) * (parseInt(s(0xa8)) / (-0x10e1 + 0x90a * 0x1 + 0x7dd)) + -parseInt(t(0xb3)) / (0x1 * -0x2239 + -0x136 * 0x1 + -0x11bb * -0x2) * (-parseInt(s(0xb7)) / (-0x1999 + 0x41c * -0x2 + 0x21d9)) + parseInt(s(0xab)) / (0x2 * 0x2c3 + -0xcf0 + -0x773 * -0x1) * (-parseInt(t(0xb5)) / (-0x137d * 0x1 + 0x6 * -0x133 + 0x1ab9)) + parseInt(t(0xbf)) / (0x1c12 * 0x1 + 0x1e7a + -0x3a81) * (parseInt(s(0x9e)) / (0x5f * 0x1f + 0x1ded + -0x2 * 0x14b1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8fe11 + -0x8a329 * 0x1 + 0x379 * 0x183));
var __importDefault = this && this[u(0xbb) + v(0xc4)] || function (c) {
    const w = u;
    return c && c[w(0xbe)] ? c : { 'default': c };
};
const k = {};
k[v(0xb0)] = !![], Object[v(0xa9) + u(0xa1)](exports, u(0xbe), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd * 0x163 + 0x17d * 0x13 + 0x2db5 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(v(0xb6)), Help_1 = __importDefault(require(v(0xb8) + v(0xac))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = u, f = {};
        f[x(0x9a)] = x(0xae), f[x(0xb1)] = x(0x99), f[y(0xb9)] = x(0xa5), f[x(0xbc)] = function (q, r) {
            return q * r;
        }, f[y(0xa7)] = function (q, r) {
            return q - r;
        }, f[x(0xbd)] = x(0xad), f[y(0x9d)] = function (q, r) {
            return q > r;
        }, f[x(0x9c)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[y(0xba)][x(0xc3)](sequelize_1[x(0xba)]['fn'](g[y(0x9a)], sequelize_1[x(0xba)][x(0xa2)](g[y(0xb1)])), g[x(0xb9)], '%' + searchParam[x(0xb4) + 'e']()[x(0x9f)]() + '%') }] }, i = 0x1279 + -0xc7 * 0x2 + -0x9 * 0x1df, j = g[x(0xbc)](i, g[y(0xa7)](+pageNumber, -0x189 * -0x13 + -0x1 * -0x463 + -0x218d)), l = {};
        l[y(0xc3)] = h, l[x(0xc5)] = i, l[x(0xc7)] = j, l[x(0xa0)] = [[
                g[y(0xb1)],
                g[y(0xbd)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[y(0xc1)][x(0xc6) + y(0xc8)](l), o = g[x(0x9d)](m, g[x(0x9c)](j, n[x(0xa6)])), p = {};
        return p[y(0xc2)] = n, p[y(0xc0)] = m, p[x(0xaa)] = o, p;
    };
exports[u(0xc1)] = ListService;