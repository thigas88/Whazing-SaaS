'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f78 + -0x53 * 0x6b + 0x2159 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x95)) / (-0x2175 + -0x219 * -0x1 + 0x1f5d) * (parseInt(t(0xa7)) / (-0x41b * -0x1 + 0xd6d + -0x1186)) + parseInt(t(0x9c)) / (0x1073 + 0xa6a + 0xd6d * -0x2) + -parseInt(s(0xac)) / (0x1999 + -0x216d + 0xfb * 0x8) * (parseInt(t(0xa4)) / (-0x2cb * 0x9 + 0x1 * 0x833 + -0x5a7 * -0x3)) + -parseInt(s(0x9f)) / (0xbfe + 0x18d * 0x5 + -0x21 * 0x99) * (parseInt(s(0xa8)) / (-0x5b7 + 0x22d4 + -0x1d16)) + -parseInt(t(0xb5)) / (-0x2fd * 0x1 + 0x1215 * -0x1 + -0xa8d * -0x2) * (-parseInt(s(0xb9)) / (-0xea6 + -0xa7 * -0x23 + -0x826)) + -parseInt(s(0x9a)) / (0x16 * -0x15b + 0x23fa + -0x61e) * (parseInt(t(0x92)) / (0x132e + -0x1 * 0xcac + 0x1 * -0x677)) + -parseInt(t(0x8c)) / (0x1dfe + -0x1 * -0xe5 + 0x62b * -0x5) * (-parseInt(s(0x8f)) / (-0x30d + 0x16e3 + -0x13c9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x3c25 + 0x2476 * 0x40 + 0x16447));
var __importDefault = this && this[u(0xad) + u(0x9d)] || function (c) {
    const w = u;
    return c && c[w(0x97)] ? c : { 'default': c };
};
const k = {};
function a() {
    const z = [
        'limit',
        'records',
        '8045851RqgVDF',
        'ls/Help',
        'default',
        '43kGTTqO',
        'title',
        '__esModule',
        'erty',
        'Sequelize',
        '10vOwUDx',
        'LOWER',
        '1695981PoZxYS',
        'fault',
        'offset',
        '2502mGARCg',
        'length',
        'WhfaP',
        'findAndCou',
        'rVdrO',
        '4091415HMZqox',
        '../../mode',
        'order',
        '35822rNBwuL',
        '6153wFIFII',
        'trim',
        'value',
        'ybWaY',
        '4SBAsvk',
        '__importDe',
        'FdcTh',
        'count',
        'aOjrW',
        'ntAll',
        'RCUqi',
        'Ldwil',
        'where',
        '523312GaPvfj',
        'defineProp',
        'sequelize',
        'toLowerCas',
        '117axDBss',
        'hasMore',
        'ASC',
        'fcXMK',
        '12LLsihh',
        'col',
        'LIKE',
        '25270921LmCvgb'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[v(0xaa)] = !![], Object[u(0xb6) + v(0x98)](exports, u(0x97), k);
const sequelize_1 = require(v(0xb7)), Help_1 = __importDefault(require(v(0xa5) + v(0x93))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = u, f = {};
        f[x(0xb2)] = y(0x9b), f[y(0xae)] = x(0x96), f[y(0xb0)] = y(0x8e), f[y(0xa1)] = function (q, r) {
            return q * r;
        }, f[y(0xb3)] = function (q, r) {
            return q - r;
        }, f[y(0xa3)] = y(0x8a), f[y(0x8b)] = function (q, r) {
            return q > r;
        }, f[y(0xab)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[x(0x99)][x(0xb4)](sequelize_1[x(0x99)]['fn'](g[y(0xb2)], sequelize_1[y(0x99)][y(0x8d)](g[y(0xae)])), g[y(0xb0)], '%' + searchParam[y(0xb8) + 'e']()[x(0xa9)]() + '%') }] }, i = 0x1153 + -0x10d5 + -0x6a, j = g[x(0xa1)](i, g[x(0xb3)](+pageNumber, -0x4 * 0x208 + -0x1c4f * 0x1 + 0x2470)), l = {};
        l[y(0xb4)] = h, l[x(0x90)] = i, l[x(0x9e)] = j, l[y(0xa6)] = [[
                g[y(0xae)],
                g[y(0xa3)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[y(0x94)][y(0xa2) + x(0xb1)](l), o = g[y(0x8b)](m, g[x(0xab)](j, n[y(0xa0)])), p = {};
        return p[x(0x91)] = n, p[x(0xaf)] = m, p[y(0x89)] = o, p;
    };
exports[u(0x94)] = ListService;