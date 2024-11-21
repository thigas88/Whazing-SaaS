'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1a2)) / (0x505 * 0x4 + -0x22d5 + -0xec2 * -0x1) + -parseInt(l(0x193)) / (0x1347 + -0x249 * -0x2 + 0x11 * -0x167) * (-parseInt(l(0x1ad)) / (-0x3 * 0x269 + 0x103 + -0x13f * -0x5)) + -parseInt(m(0x190)) / (-0x22f4 + -0x35 * -0x4d + 0x1307) + parseInt(l(0x196)) / (0x1776 + 0xd3a + -0x24ab) + parseInt(l(0x1a6)) / (0xaab * -0x1 + -0x183 + -0x1 * -0xc34) + parseInt(m(0x1ae)) / (-0x1 * 0x249 + -0x90b * -0x2 + 0x7e3 * -0x2) + -parseInt(m(0x192)) / (-0x204d + 0x2 * 0x10fb + -0x1a1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19bee + 0x89bbd * -0x1 + 0x4 * 0x2ef57));
var __importDefault = this && this[n(0x194) + o(0x19e)] || function (c) {
    const p = o;
    return c && c[p(0x1bc)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x443 + -0x90 + -0x224);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '3922hlCkEa',
        '\x22UsersQueu',
        'ls/Queue',
        '\x20=\x20q.id\x20\x0a\x20',
        '3092706wrsPKM',
        'es\x22\x20uq\x20\x0a\x20\x20',
        'tenantId',
        '\x0a\x20\x20\x20\x20and\x20q',
        '\x20\x20where\x20uq',
        'replacemen',
        '\x20and\x20u.id\x20',
        '422277DjnCCJ',
        '3934616kckcQj',
        'value',
        '../../mode',
        '\x0a\x20\x20\x20\x20selec',
        '=\x20:userId\x20',
        'SELECT',
        'ues\x22\x20q\x0a\x20\x20\x20',
        'query',
        '.\x22queueId\x22',
        '\x20\x20\x20and\x20uq.',
        'userId',
        'nest',
        'type',
        'tId\x0a\x20\x20\x20\x20',
        '__esModule',
        '.\x22tenantId',
        '1599160nmuYUc',
        'defineProp',
        '11213224HQbdcP',
        '6XdcZJD',
        '__importDe',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '3081090pUkJLg',
        '\x22\x20=\x20:tenan',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x22userId\x22\x20=',
        'erty',
        'QueryTypes',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'sequelize',
        'fault',
        '\x20,\x20\x22Users\x22',
        '\x20from\x20\x22Que',
        'default'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0x1af)] = !![], Object[o(0x191) + o(0x19a)](exports, n(0x1bc), k);
const sequelize_1 = require(n(0x19d)), Queue_1 = __importDefault(require(o(0x1b0) + o(0x1a4))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = o, g = q(0x1b1) + r(0x198) + r(0x1a0) + r(0x1b4) + q(0x19f) + q(0x19c) + q(0x1a3) + r(0x1a7) + q(0x1aa) + q(0x1b6) + r(0x1a5) + r(0x1b7) + q(0x199) + r(0x195) + r(0x1ac) + q(0x1b2) + r(0x1a9) + q(0x18f) + r(0x197) + r(0x1bb), h = {};
        h[r(0x1a8)] = e, h[q(0x1b8)] = f;
        const i = {};
        i[q(0x1ab) + 'ts'] = h, i[q(0x1ba)] = sequelize_1[r(0x19b)][r(0x1b3)], i[r(0x1b9)] = !![];
        const j = await Queue_1[r(0x1a1)][q(0x19d)]?.[q(0x1b5)](g, i);
        return j;
    };
exports[n(0x1a1)] = ListUserQueueService;