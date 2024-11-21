'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x90)) / (0x1601 + 0x23c4 + -0x39c4) * (parseInt(x(0x9e)) / (0x414 + 0x3 * 0x5a5 + 0x13 * -0x11b)) + parseInt(w(0x6b)) / (-0x1 * 0xb7d + -0x72c + 0x12ac) + parseInt(w(0x8b)) / (0x1b32 + 0x1 * -0x1ddb + 0x2ad) * (-parseInt(x(0x9a)) / (0x11fb + 0x1 * 0x157f + 0x1 * -0x2775)) + parseInt(x(0x8a)) / (0x2 * -0x72f + 0x254e * 0x1 + 0x1a3 * -0xe) * (-parseInt(w(0x76)) / (-0x1 * 0x2660 + 0x9e2 + 0x1c85)) + parseInt(x(0x93)) / (0x5 * -0x83 + -0x18bc + 0x1b53) * (parseInt(w(0xa7)) / (0x835 + 0x1e01 + 0x151 * -0x1d)) + -parseInt(x(0x82)) / (-0x252d + 0x231d * 0x1 + 0x1 * 0x21a) * (-parseInt(x(0x94)) / (-0x22a6 + -0x233c + 0x45ed)) + parseInt(x(0x89)) / (0x13c * -0x7 + 0x2 * 0xb + 0x89a) * (-parseInt(w(0x7d)) / (-0x14a3 + -0x1d44 + -0x31f4 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2dd0e + -0x175e * -0x3e + -0x2ba5 * -0x6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x695 + 0x8 * 0x24b + 0x84 * -0x16);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'BacaO',
        'limit',
        'erty',
        'include',
        '1433365UKqQqp',
        '__importDe',
        'email',
        'ntAll',
        '1130RfnnzJ',
        'fault',
        'ls/Queue',
        'queue',
        'profile',
        'users',
        'order',
        'col',
        'mguqo',
        '391338HNFtAf',
        'omXay',
        'MaoQW',
        '3599751nsEWxp',
        'where',
        'defineProp',
        'findAndCou',
        'ls/Tenant',
        'toLowerCas',
        'TJXBn',
        'name',
        'iKJnI',
        'offset',
        'like',
        '1920562xkVOTh',
        'leoQg',
        'ASC',
        'LOWER',
        'User.name',
        'vxzYP',
        'attributes',
        '78ARRpbf',
        'length',
        'Sequelize',
        'sequelize',
        'LIKE',
        '1760xOWPPE',
        'ls/User',
        'value',
        '__esModule',
        'AXCJH',
        'dcdER',
        'fHBuV',
        '1188336FoJAGi',
        '24GgJNCO',
        '8PJGahn',
        'default',
        '../../mode',
        'distinct',
        'VTSqf',
        '2159fmoAFT',
        'model',
        'count',
        '8meZhKQ',
        '26708wySrEE',
        'hasMore'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0x9b) + z(0x9f)] || function (c) {
    const A = y;
    return c && c[A(0x85)] ? c : { 'default': c };
};
const k = {};
k[y(0x84)] = !![], Object[z(0x6d) + z(0x98)](exports, z(0x85), k);
const sequelize_1 = require(z(0x80)), Queue_1 = __importDefault(require(z(0x8d) + z(0xa0))), Tenant_1 = __importDefault(require(z(0x8d) + z(0x6f))), User_1 = __importDefault(require(z(0x8d) + z(0x83))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = z, C = z, h = {};
        h[B(0x7b)] = C(0x79), h[C(0x88)] = B(0x7a), h[B(0x86)] = B(0x81), h[C(0x71)] = function (u, v) {
            return u * v;
        }, h[B(0x96)] = function (u, v) {
            return u - v;
        }, h[B(0x77)] = C(0xa1), h[B(0x73)] = C(0x72), h[B(0x8f)] = B(0x9c), h[B(0x87)] = B(0xa2), h[B(0xa9)] = B(0x78), h[B(0xa6)] = function (u, v) {
            return u > v;
        }, h[B(0xa8)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x7f)][B(0x6c)](sequelize_1[B(0x7f)]['fn'](i[C(0x7b)], sequelize_1[C(0x7f)][B(0xa5)](i[C(0x88)])), i[B(0x86)], '%' + searchParam[C(0x70) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][C(0x75)]]: '%' + searchParam[B(0x70) + 'e']() + '%' } }
                ]
            }, l = -0x161 * 0xb + 0x741 * -0x3 + 0x2516, m = i[B(0x71)](l, i[B(0x96)](+pageNumber, -0x49 * 0x19 + 0x1b24 + 0xa01 * -0x2)), n = {};
        n[C(0x91)] = Queue_1[B(0x8c)], n[B(0x7c)] = [
            'id',
            i[C(0x77)]
        ];
        const o = {};
        o[B(0x91)] = Tenant_1[C(0x8c)], o[B(0x7c)] = [
            'id',
            i[C(0x73)]
        ];
        const p = {};
        p[C(0x6c)] = j, p[B(0x99)] = [
            n,
            o
        ], p[C(0x7c)] = [
            i[C(0x73)],
            'id',
            i[C(0x8f)],
            i[B(0x87)]
        ], p[B(0x97)] = l, p[B(0x74)] = m, p[B(0x8e)] = !![], p[C(0xa4)] = [[
                i[B(0x73)],
                i[C(0xa9)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[B(0x8c)][B(0x6e) + C(0x9d)](p), s = i[C(0xa6)](q, i[B(0xa8)](m, r[B(0x7e)])), t = {};
        return t[B(0xa3)] = r, t[C(0x92)] = q, t[B(0x95)] = s, t;
    };
exports[z(0x8c)] = AdminListUsersService;