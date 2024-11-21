'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x11e)) / (0xf * -0x195 + -0x1 * -0x1e1f + -0x663) * (parseInt(l(0x109)) / (-0x115f * -0x2 + 0x30 * 0xf + -0x2 * 0x12c6)) + parseInt(l(0x111)) / (-0xa30 * -0x2 + 0x1b16 + -0x2f73) + -parseInt(m(0x123)) / (0x214f + 0x12db + -0x3426) * (parseInt(l(0x11c)) / (-0x2 * 0x8e1 + -0x351 + 0x3c * 0x5a)) + -parseInt(m(0x117)) / (0x46d * 0x7 + 0x22e6 + -0x41db) + parseInt(l(0x112)) / (-0x1 * 0x7db + 0xf90 + -0x7ae) + parseInt(l(0x126)) / (-0x1 * 0xdd9 + 0x732 + 0x6af) * (-parseInt(m(0x10a)) / (0x3 * 0x5b2 + -0x1388 + 0x27b)) + parseInt(l(0x108)) / (-0xa4 * -0x11 + 0x1 * -0x24cb + 0x19f1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa57 * 0x74 + -0x3 * -0x12acd + 0x3a905));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15b * 0x1 + 0x248a + 0x9 * -0x419);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x118) + n(0x12a)] || function (c) {
    const p = o;
    return c && c[p(0x11f)] ? c : { 'default': c };
};
const k = {};
k[o(0x10f)] = !![], Object[o(0x121) + n(0x12f)](exports, o(0x11f), k);
const sequelize_1 = require(n(0x116)), Group_1 = __importDefault(require(o(0x130) + o(0x12e))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = n, g = q(0x12d) + r(0x104) + r(0x110) + r(0x128) + r(0x133) + q(0x119) + q(0x11a) + q(0x124) + r(0x105) + q(0x113) + r(0x122) + r(0x106) + r(0x115) + q(0x10d) + r(0x127) + q(0x11b) + r(0x12c) + q(0x125) + q(0x132) + q(0x114), h = {};
        h[r(0x11d)] = e, h[q(0x120)] = f;
        const i = {};
        i[r(0x131) + 'ts'] = h, i[q(0x129)] = sequelize_1[r(0x12b)][r(0x10e)], i[r(0x10c)] = !![];
        const j = await Group_1[r(0x107)][q(0x116)]?.[r(0x10b)](g, i);
        return j;
    };
exports[o(0x107)] = ListUserGroupService;
function a() {
    const s = [
        '\x20\x20\x20and\x20uq.',
        'default',
        '7315790GaLFbK',
        '8VuvthV',
        '18iIeXYj',
        'query',
        'nest',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'SELECT',
        'value',
        '\x20from\x20\x22Gro',
        '399483FhWsPA',
        '1580705Gclixi',
        '.\x22groupId\x22',
        'tId\x0a\x20\x20\x20\x20',
        '\x22userId\x22\x20=',
        'sequelize',
        '1653732pHntuu',
        '__importDe',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x22UsersGrou',
        '=\x20:userId\x20',
        '2785DlFwXy',
        'tenantId',
        '77110IJcNhX',
        '__esModule',
        'userId',
        'defineProp',
        '\x20=\x20q.id\x20\x0a\x20',
        '436HxbPyC',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '.\x22tenantId',
        '1133904cbdIDU',
        '\x20and\x20u.id\x20',
        'ups\x22\x20q\x0a\x20\x20\x20',
        'type',
        'fault',
        'QueryTypes',
        '\x0a\x20\x20\x20\x20and\x20q',
        '\x0a\x20\x20\x20\x20selec',
        'ls/Group',
        'erty',
        '../../mode',
        'replacemen',
        '\x22\x20=\x20:tenan',
        '\x20,\x20\x22Users\x22',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20\x20where\x20uq'
    ];
    a = function () {
        return s;
    };
    return a();
}