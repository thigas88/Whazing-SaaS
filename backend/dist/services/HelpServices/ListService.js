'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xc6)) / (0x15e6 + 0xd0d + 0x1179 * -0x2) + parseInt(t(0xdd)) / (-0x1 * -0xd15 + -0x4c * -0x7e + -0x327b) + parseInt(s(0xca)) / (-0x2115 + -0x1 * 0x7b4 + 0x28cc) * (parseInt(t(0xc3)) / (0x1 * -0x48d + -0x2369 + 0x27fa)) + parseInt(t(0xd9)) / (0x3 * -0xb71 + 0x301 * -0x9 + 0x3d61) + parseInt(s(0xbd)) / (0x1e4e + -0x22ea + 0x4a2 * 0x1) * (-parseInt(s(0xc8)) / (-0x9ed * -0x2 + -0x218a + 0xdb7)) + parseInt(t(0xdb)) / (-0x220c + 0x1 * 0x19a9 + 0x86b) + -parseInt(t(0xd3)) / (0xc11 + -0xdd7 + -0x1cf * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * -0x391f + 0xe * 0xff38 + -0x4b189));
var __importDefault = this && this[u(0xd4) + u(0xc7)] || function (c) {
    const w = u;
    return c && c[w(0xc4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x15ff + -0x2 * -0xb9e + 0x9a * -0x4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'limit',
        'IBeyW',
        'count',
        'default',
        'hasMore',
        '../../mode',
        '218970VqiFpg',
        'jlhkR',
        'order',
        'offset',
        'MgRqt',
        'ntAll',
        '2064172eAhGxw',
        '__esModule',
        'erty',
        '790856dvvIsO',
        'fault',
        '49vApafY',
        'LIKE',
        '3ZOBzIS',
        'ASC',
        'sequelize',
        'SqPaQ',
        'trim',
        'ls/Help',
        'value',
        'title',
        'col',
        '4181400KAEFnN',
        '__importDe',
        'bdDGZ',
        'ZvjTK',
        'toLowerCas',
        'defineProp',
        '2683055NzvevW',
        'length',
        '6510608EyIqxj',
        'records',
        '298382vrnfyz',
        'Sequelize',
        'LOWER',
        'DnhtB',
        'findAndCou',
        'where',
        'JIONe'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[u(0xd0)] = !![], Object[u(0xd8) + v(0xc5)](exports, v(0xc4), k);
const sequelize_1 = require(v(0xcc)), Help_1 = __importDefault(require(v(0xbc) + v(0xcf))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = v, f = {};
        f[x(0xe0)] = y(0xdf), f[y(0xb8)] = x(0xd1), f[x(0xbe)] = y(0xc9), f[x(0xc1)] = function (q, r) {
            return q * r;
        }, f[y(0xcd)] = function (q, r) {
            return q - r;
        }, f[x(0xe3)] = y(0xcb), f[x(0xd5)] = function (q, r) {
            return q > r;
        }, f[y(0xd6)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[y(0xde)][x(0xe2)](sequelize_1[y(0xde)]['fn'](g[x(0xe0)], sequelize_1[x(0xde)][x(0xd2)](g[x(0xb8)])), g[x(0xbe)], '%' + searchParam[x(0xd7) + 'e']()[y(0xce)]() + '%') }] }, i = -0x1d * -0xab + -0x4fd * -0x4 + -0xd15 * 0x3, j = g[y(0xc1)](i, g[x(0xcd)](+pageNumber, -0x16c0 + -0x1062 + 0x1 * 0x2723)), l = {};
        l[x(0xe2)] = h, l[y(0xb7)] = i, l[x(0xc0)] = j, l[y(0xbf)] = [[
                g[y(0xb8)],
                g[y(0xe3)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[y(0xba)][y(0xe1) + x(0xc2)](l), o = g[y(0xd5)](m, g[y(0xd6)](j, n[y(0xda)])), p = {};
        return p[y(0xdc)] = n, p[y(0xb9)] = m, p[y(0xbb)] = o, p;
    };
exports[u(0xba)] = ListService;