'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x90)) / (-0x1b02 * -0x1 + -0x13b2 + -0x1 * 0x74f) * (-parseInt(m(0xae)) / (0x2553 + 0x1f5e + -0x44af)) + parseInt(m(0xa6)) / (0x7 * -0x4f4 + -0x12c6 + 0x3575) * (parseInt(l(0xa1)) / (-0x13e8 + 0x9bb * 0x1 + 0xa31)) + -parseInt(l(0xaa)) / (-0x6 * -0x3d0 + 0x1 * 0x2417 + 0x1e * -0x1f7) * (-parseInt(l(0x8d)) / (-0x1 * 0xe63 + 0x4d2 + 0x5 * 0x1eb)) + -parseInt(l(0x89)) / (0xe0b + 0x1922 + -0x2726) * (-parseInt(m(0x98)) / (-0x20 * -0x52 + -0x1272 * 0x1 + -0x27 * -0x36)) + -parseInt(m(0x8b)) / (0x151 * 0x10 + 0xce9 + -0x10 * 0x21f) * (-parseInt(m(0x91)) / (-0x1c1f + -0x24c * -0xa + 0x531)) + parseInt(l(0xa7)) / (-0x1 * 0xc43 + 0x5c7 + 0x687) * (-parseInt(l(0xac)) / (-0x1520 + -0x1fd7 + 0x3503)) + parseInt(m(0xad)) / (-0xbad + 0x236b + 0x4bd * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8b * 0x22cc + 0x92b34 + -0x2d37a * 0x6));
function a() {
    const s = [
        '1788uEDkgK',
        '3047798bbeWzB',
        '273514CuiCrO',
        '\x20,\x20\x22Users\x22',
        '../../mode',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        'userId',
        'nest',
        'SELECT',
        '\x20\x20\x20and\x20uq.',
        'value',
        'default',
        '\x20=\x20q.id\x20\x0a\x20',
        '__esModule',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20selec',
        '7PZwlRE',
        '\x20and\x20u.id\x20',
        '9LGCwsl',
        '\x0a\x20\x20\x20\x20and\x20q',
        '156DImuFR',
        'defineProp',
        'erty',
        '1uCBEFj',
        '161380VxceIl',
        'ls/Group',
        '.\x22groupId\x22',
        '\x20\x20where\x20uq',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x22userId\x22\x20=',
        '\x22UsersGrou',
        '5973472AWUUgz',
        'tId\x0a\x20\x20\x20\x20',
        '\x20from\x20\x22Gro',
        '.\x22tenantId',
        'sequelize',
        'replacemen',
        'fault',
        '__importDe',
        'query',
        '5440LKqJpa',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '=\x20:userId\x20',
        'QueryTypes',
        'type',
        '288xHepKw',
        '39941nIexYg',
        'tenantId',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '53420CFwWMT',
        '\x22\x20=\x20:tenan'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x9f) + o(0x9e)] || function (c) {
    const p = n;
    return c && c[p(0x86)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2340 + 0x1404 + 0x1241 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x83)] = !![], Object[n(0x8e) + n(0x8f)](exports, n(0x86), k);
const sequelize_1 = require(n(0x9c)), Group_1 = __importDefault(require(n(0xb0) + o(0x92))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = n, g = q(0x88) + r(0x87) + q(0x9a) + r(0xa9) + r(0xaf) + q(0x95) + q(0x97) + q(0xb1) + q(0x94) + r(0x93) + r(0x85) + q(0x82) + q(0x96) + q(0xa2) + r(0x8a) + r(0xa3) + r(0x8c) + r(0x9b) + r(0xab) + q(0x99), h = {};
        h[r(0xa8)] = e, h[r(0xb2)] = f;
        const i = {};
        i[q(0x9d) + 'ts'] = h, i[q(0xa5)] = sequelize_1[q(0xa4)][r(0x81)], i[q(0xb3)] = !![];
        const j = await Group_1[r(0x84)][q(0x9c)]?.[r(0xa0)](g, i);
        return j;
    };
exports[o(0x84)] = ListUserGroupService;