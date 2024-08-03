'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa7 * -0x16 + 0x991 + -0x3 * 0x761);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1f1)) / (-0x2d * -0x57 + 0x1780 + 0x14b * -0x1e) + -parseInt(l(0x1ee)) / (0x79 * -0x9 + 0x107 * 0x23 + -0x1fb2) * (-parseInt(m(0x1f8)) / (-0x1 * 0x801 + 0x3d7 + 0x1 * 0x42d)) + parseInt(m(0x1d9)) / (-0xd87 + -0x4c3 + 0x124e) * (-parseInt(m(0x1d6)) / (0x1 * -0x1549 + -0x26f7 + 0x3c45)) + parseInt(l(0x1de)) / (0x5 * -0x727 + 0x1dd1 + 0x5f8) * (parseInt(l(0x1e0)) / (-0x23a7 + 0x1146 + 0x13 * 0xf8)) + parseInt(m(0x1ed)) / (0x82 * -0x43 + -0xd64 + 0x2f72) + parseInt(m(0x1d5)) / (-0x1 * 0x1955 + -0xfe2 + 0x2940) + parseInt(m(0x1e5)) / (-0x19c9 + 0x1 * -0x1caf + 0x3682) * (-parseInt(l(0x1cb)) / (-0x23d6 + 0x7 * 0x459 + 0x572));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa797 + 0x5b * -0x4a7 + 0x4e02b));
function a() {
    const s = [
        'nest',
        'tId\x0a\x20\x20\x20\x20',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'ls/Queue',
        '\x20=\x20q.id\x20\x0a\x20',
        '2942024HOXYBH',
        '2hgdhRY',
        'value',
        '\x0a\x20\x20\x20\x20selec',
        '103720tIhbhZ',
        'SELECT',
        '\x22\x20=\x20:tenan',
        '\x20,\x20\x22Users\x22',
        'es\x22\x20uq\x20\x0a\x20\x20',
        't\x20q.*\x20\x0a\x20\x20\x20',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '714639jptjcu',
        'erty',
        '\x22UsersQueu',
        '\x0a\x20\x20\x20\x20and\x20q',
        '319snTWQJ',
        'tenantId',
        'defineProp',
        '\x20\x20\x20and\x20uq.',
        '__importDe',
        '\x20\x20where\x20uq',
        'type',
        'query',
        '__esModule',
        '\x20and\x20u.id\x20',
        '2045673WLzIqe',
        '513535GJVvXv',
        '.\x22queueId\x22',
        'default',
        '4eoCmdY',
        'sequelize',
        'userId',
        'QueryTypes',
        'replacemen',
        '2062320ZBNWEL',
        '\x22userId\x22\x20=',
        '7xoWuil',
        '.\x22tenantId',
        '../../mode',
        '\x20from\x20\x22Que',
        'fault',
        '247070FIbBXS',
        '=\x20:userId\x20'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1cf) + n(0x1e4)] || function (c) {
    const p = n;
    return c && c[p(0x1d3)] ? c : { 'default': c };
};
const k = {};
k[n(0x1ef)] = !![], Object[o(0x1cd) + n(0x1c8)](exports, n(0x1d3), k);
const sequelize_1 = require(o(0x1da)), Queue_1 = __importDefault(require(n(0x1e2) + n(0x1eb))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = n, g = q(0x1f0) + r(0x1f6) + q(0x1e3) + r(0x1f7) + q(0x1f4) + q(0x1ea) + q(0x1c9) + q(0x1f5) + q(0x1d0) + q(0x1d7) + r(0x1ec) + q(0x1ce) + q(0x1df) + q(0x1e9) + q(0x1d4) + q(0x1e6) + r(0x1ca) + q(0x1e1) + q(0x1f3) + q(0x1e8), h = {};
        h[r(0x1cc)] = e, h[r(0x1db)] = f;
        const i = {};
        i[q(0x1dd) + 'ts'] = h, i[r(0x1d1)] = sequelize_1[r(0x1dc)][q(0x1f2)], i[q(0x1e7)] = !![];
        const j = await Queue_1[r(0x1d8)][q(0x1da)]?.[r(0x1d2)](g, i);
        return j;
    };
exports[o(0x1d8)] = ListUserQueueService;