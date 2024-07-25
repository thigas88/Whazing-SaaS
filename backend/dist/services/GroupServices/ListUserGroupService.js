'use strict';
const n = b, o = b;
function a() {
    const s = [
        't\x20q.*\x20\x0a\x20\x20\x20',
        'tenantId',
        '\x22UsersGrou',
        '\x22userId\x22\x20=',
        'ls/Group',
        '12444464VsWUUc',
        'SELECT',
        '11chYWwx',
        '3645spdUXN',
        'nest',
        '__esModule',
        'defineProp',
        '43530bPkHMz',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '\x20from\x20\x22Gro',
        'sequelize',
        '\x20and\x20u.id\x20',
        'erty',
        '\x20\x20\x20and\x20uq.',
        'QueryTypes',
        '.\x22tenantId',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '1019094niOgeV',
        '\x20=\x20q.id\x20\x0a\x20',
        '\x20\x20where\x20uq',
        '=\x20:userId\x20',
        '3iYoNmi',
        'type',
        '\x20,\x20\x22Users\x22',
        '2839612zACyAe',
        '5QvllWl',
        '8452206SWQXvR',
        '61584648YXgjkD',
        '\x22\x20=\x20:tenan',
        '7cCtjQh',
        '.\x22groupId\x22',
        '\x0a\x20\x20\x20\x20and\x20q',
        '../../mode',
        'userId',
        'tId\x0a\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20selec',
        'default',
        'fault',
        '__importDe',
        'replacemen',
        '312136ldyVTV',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'value',
        'query',
        'ps\x22\x20uq\x20\x0a\x20\x20'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x119)) / (0x939 + 0x5e * -0x4a + -0x5fc * -0x3) + -parseInt(l(0x102)) / (-0x17c0 + -0x34 * -0x6b + 0x7 * 0x4a) * (parseInt(l(0x106)) / (-0x17c + 0x88e + -0xd * 0x8b)) + -parseInt(m(0x109)) / (0x7 * 0x134 + 0xa6a + -0x12d2) * (-parseInt(l(0x10a)) / (0x1927 + -0x4a3 + -0x147f)) + -parseInt(l(0x10b)) / (0x1853 + -0xe45 + -0xa08) + parseInt(m(0x10e)) / (-0xd63 + 0x1 * -0x86 + -0x1 * -0xdf0) * (-parseInt(m(0xf1)) / (-0x19fc + -0x867 + 0x21 * 0x10b)) + parseInt(m(0xf4)) / (0x486 + 0x226 * -0xd + 0x161 * 0x11) * (-parseInt(m(0xf8)) / (-0x178 * 0xc + 0x35a * 0x2 + 0xaf6)) + -parseInt(l(0xf3)) / (-0x207c + -0x1 * -0x557 + 0x1b30) * (-parseInt(l(0x10c)) / (-0x93 * -0x9 + 0x1 * -0x15b5 + 0x1096));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * 0xf6da + -0x5 * 0x6d97 + 0x16e333));
var __importDefault = this && this[n(0x117) + o(0x116)] || function (c) {
    const p = o;
    return c && c[p(0xf6)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x10a6 + 0x26e6 + -0x18e * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x11b)] = !![], Object[n(0xf7) + n(0xfd)](exports, o(0xf6), k);
const sequelize_1 = require(n(0xfb)), Group_1 = __importDefault(require(o(0x111) + n(0xf0))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = o, g = q(0x114) + r(0x11e) + q(0xfa) + q(0xf9) + q(0x108) + q(0x101) + q(0x120) + q(0x11d) + r(0x104) + q(0x10f) + r(0x103) + q(0xfe) + r(0x121) + q(0x11a) + r(0xfc) + r(0x105) + q(0x110) + r(0x100) + r(0x10d) + q(0x113), h = {};
        h[r(0x11f)] = e, h[q(0x112)] = f;
        const i = {};
        i[r(0x118) + 'ts'] = h, i[q(0x107)] = sequelize_1[r(0xff)][r(0xf2)], i[q(0xf5)] = !![];
        const j = await Group_1[q(0x115)][r(0xfb)]?.[q(0x11c)](g, i);
        return j;
    };
exports[n(0x115)] = ListUserGroupService;