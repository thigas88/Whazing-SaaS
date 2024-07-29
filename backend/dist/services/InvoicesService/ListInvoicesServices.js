'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xb9)) / (-0x1 * 0x1f83 + -0x3f5 * -0x3 + 0x13a5) + -parseInt(s(0xb3)) / (0x2075 + -0x7d9 * -0x1 + -0x284c) * (-parseInt(t(0x95)) / (0x1a5c * -0x1 + 0x199e + -0xc1 * -0x1)) + -parseInt(t(0x9e)) / (-0x223 * 0x7 + -0x2 * 0xdeb + -0x34b * -0xd) + -parseInt(t(0xa9)) / (-0x1ee0 + 0x19 * -0x52 + 0x26e7) * (parseInt(s(0x9b)) / (-0x322 + -0x3d * 0x20 + -0x228 * -0x5)) + parseInt(s(0x98)) / (-0x1 * 0xd69 + -0x70e + -0x7a * -0x2b) * (parseInt(s(0xbe)) / (0xc09 + -0x21a4 + 0x15a3)) + -parseInt(t(0xa6)) / (0x5 * 0xfe + 0x20f5 + 0x1 * -0x25e2) + -parseInt(t(0xca)) / (0x16d4 + -0x2d3 + -0x13f7) * (-parseInt(t(0xad)) / (0x634 + 0x756 * -0x2 + 0x883));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf988 + -0x4280 + 0x693fb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2709 * -0x1 + 0x18c7 * 0x1 + 0x76b * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[u(0xb6) + v(0xc9)] || function (c) {
    const w = u;
    return c && c[w(0xba)] ? c : { 'default': c };
};
const k = {};
k[v(0x97)] = !![], Object[u(0xb4) + v(0xa7)](exports, u(0xba), k);
const sequelize_1 = require(u(0x94)), Invoices_1 = __importDefault(require(v(0xc5) + u(0xaf) + 's')), ListInvoicesServices = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = u, y = v, f = {};
        f[x(0xc8)] = x(0x9f), f[x(0xc4)] = x(0xa4), f[y(0xbd)] = y(0xc7), f[x(0xb8)] = function (q, r) {
            return q * r;
        }, f[x(0xc1)] = function (q, r) {
            return q - r;
        }, f[x(0xac)] = y(0x97), f[x(0xa8)] = x(0xbf), f[x(0xaa)] = x(0x96), f[x(0xae)] = y(0xb5), f[y(0xb2)] = x(0xb7), f[y(0xc0)] = x(0xb0), f[x(0xa5)] = function (q, r) {
            return q > r;
        }, f[x(0xa2)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'name': sequelize_1[y(0xcc)][x(0xa1)](sequelize_1[y(0xcc)]['fn'](g[x(0xc8)], sequelize_1[y(0xcc)][x(0xbb)](g[x(0xc4)])), g[x(0xbd)], '%' + searchParam[x(0xcb) + 'e']()[y(0x9d)]() + '%') }] }, i = -0x241 * -0x11 + 0x22a1 + -0x48de, j = g[x(0xb8)](i, g[y(0xc1)](+pageNumber, 0x736 + 0x8 * 0x463 + -0x2a4d * 0x1)), l = {};
        l[x(0xc2)] = [
            'id',
            g[x(0xc4)],
            g[y(0xac)],
            g[y(0xa8)],
            g[y(0xaa)],
            g[x(0xae)],
            g[x(0xb2)]
        ], l[x(0xa1)] = h, l[x(0x99)] = i, l[y(0xab)] = j, l[y(0x9a)] = [[
                'id',
                g[x(0xc0)]
            ]];
        const {
                count: m,
                rows: n
            } = await Invoices_1[y(0xa3)][x(0xb1) + y(0x9c)](l), o = g[x(0xa5)](m, g[x(0xa2)](j, n[x(0xc6)])), p = {};
        return p[x(0xbc)] = n, p[x(0xa0)] = m, p[y(0xc3)] = o, p;
    };
function a() {
    const z = [
        'createdAt',
        '__importDe',
        'updatedAt',
        'xnGxi',
        '93275CRQcXf',
        '__esModule',
        'col',
        'invoices',
        'wrSAo',
        '32zQPTMs',
        'dueDate',
        'lAVLo',
        'TzkZd',
        'attributes',
        'hasMore',
        'mgRHM',
        '../../mode',
        'length',
        'LIKE',
        'pQotS',
        'fault',
        '30evuQxU',
        'toLowerCas',
        'Sequelize',
        'sequelize',
        '141piixkF',
        'status',
        'value',
        '1034012bFjlOs',
        'limit',
        'order',
        '3786RbZbJa',
        'ntAll',
        'trim',
        '990372luafxj',
        'LOWER',
        'count',
        'where',
        'UESLK',
        'default',
        'detail',
        'EGziI',
        '4872222OCsvXk',
        'erty',
        'ydigd',
        '4015GwuOQR',
        'LUxAY',
        'offset',
        'mzmAO',
        '1182577BDFanM',
        'ymsMU',
        'ls/Invoice',
        'ASC',
        'findAndCou',
        'wDRxm',
        '40574HmRewB',
        'defineProp'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[u(0xa3)] = ListInvoicesServices;