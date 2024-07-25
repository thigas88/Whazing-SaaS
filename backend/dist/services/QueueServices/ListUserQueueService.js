'use strict';
function a() {
    const s = [
        '../../mode',
        'replacemen',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '177330Vicmel',
        'default',
        'type',
        '\x20\x20\x20and\x20uq.',
        '96RIKDFT',
        'ls/Queue',
        'value',
        'es\x22\x20uq\x20\x0a\x20\x20',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '118490DnZDlS',
        '438852neQeGu',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x20,\x20\x22Users\x22',
        '\x0a\x20\x20\x20\x20and\x20q',
        '254545aUFmpD',
        '\x22userId\x22\x20=',
        '\x20\x20where\x20uq',
        '\x20and\x20u.id\x20',
        '__esModule',
        '__importDe',
        'erty',
        'fault',
        'nest',
        '.\x22queueId\x22',
        '138636addbbu',
        'tenantId',
        'defineProp',
        'QueryTypes',
        'sequelize',
        '=\x20:userId\x20',
        '4gdHoeP',
        '\x20from\x20\x22Que',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '546xxMgxa',
        'query',
        '1687QAFQuF',
        'tId\x0a\x20\x20\x20\x20',
        '.\x22tenantId',
        '\x22\x20=\x20:tenan',
        '\x0a\x20\x20\x20\x20selec',
        'userId',
        '7015180THBPsy',
        '\x20=\x20q.id\x20\x0a\x20',
        '\x22UsersQueu',
        'SELECT'
    ];
    a = function () {
        return s;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xfb)) / (0xef * 0xb + 0x103 * 0x1f + 0x29a1 * -0x1) + -parseInt(l(0xf2)) / (0x1d * 0xf + 0x7 * -0x353 + 0x1594) + -parseInt(m(0xfc)) / (0xe79 + -0xd22 + -0x154) + -parseInt(l(0xe0)) / (-0x133 * -0xb + -0x1215 + 0x2 * 0x274) * (parseInt(l(0x100)) / (0x22 * -0x9c + -0x21aa + 0x13 * 0x2dd)) + parseInt(m(0xe3)) / (-0x115 * 0x3 + 0x1fb4 + -0x1c6f) * (parseInt(m(0xe5)) / (-0x1 * -0xa9d + 0x3d4 + -0xe6a)) + parseInt(l(0xf6)) / (0x2001 + 0x730 * 0x4 + -0x1 * 0x3cb9) * (-parseInt(l(0xda)) / (-0x22a6 + -0x790 * -0x2 + 0x138f)) + parseInt(m(0xeb)) / (0x5ad * 0x1 + 0x14c6 + -0x1a69);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x325ed + 0x19788 + -0x2b108));
var __importDefault = this && this[n(0xd5) + n(0xd7)] || function (c) {
    const p = n;
    return c && c[p(0xd4)] ? c : { 'default': c };
};
const k = {};
k[o(0xf8)] = !![], Object[o(0xdc) + n(0xd6)](exports, o(0xd4), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7bf + -0x2050 + 0x28e0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0xde)), Queue_1 = __importDefault(require(n(0xef) + o(0xf7))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0xe9) + r(0xf1) + r(0xe1) + q(0xfa) + r(0xfe) + q(0xfd) + r(0xed) + q(0xf9) + r(0xd2) + q(0xd9) + q(0xec) + r(0xf5) + r(0xd1) + r(0xe2) + r(0xd3) + r(0xdf) + r(0xff) + q(0xe7) + q(0xe8) + r(0xe6), h = {};
        h[r(0xdb)] = e, h[r(0xea)] = f;
        const i = {};
        i[r(0xf0) + 'ts'] = h, i[q(0xf4)] = sequelize_1[q(0xdd)][q(0xee)], i[q(0xd8)] = !![];
        const j = await Queue_1[r(0xf3)][r(0xde)]?.[q(0xe4)](g, i);
        return j;
    };
exports[o(0xf3)] = ListUserQueueService;