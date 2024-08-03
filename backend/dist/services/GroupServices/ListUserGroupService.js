'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1dd)) / (0x1d2b + 0x1199 + -0x2ec3) * (parseInt(m(0x1d5)) / (-0x1822 + 0x682 + 0x11a2)) + -parseInt(l(0x1d4)) / (-0x1928 + -0x1c * 0x15a + 0x3f03) + -parseInt(l(0x1cf)) / (0xbef + -0x199f + 0x4 * 0x36d) + -parseInt(m(0x1e6)) / (0x1ac1 + -0x1f50 + 0x494) * (parseInt(l(0x1d2)) / (0x1 * 0xb47 + -0x122 * -0x7 + 0x1 * -0x132f)) + -parseInt(l(0x1e9)) / (0x1a * 0xd9 + -0x2496 + 0xe93) + -parseInt(l(0x1f2)) / (-0x3f3 + -0x19c3 + 0x1dbe) * (-parseInt(l(0x1e5)) / (0x940 + 0x14f * 0x13 + -0x4 * 0x885)) + parseInt(l(0x1f1)) / (-0x11 * -0x23 + 0x19cb + 0xc * -0x257) * (parseInt(m(0x1f6)) / (-0x17e0 + 0x2102 + 0xb3 * -0xd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1819e + 0x3 * 0x693c5 + -0xa55f9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x977 + 0x55 * 0x4a + 0xd4e * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '18JPqhfG',
        'QueryTypes',
        '194598czuXru',
        '12086LsxqLP',
        '.\x22groupId\x22',
        'type',
        '\x20\x20where\x20uq',
        'query',
        'sequelize',
        '\x22\x20=\x20:tenan',
        'tId\x0a\x20\x20\x20\x20',
        '223RuWFhT',
        '\x0a\x20\x20\x20\x20and\x20q',
        '.\x22tenantId',
        '\x20\x20\x20and\x20uq.',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '\x22userId\x22\x20=',
        '\x20from\x20\x22Gro',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '2412081kTizwz',
        '2146480MtDNrO',
        'SELECT',
        '__esModule',
        '720104BzBYkL',
        '=\x20:userId\x20',
        'default',
        'ls/Group',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'value',
        '\x0a\x20\x20\x20\x20selec',
        'userId',
        '82970twKVMg',
        '8zyFHlh',
        'replacemen',
        '\x20,\x20\x22Users\x22',
        'nest',
        '2112iNVVOD',
        '\x20=\x20q.id\x20\x0a\x20',
        'erty',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '\x22UsersGrou',
        'tenantId',
        '__importDe',
        '\x20and\x20u.id\x20',
        'defineProp',
        '4154048LFGoWH',
        'fault',
        '../../mode'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1fd) + n(0x1d0)] || function (c) {
    const p = n;
    return c && c[p(0x1e8)] ? c : { 'default': c };
};
const k = {};
k[o(0x1ee)] = !![], Object[o(0x1ce) + o(0x1f8)](exports, o(0x1e8), k);
const sequelize_1 = require(o(0x1da)), Group_1 = __importDefault(require(n(0x1d1) + o(0x1ec))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = o, g = q(0x1ef) + q(0x1f9) + q(0x1e3) + r(0x1e4) + r(0x1f4) + q(0x1ed) + r(0x1fb) + q(0x1e1) + q(0x1d8) + q(0x1d6) + r(0x1f7) + q(0x1e0) + q(0x1e2) + r(0x1fa) + q(0x1cd) + r(0x1ea) + q(0x1de) + r(0x1df) + q(0x1db) + r(0x1dc), h = {};
        h[r(0x1fc)] = e, h[q(0x1f0)] = f;
        const i = {};
        i[r(0x1f3) + 'ts'] = h, i[q(0x1d7)] = sequelize_1[r(0x1d3)][q(0x1e7)], i[q(0x1f5)] = !![];
        const j = await Group_1[q(0x1eb)][q(0x1da)]?.[r(0x1d9)](g, i);
        return j;
    };
exports[o(0x1eb)] = ListUserGroupService;