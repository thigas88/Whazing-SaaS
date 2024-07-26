'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x8d)) / (0x25 + 0x1 * -0x1b4f + 0x1b2b) * (-parseInt(l(0x96)) / (-0x1b * 0x2f + 0x230f + -0x1e18)) + parseInt(m(0x8e)) / (-0xf6 * 0x18 + -0xc3b * -0x3 + -0xd9e) + -parseInt(l(0x92)) / (-0x1 * 0x1ce9 + 0x24b4 + -0x7c7) + -parseInt(m(0x90)) / (0x167e + -0x1233 * -0x2 + -0x3adf * 0x1) + -parseInt(m(0x8c)) / (0x1bca + 0x193c + -0x2 * 0x1a80) * (-parseInt(m(0xa0)) / (0x3 * -0xc6d + -0x2b3 * 0x9 + -0x4bd * -0xd)) + parseInt(l(0x95)) / (-0xb * 0x12b + 0x1820 + -0xb3f * 0x1) * (parseInt(l(0x82)) / (-0x65 * -0xd + 0x1 * -0xf44 + 0xa2c)) + -parseInt(m(0x9f)) / (-0x2 * -0x824 + 0x5 * -0x4e0 + 0x822);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x305f * -0xf + 0xdca4 + 0x3d7e0));
var __importDefault = this && this[n(0x81) + o(0xaa)] || function (c) {
    const p = o;
    return c && c[p(0x80)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23ac + 0x2600 + -0x1d9 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '\x0a\x20\x20\x20\x20selec',
        '1471010QPbFeH',
        '168gaKvXg',
        '.\x22groupId\x22',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '\x20,\x20\x22Users\x22',
        '\x20from\x20\x22Gro',
        'QueryTypes',
        'sequelize',
        'value',
        'defineProp',
        'ups\x22\x20q\x0a\x20\x20\x20',
        'fault',
        'query',
        'ls/Group',
        '=\x20:userId\x20',
        '\x20and\x20u.id\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        '__esModule',
        '__importDe',
        '9MgTtXl',
        'SELECT',
        'userId',
        '\x0a\x20\x20\x20\x20and\x20q',
        'tenantId',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x20\x20where\x20uq',
        'default',
        'type',
        '\x22userId\x22\x20=',
        '17094GpFgXK',
        '3UOsecC',
        '308730HaSsXf',
        '\x22\x20=\x20:tenan',
        '529640CfXTIR',
        '.\x22tenantId',
        '455896scFooa',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'tId\x0a\x20\x20\x20\x20',
        '1173656UmzqZc',
        '114414KKTbKc',
        '\x20\x20\x20and\x20uq.',
        'nest',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '\x22UsersGrou',
        '../../mode',
        'replacemen',
        'erty'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[o(0xa7)] = !![], Object[n(0xa8) + n(0x9d)](exports, n(0x80), k);
const sequelize_1 = require(o(0xa6)), Group_1 = __importDefault(require(n(0x9b) + o(0x7c))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0x9e) + q(0x87) + r(0xa4) + r(0xa9) + q(0xa3) + q(0x93) + q(0x9a) + q(0x99) + q(0x88) + q(0xa1) + q(0x7f) + r(0x97) + r(0x8b) + r(0xa2) + r(0x7e) + q(0x7d) + r(0x85) + r(0x91) + r(0x8f) + r(0x94), h = {};
        h[q(0x86)] = e, h[q(0x84)] = f;
        const i = {};
        i[r(0x9c) + 'ts'] = h, i[q(0x8a)] = sequelize_1[r(0xa5)][r(0x83)], i[r(0x98)] = !![];
        const j = await Group_1[q(0x89)][r(0xa6)]?.[r(0x7b)](g, i);
        return j;
    };
exports[n(0x89)] = ListUserGroupService;